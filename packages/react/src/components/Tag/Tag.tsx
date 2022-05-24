import { useContext, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TagProps } from "./Tag.props";
import { TagSetContext } from "./TagSet";

const Tag: FC<TagProps> = ({ className, children, id, url, ...rest }) => {
  const { prefix } = useGlobalSettings();
  const { activeItems } = useContext(TagSetContext);
  const open = activeItems.indexOf(id) > -1;

  const baseClass = `${prefix}--tag`;
  const itemClass = `${prefix}--tag-set__item`;

  const tagClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--active`]: open,
    [`${baseClass}--anchor`]: url,
  });

  /**
   * On click, get id of clicked item, and set that item in state to 'open', all others to 'closed'
   */
  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   setActiveItems(
  //     getUpdatedItems({ id, itemStatuses: activeItems, allowMultipleActive })
  //   );
  //   if (onButtonClick) {
  //     onButtonClick(e, id);
  //   }
  // };

  return (
    <li className={itemClass}>
      {url && (
        <a className={tagClasses} href={url} id={id} {...rest}>
          {children}
        </a>
      )}

      {!url && (
        <span className={tagClasses} id={id} {...rest}>
          {children}
        </span>
      )}
    </li>
  );
};

export default Tag;
