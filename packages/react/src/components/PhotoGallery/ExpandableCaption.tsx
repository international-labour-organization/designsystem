import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { useGlobalSettings } from "../../hooks";
import { Icon } from "../Icon";

interface ExpandableCaptionProps {
  caption: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export function ExpandableCaption({
  caption,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  className,
}: ExpandableCaptionProps) {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--photo-gallery-expandable-caption`;

  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const [isExpandable, setIsExpandable] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  useEffect(() => {
    if (!textRef.current) return;

    if (textRef.current.scrollWidth > textRef.current.clientWidth) {
      setIsExpandable(true);
    }

    return () => {
      setIsExpandable(false);
      setUncontrolledIsOpen(false);
      onToggle?.(false);
    };
  }, [caption, textRef.current]);

  const handleToggle = () => {
    if (!isExpandable) return;
    const newValue = !isOpen;

    if (!isControlled) {
      setUncontrolledIsOpen(newValue);
    }

    onToggle?.(newValue);
  };

  return (
    <div
      className={classNames(baseClass, className, {
        [`${baseClass}--expanded`]: isOpen,
      })}
    >
      <div className={`${baseClass}__preview`}>
        <p className={`${baseClass}__text`} ref={textRef}>
          {caption}
        </p>
        {isExpandable && (
          <button
            className={`${baseClass}__toggle`}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse caption" : "Expand caption"}
            type="button"
            onClick={handleToggle}
          >
            <Icon name={isOpen ? "ChevronDown" : "ChevronUp"} />
          </button>
        )}
      </div>
    </div>
  );
}
