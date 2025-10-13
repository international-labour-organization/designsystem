import { HTMLAttributes, ReactNode } from "react";

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface DynamicHeadingProps extends HTMLAttributes<HTMLHeadElement> {
  level: TitleLevel;
  children: ReactNode;
}

function DynamicHeading({ level, children, ...props }: DynamicHeadingProps) {
  const Tag = level;

  return <Tag {...props}>{children}</Tag>;
}

export { DynamicHeading };
