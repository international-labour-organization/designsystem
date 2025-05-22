import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { RichTextProps } from "./RichText.props";

const RichText: FC<RichTextProps> = ({
  className,
  content,
  theme = "light",
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--richtext`;
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
