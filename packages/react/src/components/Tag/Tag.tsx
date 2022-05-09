import { useContext, FC, MouseEvent } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TagProps } from "./Tag.props";
import { TagSetContext } from "./TagSet";

const Tag: FC<TagProps> = ({ className, children, id, ...rest }) => {
  const { prefix } = useGlobalSettings();
  const {
    activeItems,
    setActiveItems,
    getUpdatedItems,
    allowMultipleActive,
    onButtonClick,
  } = useContext(TagSetContext);
  const open = activeItems.indexOf(id) > -1;

  const baseClass = `${prefix}--tag`;
  const itemClass = `${prefix}--tag-set__item`;

  const tagClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--active`]: open,
  });

  /**
   * On click, get id of clicked item, and set that item in state to 'open', all others to 'closed'
   */
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveItems(
      getUpdatedItems({ id, itemStatuses: activeItems, allowMultipleActive })
    );
    if (onButtonClick) {
      onButtonClick(e, id);
    }
  };

  return (
    <li className={itemClass}>
      <button
        type="button"
        className={tagClasses}
        onClick={(e) => handleClick(e)}
        id={id}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};

export default Tag;
