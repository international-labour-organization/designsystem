import { HTMLAttributes, ReactNode } from "react";
import { HeadingTypes } from "../../types";

interface DynamicHeadingProps extends HTMLAttributes<HTMLHeadElement> {
  level: Extract<HeadingTypes, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
  children: ReactNode;
}

function DynamicHeading({ level, children, ...props }: DynamicHeadingProps) {
  const Tag = level;

  return <Tag {...props}>{children}</Tag>;
}

export { DynamicHeading };
