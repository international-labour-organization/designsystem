import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect warns during SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
