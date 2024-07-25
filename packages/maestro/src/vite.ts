import Twig from "twig";
import yaml from "@modyfi/vite-plugin-yaml";

import twig from "./plugin/twig";

type Options = {
  namespaces: Record<string, string>;
  globals?: Record<string, unknown>;
  dynamics?: string[];
};

function UIPatterns(options: Options) {
  return [
    yaml(),
    twig({
      namespaces: options.namespaces,
      globalContext: options.globals,
      dynamics: options.dynamics,
      functions: {
        boolval: (instance: typeof Twig) =>
          //@ts-expect-error typedefintions are wrong
          instance.extendFilter("boolval", (value: string) =>
            value === "false" ? false : !!value
          ),
      },
    }),
  ];
}

export { UIPatterns };
