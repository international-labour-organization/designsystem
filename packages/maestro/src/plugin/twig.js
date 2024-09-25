/**
 * This is a transferred version of `larowlan/vite-plugin-twig-drupal
 *
 * TODO: reimplement with
 *   - more typesafe approach
 *   - remove react support
 *   - decompose
 */

import { resolve, dirname } from "node:path";
import { existsSync, readdirSync } from "node:fs";

import Twig from "twig";

const { twig } = Twig;

const FRAMEWORK_REACT = "react";
const FRAMEWORK_HTML = "html";

const defaultOptions = {
  namespaces: {},
  filters: {},
  functions: {},
  globalContext: {},
  framework: FRAMEWORK_HTML,
  pattern: /\.(twig)(\?.*)?$/,
};
Twig.cache(false);

const includeTokenTypes = [
  "Twig.logic.type.embed",
  "Twig.logic.type.include",
  "Twig.logic.type.extends",
  "Twig.logic.type.import",
];

const resolveFile = (directory, file) => {
  const filesToTry = [file, `${file}.twig`, `${file}.html.twig`];
  for (const ix in filesToTry) {
    const path = resolve(filesToTry[ix]);
    if (existsSync(path)) {
      return path;
    }
    const withDir = resolve(directory, filesToTry[ix]);
    if (existsSync(withDir)) {
      return withDir;
    }
  }
  return resolve(directory, file);
};

const isDynamic = (token) => {
  const type = token.token?.type;

  if (type === "Twig.logic.type.include") {
    const { stack } = token.token;
    if (stack.length > 1 && stack.find((item) => item.value === "~")) {
      return true;
    }
  }

  return false;
};

const pluckIncludes = (tokens) => {
  return [
    ...tokens
      .filter((token) => {
        const type = token.token?.type;
        return includeTokenTypes.includes(type) && !isDynamic(token);
      })
      .reduce(
        (carry, token) => [
          ...carry,
          ...token.token.stack.map((stack) => stack.value),
        ],
        []
      ),
    ...tokens.reduce(
      (carry, token) => [...carry, ...pluckIncludes(token.token?.output || [])],
      []
    ),
  ].filter((value, index, array) => {
    return array.indexOf(value) === index;
  });
};

const resolveNamespaceOrComponent = (namespaces, template) => {
  let resolveTemplate = template;
  // Support for SDC.
  if (template.includes(":")) {
    const [namespace, component] = template.split(":");
    resolveTemplate = `@${namespace}/${component}/${component}`;
  }
  return Twig.path.expandNamespace(namespaces, resolveTemplate);
};

const resolveJS = (directory) => {
  const pathChunks = directory.split("/");
  if (pathChunks.length === 0) return;
  const ext = "behavior.js";

  const componentName = pathChunks[pathChunks.length - 1];
  if (!existsSync(resolve(directory, `${componentName}.${ext}`))) return;

  return resolve(directory, `${componentName}.${ext}`);
};

const getNonDynamicIncludes = (namespace, dynamics) => {
  const items = readdirSync(namespace);

  return items
    .filter((item) => !dynamics.includes(item))
    .map((item) => `@components/${item}/${item}.twig`);
};

const compileTemplate = (id, file, { namespaces }) => {
  return new Promise((resolve, reject) => {
    const options = { namespaces, rethrow: true, allowInlineIncludes: true };
    twig({
      id,
      path: file,
      error: reject,
      allowInlineIncludes: true,
      load(template) {
        if (typeof template.tokens === "undefined") {
          reject("Error compiling twig file");
          return;
        }
        resolve({
          includes: pluckIncludes(template.tokens),
          code: template.compile(options),
        });
      },
    });
  });
};

Twig.cache(false);

const errorHandler =
  (id, isDefault = true) =>
  (e) => {
    if (isDefault) {
      return {
        code: `export default () => 'An error occurred whilst rendering ${id}: ${e.toString()} ${
          e.stack
        }';`,
        map: null,
      };
    }
    return {
      code: null,
      map: null,
    };
  };

