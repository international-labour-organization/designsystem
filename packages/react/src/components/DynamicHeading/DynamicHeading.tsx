import { HTMLAttributes, ReactNode } from "react";
import { HeadingTypes } from "../../types";

interface DynamicHeadingProps extends HTMLAttributes<HTMLElement> {
  level: HeadingTypes;
  children: ReactNode;
}

function DynamicHeading({ level, children, ...props }: DynamicHeadingProps) {
  const Tag = level;

  return <Tag {...props}>{children}</Tag>;
}

export { DynamicHeading };
