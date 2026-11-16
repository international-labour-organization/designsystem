import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

import { flattenChildren } from "../../../../utils";

import { MegaNavMainProps } from "../../MegaNav.props";
import { isPart } from "./parts";

export interface ParsedLink {
  href: string;
  label: ReactNode;
  target?: string;
}

export interface ParsedItem {
  id: string;
  label: string;
  href: string;
  panel: ReactElement[];
  main?: ReactElement;

  /**
   * The MegaNav.Links groups written directly in Main, for the mobile drawer
   */
  links: ParsedLink[][];
}

const warned = new Set<string>();

function warn(message: string) {
  if (
    warned.has(message) ||
    (typeof process !== "undefined" && process.env.NODE_ENV === "production")
  ) {
    return;
  }

  warned.add(message);
  console.warn(`[MegaNav] ${message}`);
}

function toId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseLinks(main?: ReactElement<MegaNavMainProps>) {
  const links: ParsedLink[][] = [];
  if (!main) return links;

  for (const group of flattenChildren(main.props.children)) {
    if (!isPart(group, "links")) continue;

    const groupLinks: ParsedLink[] = [];

    for (const link of flattenChildren(group.props.children)) {
      if (!isPart(link, "link")) continue;

      const { href, children, target } = link.props;
      groupLinks.push({ href, label: children, target });
    }

    if (groupLinks.length) links.push(groupLinks);
  }

  return links;
}

function parseItems(children: ReactNode): ParsedItem[] {
  const items: ParsedItem[] = [];
  const ids = new Set<string>();

  for (const child of flattenChildren(children)) {
    if (!isPart(child, "item")) {
      warn("Only MegaNav.Item is supported as a direct child of MegaNav.");
      continue;
    }

    const { id, label, href, children: itemChildren } = child.props;
    const panel: ReactElement[] = [];
    let main: ReactElement<MegaNavMainProps> | undefined;
    let columns = 0;

    for (const part of flattenChildren(itemChildren)) {
      if (!isValidElement(part)) continue;

      if (isPart(part, "main")) {
        if (main) {
          warn(`"${label}": only one MegaNav.Main is supported.`);
          continue;
        }
        main = part;
        panel.push(cloneElement(part, { key: "main" }));
      } else if (isPart(part, "column")) {
        if (columns === 2) {
          warn(`"${label}": at most two MegaNav.Column are supported.`);
          continue;
        }
        panel.push(cloneElement(part, { key: `column-${columns}` }));
        columns++;
      } else {
        warn(
          `"${label}": only MegaNav.Main and MegaNav.Column are supported inside MegaNav.Item.`
        );
      }
    }

    const baseId = id ?? (toId(label) || "item");
    let uniqueId = baseId;
    for (let n = 2; ids.has(uniqueId); n++) uniqueId = `${baseId}-${n}`;

    if (uniqueId !== baseId) {
      warn(`"${label}": the id "${baseId}" is already used.`);
    }

    ids.add(uniqueId);

    const links = parseLinks(main);

    items.push({
      id: uniqueId,
      label,
      href,
      panel,
      main,
      links,
    });
  }

  return items;
}

export { parseItems };
