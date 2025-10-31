import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useFocusTrap, useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { Icon } from "../Icon";

interface LightBoxProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function LightBox({ isOpen, onClose, children }: LightBoxProps) {
  const { prefix } = useGlobalSettings();
  const focusTrapRef = useFocusTrap<HTMLDivElement>({
    isActive: isOpen,
    onEscape: () => {
      onClose();
    },
    restoreFocus: true,
  });
  const baseClass = `${prefix}--lightbox`;

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const lightboxContent = (
    <div
      className={classNames(baseClass, {
        [`${baseClass}--open`]: isOpen,
      })}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      ref={focusTrapRef}
    >
      <div className={`${baseClass}__backdrop`} />
      <div className={`${baseClass}__container`}>
        <button
          className={`${baseClass}__close`}
          onClick={onClose}
          aria-label="Close lightbox"
          type="button"
          tabIndex={isOpen ? 0 : -1}
        >
          <Icon name="close" size={32} />
        </button>
        <div className={`${baseClass}__content`}>{children}</div>
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
}

export { LightBox };
