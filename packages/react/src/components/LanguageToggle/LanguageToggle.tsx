import {
  forwardRef,
  HTMLAttributes,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { ThemeTypes } from "../../types";
import { ContextMenu, ContextMenuProps } from "../ContextMenu";

export type LanguageToggleProps = {
  /**
   * The language string to display
   */
  language: string;

  /**
   * Specify an optional className to be added to your LanguageToggle component.
   */
  theme?: ThemeTypes;

  /**
   * Hide the glob icon
   */
  hideIcon?: boolean;

  /**
   * Specify the languages to be displayed in the Context Menu
   */
  options?: ContextMenuProps["links"];

  className?: string;
};

const LanguageToggle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & LanguageToggleProps
>(
  (
    { className, language, theme = "light", hideIcon, options, ...rest },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const [isCtxMenuOpen, setIsCtxMenuOpen] = useState(false);

    const containerRef = useRef<HTMLButtonElement>(null);
    const contextMenuRef = useRef<HTMLOListElement>(null);

    const baseClass = `${prefix}--language-toggle`;

    useLayoutEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (!contextMenuRef.current || !containerRef.current) return;

        if (
          !contextMenuRef.current.contains(event.target as Node) &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsCtxMenuOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    useLayoutEffect(() => {
      if (!containerRef.current || !contextMenuRef.current) return;

      if (isCtxMenuOpen) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const contextMenuRect = contextMenuRef.current.getBoundingClientRect();

        contextMenuRef.current.style.left = `${containerRect.left + (containerRect.width - contextMenuRect.width) / 2}px`;
        contextMenuRef.current.style.top = `${containerRect.bottom}px`;
      }
    }, [isCtxMenuOpen]);

    return (
      <div
        ref={ref}
        className={classNames(
          baseClass,
          className,
          `${baseClass}__theme__${theme}`,
          {
            [`${baseClass}__open`]: isCtxMenuOpen,
          }
        )}
        {...rest}
      >
        <button
          className={`${baseClass}--container`}
          ref={containerRef}
          onClick={() => {
            setIsCtxMenuOpen(!isCtxMenuOpen);
          }}
          aria-controls={`${baseClass}--context-menu`}
          aria-expanded={isCtxMenuOpen}
        >
          {!hideIcon && <span className={`${baseClass}--icon`} />}
          <span className={`${baseClass}--action`}>{language}</span>
          <span className={`${baseClass}--arrow`} />
        </button>
        {options && (
          <ContextMenu
            withPortal={true}
            ref={contextMenuRef}
            links={options}
            className={classNames(`${baseClass}--context-menu`, {
              [`${baseClass}--context-menu__open`]: isCtxMenuOpen,
            })}
          />
        )}
      </div>
    );
  }
);

export { LanguageToggle };
