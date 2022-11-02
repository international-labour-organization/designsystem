"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.include = void 0;
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
const merge_1 = require("../../../helpers/merge");
const loader_1 = require("../../../error/loader");
const template_1 = require("../../../template");
const is_traversable_1 = require("../../../helpers/is-traversable");
const runtime_1 = require("../../../error/runtime");
const util_1 = require("util");
const is_plain_object_1 = require("../../../helpers/is-plain-object");
/**
 * Renders a template.
 *
 * @param {TwingTemplate} template
 * @param {TwingContext<any, any>} context
 * @param {TwingSource} from
 * @param {TwingOutputBuffer} outputBuffer
 * @param {string | Map<number, string | TwingTemplate>} templates The template to render or an array of templates to try consecutively
 * @param {any} variables The variables to pass to the template
 * @param {boolean} withContext
 * @param {boolean} ignoreMissing Whether to ignore missing templates or not
 * @param {boolean} sandboxed Whether to sandbox the template or not
 *
 * @returns {Promise<string>} The rendered template
 */
function include(template, context, outputBuffer, templates, variables = {}, withContext = true, ignoreMissing = false, sandboxed = false) {
    let env = template.environment;
    let from = template.source;
    let alreadySandboxed = env.isSandboxed();
    if (!is_plain_object_1.isPlainObject(variables) && !is_traversable_1.isTraversable(variables)) {
        return Promise.reject(new runtime_1.TwingErrorRuntime(`Variables passed to the "include" function or tag must be iterable, got "${!util_1.isNullOrUndefined(variables) ? typeof variables : variables}".`, -1, from));
    }
    variables = iterator_to_map_1.iteratorToMap(variables);
    if (withContext) {
        variables = merge_1.merge(context, variables);
    }
    if (sandboxed) {
        if (!alreadySandboxed) {
            env.enableSandbox();
        }
    }
    if (typeof templates === 'string' || templates instanceof template_1.TwingTemplate) {
        templates = new Map([[0, templates]]);
    }
    let restoreSandbox = () => {
        if (sandboxed && !alreadySandboxed) {
            env.disableSandbox();
        }
    };
    let resolveTemplate = (templates) => {
        return env.resolveTemplate([...templates.values()], from).catch((e) => {
            restoreSandbox();
            if (e instanceof loader_1.TwingErrorLoader) {
                if (!ignoreMissing) {
                    throw e;
                }
                else {
                    return null;
                }
            }
            else {
                throw e;
            }
        });
    };
    return resolveTemplate(templates).then((template) => {
        let promise = template ? template.render(variables, outputBuffer) : Promise.resolve('');
        return promise.then((result) => {
            restoreSandbox();
            return result;
        }).catch((e) => {
            restoreSandbox();
            throw e;
        });
    });
}
exports.include = include;
