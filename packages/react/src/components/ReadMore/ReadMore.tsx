import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ReadMoreProps } from "./ReadMore.props";
import { RichText } from "../RichText";

const ReadMore: FC<ReadMoreProps> = ({
  buttonlabel,
  className,
  excerpt,
  fulltext,
  openatstart,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--read-more`;
  const [content, setContent] = useState(openatstart ? fulltext : excerpt);
  const [isopen, setOpen] = useState(openatstart);

  const readMoreClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--open`]: isopen,
  });

  const readmoreButtonClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--button`]: true,
    [`${baseClass}--button--open`]: isopen,
  });

  /**
   * On click, toggle state vars
   */
  const handleClick = () => {
    const nextcontent = content === excerpt ? fulltext : excerpt;
    setContent(nextcontent);
    setOpen(!isopen);
  };

  return (
    <div className={readMoreClasses}>
      <RichText content={content} {...rest} />
      <button
        className={readmoreButtonClasses}
        aria-expanded={isopen}
        onClick={() => handleClick()}
      >
        {buttonlabel}
      </button>
    </div>
  );
};

export default ReadMore;
