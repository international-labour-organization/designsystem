type PluginParams = {
  namespaces: Record<string, string>;
  functions?: Record<string, unknown>;
  globalContext?: Record<string, unknown>;
  dynamics?: string[];
};
function twig(args: PluginParams): PluginOption;

export default twig;
