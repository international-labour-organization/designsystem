import { useContext, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TagProps } from "./Tag.props";
import { TagSetContext } from "./TagSet";
import { Icon } from "../Icon";

const Tag: FC<TagProps> = ({
  className,
  children,
  id,
  url,
  type,
  callback,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const { activeItems, setActiveItems, getUpdatedItems, allowMultipleActive } =
    useContext(TagSetContext);
  const active = activeItems.indexOf(id) > -1;

  const baseClass = `${prefix}--tag`;
  const itemClass = `${prefix}--tag-set__item`;
  const stringType = type as string;
  const tagClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--active`]: active,
    [`${baseClass}--${type}`]: type,
    [`icon icon__position--right`]: true,
  });

  let visible = active;

  /**
   * On click, get id of clicked item, and set that item in state to 'active', all others to 'closed'
   */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveItems(
      getUpdatedItems({ id, itemStatuses: activeItems, allowMultipleActive })
    );
    visible = false;
    if (callback) {
      callback(e);
    }
  };

  // @ts-ignore
  const renderButton = () => {
    let button;

    if (visible) {
      button = (
        <li className={itemClass}>
          <button
            type="button"
            className={tagClasses}
            onClick={(e) => handleClick(e)}
            id={id}
            {...rest}
          >
            {children}
            <Icon name="close" hidden={true} />
          </button>
        </li>
      );
    }

    return button;
  };

  return (
    <>
      {stringType === "button" ? (
        <>{renderButton()}</>
      ) : (
        <li className={itemClass}>
          {type === "anchor" && (
            <a
              className={tagClasses}
              href={active ? url : ""}
              id={id}
              {...rest}
            >
              {children}
            </a>
          )}

          {type === "display" && (
            <span className={tagClasses} id={id} {...rest}>
              {children}
            </span>
          )}
        </li>
      )}
    </>
  );
};

export default Tag;
