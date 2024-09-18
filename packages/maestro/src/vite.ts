import Twig from "twig";
import yaml from "@modyfi/vite-plugin-yaml";
import type { Plugin } from "vite";

import twig from "./plugin/twig";

interface Options {
  namespaces: Record<string, string>;
  globals?: Record<string, unknown>;
  dynamics?: string[];
}

function UIPatterns(options: Options): Plugin[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const plugins: Plugin[] = [
    yaml(),
    twig({
      namespaces: options.namespaces,
      globalContext: options.globals,
      dynamics: options.dynamics,
      functions: {
        boolval: (instance: typeof Twig) =>
          // @ts-expect-error - twig preprocessor wants it to be a function
          instance.extendFilter("boolval", (value: string) =>
            value === "false" ? false : !!value
          ),
      },
    }),
  ];

  return plugins;
}

export { UIPatterns };
