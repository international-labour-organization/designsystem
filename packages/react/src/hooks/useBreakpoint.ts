import useBp from "use-breakpoint";

const style = window.getComputedStyle(document.body);
const names = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

const screenConfig = names.reduce<Record<(typeof names)[number], number>>(
  (acc, name) => {
    const target = parseInt(style.getPropertyValue(`--ilo-breakpoint-${name}`));

    if (target) {
      acc[name] = target;
    }

    return acc;
  },
  {
    xs: 320,
    sm: 414,
    md: 610,
    lg: 1024,
    xl: 1140,
    xxl: 1440,
  }
);

const useBreakpoint = useBp.bind(null, screenConfig);

export default useBreakpoint;
