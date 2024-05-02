/* eslint-disable jsx-a11y/anchor-has-content */
/* This is a good rule in general, but disabling here because the link has an aria-label */

import {
  FC,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { BreadcrumbProps, BreadcrumbItemProps } from "./Breadcrumb.props";
import { ContextMenu } from "../ContextMenu";

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  url,
  label,
  className,
  labelShown = true,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--breadcrumb--item`;
  const linkClass = `${prefix}--breadcrumb--link`;
  const labelClass = `${linkClass}--label`;

  const breadcrumbLinkClass = classnames(baseClass, className);

  return (
    <li className={breadcrumbLinkClass}>
      {labelShown ? (
        <a className={linkClass} href={url}>
          <span className={labelClass}>{label}</span>
        </a>
      ) : (
        <a aria-label={label} className={linkClass} href={url}></a>
      )}
    </li>
  );
};

const Breadcrumb: FC<BreadcrumbProps> = ({ className, links, buttonLabel }) => {
  const { prefix } = useGlobalSettings();

  // State
  const [isCtxMenuOpen, setIsCtxMenuOpen] = useState(false);
  const [ctxMenuPosition, setCtxMenuPosition] = useState({
    start: 0,
    top: 0,
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  // Refs
  const breadcrumbsRef = useRef<HTMLOListElement>(null);
  const breadcrumbsWidth = useRef<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ctxMenuRef = useRef<HTMLOListElement>(null);

  // Shortcuts to classnames
  const baseClass = `${prefix}--breadcrumb`;
  const innerClass = `${baseClass}--inner`;
  const itemsClass = `${baseClass}--items`;
  const itemClass = `${baseClass}--item`;
  const itemFirstClass = `${itemClass}__first`;
  const contextClass = `${baseClass}--context`;
  const contextCollapsedClass = `${contextClass}__collapse`;
  const contextId = `${baseClass}--menu`;
  const buttonClass = `${contextClass}--button`;

  // Dynamic classnames
  const breadcrumbClass = classnames(baseClass, className);
  const contextItemsClass = classnames(contextClass, {
    [contextCollapsedClass]: isMenuCollapsed,
  });
  const contextMenuClass = classnames(`${contextClass}--menu`, {
    [`${contextClass}--menu__visible`]: isCtxMenuOpen,
  });

  // Handlers
  function handleButtonClick() {
    setIsCtxMenuOpen(!isCtxMenuOpen);
  }

  const collapseMenu = useCallback(
    (collapse: boolean) => {
      if (collapse && !isMenuCollapsed) {
        setIsMenuCollapsed(true);
      }

      if (!collapse && isMenuCollapsed) {
        setIsMenuCollapsed(false);
      }
    },
    [isMenuCollapsed]
  );

  // Get the width of the breadcrumbs and store it in a ref
  useLayoutEffect(() => {
    const breadcrumbs = breadcrumbsRef?.current;
    if (!breadcrumbs || !window || !document) {
      return;
    }
    breadcrumbsWidth.current = breadcrumbs.offsetWidth;
  }, []);

  // Collapse or uncollapse the Context Menu depending on body width
  useLayoutEffect(() => {
    const breadcrumbs = breadcrumbsRef?.current;

    if (!breadcrumbs || !window || !document) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const bodyWidth = entries[0].contentRect.width;

      if (breadcrumbsWidth.current >= bodyWidth / 1.5) {
        collapseMenu(true);
      } else {
        collapseMenu(false);
      }
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [collapseMenu]);

  // Position the Context Menu right below the button
  useLayoutEffect(() => {
    if (!buttonRef.current || !ctxMenuRef.current) {
      return;
    }
    if (isMenuCollapsed && isCtxMenuOpen) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const contextMenuWidth = ctxMenuRef.current.offsetWidth;
      const navStart = buttonCenterX - contextMenuWidth / 2;
      const navTop = buttonRect.bottom + 16;
      setCtxMenuPosition({ start: navStart, top: navTop });
    }
  }, [isMenuCollapsed, isCtxMenuOpen]);

  // If the ContextMenu is open, close it if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isCtxMenuOpen &&
        ctxMenuRef.current &&
        !ctxMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCtxMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuCollapsed, isCtxMenuOpen]);

  // Close the context menu if the breadcrumbs should un-collapse
  useEffect(() => {
    if (isCtxMenuOpen && !isMenuCollapsed) {
      setIsCtxMenuOpen(false);
    }
  }, [isMenuCollapsed, isCtxMenuOpen]);

  // handle tab navigation when the context menu is open
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isCtxMenuOpen || !isMenuCollapsed) {
        return;
      }

      if (event.key === "Tab") {
        const links = ctxMenuRef.current?.querySelectorAll("a");
        const lastBreadCrumb =
          breadcrumbsRef.current?.lastElementChild?.querySelector("a");

        if (!links || !lastBreadCrumb) {
          return;
        }

        const firstLink = links[0];
        const lastLink = links[links.length - 1];

        // If the user is tabbing...
        if (!event.shiftKey) {
          // If the context button is focused then the next focusable item
          // should be the first item in the context menu
          if (document.activeElement === buttonRef.current) {
            event.preventDefault();
            firstLink.focus();
            return;
          }

          // If the last context item is focused then the focus should go to
          // the last breadcrumb item
          if (document.activeElement === lastLink) {
            event.preventDefault();
            lastBreadCrumb.focus();
          }
        }

        // If the user is shift-tabbing...
        if (event.shiftKey) {
          // If the first item is focused then the focus should go back to the context button
          if (event.shiftKey && document.activeElement === firstLink) {
            event.preventDefault();
            buttonRef?.current?.focus();
          }

          // If the focus is on the last breadcrumb item then the focus should go
          // to the last item in the context menu
          if (event.shiftKey && document.activeElement === lastBreadCrumb) {
            event.preventDefault();
            lastLink.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // Separate out the links into first, context and last
  const firstLink = links[0];
  const contextLinks = links.slice(1, links.length - 1);
  const lastLink = links[links.length - 1];

  return (
    <nav className={breadcrumbClass}>
      <div className={innerClass}>
        <ol className={itemsClass} ref={breadcrumbsRef}>
          <BreadcrumbItem
            url={firstLink.url}
            label={firstLink.label}
            labelShown={false}
            className={itemFirstClass}
          />
          {contextLinks && contextLinks.length > 0 ? (
            <li className={contextItemsClass}>
              <ol className={itemsClass}>
                {contextLinks.map((contextLink, i) => (
                  <BreadcrumbItem
                    url={contextLink.url}
                    label={contextLink.label}
                    key={i}
                  />
                ))}
              </ol>
              <button
                aria-label={buttonLabel}
                aria-expanded={isCtxMenuOpen}
                aria-controls={contextId}
                className={buttonClass}
                onClick={handleButtonClick}
                ref={buttonRef}
              ></button>
            </li>
          ) : null}
          {lastLink && (
            <BreadcrumbItem url={lastLink.url} label={lastLink.label} />
          )}
        </ol>
      </div>
      <div
        className={contextMenuClass}
        id={contextId}
        hidden={!isCtxMenuOpen}
        style={{ left: ctxMenuPosition.start, top: ctxMenuPosition.top }}
      >
        <ContextMenu links={contextLinks} ref={ctxMenuRef} />
      </div>
    </nav>
  );
};

export default Breadcrumb;
