import { useId, useMemo } from "react";

export interface MegaNavIds {
  toggle: (id: string) => string;
  panel: (id: string) => string;
}

function useIds(): MegaNavIds {
  const uid = useId();

  return useMemo(
    () => ({
      toggle: (id) => `${uid}-${id}-toggle`,
      panel: (id) => `${uid}-${id}-panel`,
    }),
    [uid]
  );
}

export { useIds };
