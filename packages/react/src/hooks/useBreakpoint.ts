import useBp from "use-breakpoint";

const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

const names = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
const defaults = {
  xs: 320,
  sm: 414,
  md: 610,
  lg: 1024,
  xl: 1140,
  xxl: 1440,
};

const screenConfig = isBrowser
  ? names.reduce<Record<(typeof names)[number], number>>((acc, name) => {
      const style = window.getComputedStyle(document.body);
      const target = parseInt(
        style.getPropertyValue(`--ilo-breakpoint-${name}`)
      );

      if (target) {
        acc[name] = target;
      }

      return acc;
    }, defaults)
  : defaults;

const useBreakpoint = useBp.bind(null, screenConfig);

export default useBreakpoint;
