import { FC } from "react";
import classNames from "classnames";
import { RichTextProps } from "./RichText.props";

const RichText: FC<RichTextProps> = ({
  className,
  content,
  theme = "light",
}) => {
  const baseClass = "ilo--richtext";
  const themeClass = `${baseClass}__theme__${theme}`;

  const richTextClasses = classNames(className, baseClass, themeClass);

  return (
    <div
      className={richTextClasses}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
