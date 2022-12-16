import { ReactNode } from "react";

export interface GlobalProviderContextProps {
  /**
   * Prefix classname to use across the components.
   */
  prefix: string;
}

export interface GlobalProviderProps extends GlobalProviderContextProps {
  /**
   * Specify the content of nested under the global provider.
   */
  children: ReactNode;
}
