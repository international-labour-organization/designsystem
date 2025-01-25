import { forwardRef, useId, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ContextMenu } from "../ContextMenu";
import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem";

export type BreadcrumbProps = {
  /**
   * An additional classname to add to the outer most element of the component
   */
  className?: string;

  /**
   * The accessible label to apply to the ellipsis button that appears when the Breadcrumb is collapsed
   */
  buttonLabel: string;

  /**
   * Specify the links to be displayed in the Breadcrumb
   */
  links: BreadcrumbItemProps[];
};

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, links, buttonLabel }, ref) => {
    const { prefix } = useGlobalSettings();
    const id = useId();

    const [isCtxMenuOpen, setIsCtxMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const fullBreadcrumbWidth = useRef<number>(0);
    const ctxButtonRef = useRef<HTMLButtonElement>(null);
    const ctxContainerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLOListElement>(null);

    useLayoutEffect(() => {
      fullBreadcrumbWidth.current = listRef.current!.offsetWidth;
    }, []);

    useLayoutEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          ctxButtonRef.current &&
          ctxContainerRef.current &&
          !ctxButtonRef.current.contains(event.target as Node) &&
          !ctxContainerRef.current.contains(event.target as Node)
        ) {
          setIsCtxMenuOpen(false);
        }
      }

      const observer = new ResizeObserver((entries) => {
        const entry = entries.at(0)!;
        const shouldCollapse =
          fullBreadcrumbWidth.current >= entry.contentRect.width / 1.5;

        setIsCollapsed((prev) => {
          if (prev !== shouldCollapse) {
            return shouldCollapse;
          }
          return prev;
        });
      });

      document.addEventListener("mousedown", handleClickOutside);
      observer.observe(document.body);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        observer.disconnect();
      };
    }, [id, prefix]);

    useLayoutEffect(() => {
      if (!ctxButtonRef.current || !ctxContainerRef.current) {
        return;
      }

      if (isCtxMenuOpen) {
        const buttonRect = ctxButtonRef.current.getBoundingClientRect();
        const ctxMenuFirstChild = ctxContainerRef.current
          .firstChild as HTMLOListElement;

        const ctxMenuRect = ctxMenuFirstChild.getBoundingClientRect();
        const left =
          buttonRect.left + buttonRect.width / 2 - ctxMenuRect.width / 2 - 5;
        const top = buttonRect.bottom + 16;

        ctxContainerRef.current.style.left = `${left}px`;
        ctxContainerRef.current.style.top = `${top}px`;
      }
    }, [isCtxMenuOpen]);

    if (links.length < 2) {
      throw new Error(
        `Breadcrumb component requires at least two links, but received ${links.length}`
      );
    }

    const firstLink = links.at(0);
    const contextLinks = links.slice(1, -1);
    const lastLink = links.at(-1);

    return (
      <nav className={classNames(`${prefix}--breadcrumb`, className)} ref={ref}>
        <div className={`${prefix}--breadcrumb--inner`}>
          <ol
            className={`${prefix}--breadcrumb--items`}
            id={`${prefix}--breadcrumb--items-${id}`}
            ref={listRef}
          >
            <BreadcrumbItem
              first
              url={firstLink!.url}
              label={firstLink!.label}
            />
            {contextLinks.length > 0 && (
              <li
                className={classNames(`${prefix}--breadcrumb--context`, {
                  [`${prefix}--breadcrumb--context__collapse`]: isCollapsed,
                })}
              >
                <ol className={`${prefix}--breadcrumb--items`}>
                  {contextLinks.map((contextLink) => (
                    <BreadcrumbItem
                      url={contextLink.url}
                      label={contextLink.label}
                      key={`${contextLink.label}-${contextLink.url}`}
                    />
                  ))}
                </ol>
                <button
                  onClick={() => setIsCtxMenuOpen(!isCtxMenuOpen)}
                  aria-label={buttonLabel}
                  aria-expanded={isCtxMenuOpen}
                  aria-controls={`${prefix}--breadcrumb--menu-${id}`}
                  className={`${prefix}--breadcrumb--context--button`}
                  ref={ctxButtonRef}
                ></button>
              </li>
            )}
            <BreadcrumbItem url={lastLink!.url} label={lastLink!.label} />
          </ol>
        </div>
        <div
          className={classNames(`${prefix}--breadcrumb--context--menu`, {
            [`${prefix}--breadcrumb--context--menu__visible`]: isCtxMenuOpen,
          })}
          id={`${prefix}--breadcrumb--menu-${id}`}
          ref={ctxContainerRef}
        >
          <ContextMenu links={contextLinks} />
        </div>
      </nav>
    );
  }
);

export { Breadcrumb };
