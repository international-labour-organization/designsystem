import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TagProps } from "./Tag.props";

const Tag: FC<TagProps> = ({ className, children, ...rest }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tag`;
  const itemClass = `${prefix}--tag-set__item`;

  const tagClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <li className={itemClass}>
      <button type="button" className={tagClasses} {...rest}>
        {children}
      </button>
    </li>
  );
};

export default Tag;
