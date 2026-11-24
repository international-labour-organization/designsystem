import { forwardRef, useId, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { ContextMenu } from "../ContextMenu";
import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem";
import { ThemeTypes } from "../../types";

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

  /**
   * Specify the theme of the Breadcrumb
   */
  theme?: ThemeTypes;
};

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, links, buttonLabel, theme = "light" }, ref) => {
    const id = useId();

    const [isCtxMenuOpen, setIsCtxMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const fullBreadcrumbWidth = useRef<number>(0);
    const ctxButtonRef = useRef<HTMLButtonElement>(null);
    const ctxContainerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLOListElement>(null);

    const breadcrumbClassNames = classNames("ilo--breadcrumb", className, {
      [`ilo--breadcrumb__theme__${theme}`]: theme,
    });

    useEffect(() => {
      fullBreadcrumbWidth.current = listRef.current!.offsetWidth;
    }, []);

    useEffect(() => {
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
    }, [id]);

    useEffect(() => {
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
      <nav className={breadcrumbClassNames} ref={ref}>
        <div className={"ilo--breadcrumb--inner"}>
          <ol
            className={"ilo--breadcrumb--items"}
            id={`ilo--breadcrumb--items-${id}`}
            ref={listRef}
          >
            <BreadcrumbItem
              first
              url={firstLink!.url}
              label={firstLink!.label}
            />
            {contextLinks.length > 0 && (
              <li
                className={classNames("ilo--breadcrumb--context", {
                  "ilo--breadcrumb--context__collapse": isCollapsed,
                })}
              >
                <ol className={"ilo--breadcrumb--items"}>
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
                  aria-controls={`ilo--breadcrumb--menu-${id}`}
                  className={"ilo--breadcrumb--context--button"}
                  ref={ctxButtonRef}
                ></button>
              </li>
            )}
            <BreadcrumbItem url={lastLink!.url} label={lastLink!.label} />
          </ol>
        </div>
        <div
          className={classNames("ilo--breadcrumb--context--menu", {
            "ilo--breadcrumb--context--menu__visible": isCtxMenuOpen,
          })}
          id={`ilo--breadcrumb--menu-${id}`}
          ref={ctxContainerRef}
        >
          <ContextMenu links={contextLinks} isOpen={isCtxMenuOpen} />
        </div>
      </nav>
    );
  }
);

export { Breadcrumb };