const plugin = (options = {}) => {
  options = { ...defaultOptions, ...options };
  return {
    name: "vite-plugin-twig-drupal",
    config: ({ root }) => {
      if (!options.root) {
        options.root = root;
      }
    },
    async shouldTransformCachedModule(src, id) {
      return options.pattern.test(id);
    },
    async transform(src, id) {
      if (options.pattern.test(id)) {
        let frameworkInclude = "";
        let frameworkTransform = "const frameworkTransform = (html) => html;";
        if (options.framework === FRAMEWORK_REACT) {
          frameworkInclude = `import React from 'react'`;
          frameworkTransform = `const frameworkTransform = (html) => React.createElement('div', {dangerouslySetInnerHTML: {'__html': html}});;`;
        }

        let isDynamic = false;

        if (options.dynamics) {
          isDynamic = options.dynamics.some((dynamic) =>
            id.endsWith(`${dynamic}.twig`)
          );
        }

        let embed,
          embeddedIncludes,
          functions,
          code,
          includes,
          seen = [],
          withJS;

        try {
          const result = await compileTemplate(id, id, options).catch(
            errorHandler(id)
          );
          if ("map" in result) {
            // An error occurred.
            return result;
          }
          code = result.code;
          includes = result.includes;
          if (isDynamic) {
            includes = getNonDynamicIncludes(
              options.namespaces.components,
              options.dynamics
            );
          }

          const includePromises = [];
          const jsBundle = resolveJS(dirname(id));
          const processIncludes = (template) => {
            const file = resolveFile(
              dirname(id),
              resolveNamespaceOrComponent(options.namespaces, template)
            );
            if (!seen.includes(template)) {
              includePromises.push(
                // eslint-disable-next-line no-async-promise-executor
                new Promise(async (resolve, _reject) => {
                  const { includes, code } = await compileTemplate(
                    template,
                    file,
                    options
                  ).catch(errorHandler(template, false));
                  if (includes) {
                    includes.forEach(processIncludes);
                  }
                  resolve(code);
                })
              );
              seen.push(template);
            }
          };
          includes.forEach(processIncludes);
          embed = includes
            .filter((template) => template !== "_self")
            .map(
              (template) =>
                `import '${resolveFile(
                  dirname(id),
                  resolveNamespaceOrComponent(options.namespaces, template)
                )}';`
            )
            .join("\n");

          if (jsBundle) {
            withJS = `import '${jsBundle}';`;
          }

          functions = Object.entries(options.functions)
            .map(([name, value]) => {
              return `
              const ${name} = ${value};
              ${name}(Twig);
            `;
            })
            .join("\n");

          const includeResult = await Promise.all(includePromises).catch(
            errorHandler(id)
          );
          if (!Array.isArray(includeResult) && "map" in includeResult) {
            // An error occurred.
            return includeResult;
          }
          embeddedIncludes = includeResult.reverse().join("\n");
        } catch (e) {
          return errorHandler(id)(e);
        }

        const output = `
        import Twig, { twig } from 'twig';
        import DrupalAttribute from 'drupal-attribute';
        import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
        ${withJS}
        ${frameworkInclude}

        ${embed}

        ${functions}

        addDrupalExtensions(Twig);

        // Disable caching.
        Twig.cache(false);


        ${embeddedIncludes};
        ${frameworkTransform};
        export default (context = {}) => {
          const component = ${code}
          ${includes ? `component.options.allowInlineIncludes = true;` : ""}
          try {
            return frameworkTransform(component.render({
              attributes: new DrupalAttribute(),
              ...${JSON.stringify(options.globalContext)},
              ...context
            }));
          }
          catch (e) {
            return frameworkTransform('An error occurred whilst rendering ${id}: ' + e.toString());
          }
        }`;
        return {
          code: output,
          map: null,
          dependencies: seen,
        };
      }
    },
  };
};

export default plugin;
