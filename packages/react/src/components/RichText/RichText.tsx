import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { RichTextProps } from "./RichText.props";

const RichText: FC<RichTextProps> = ({ className, content }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--richtext`;

  const richTextClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <div
      className={richTextClasses}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
