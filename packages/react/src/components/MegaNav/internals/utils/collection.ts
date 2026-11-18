import { useCallback, useMemo, useState } from "react";

export interface MegaNavCollectedLink {
  href: string;
  label: string;
  target?: string;
}

export interface MegaNavCollectedGroup {
  title?: string;
  links: MegaNavCollectedLink[];
}

export interface MegaNavCollectedItem {
  /**
   * The item's id prop, or one derived from its label. Pass it to toggle()
   */
  id: string;
  label: string;
  href: string;

  /**
   * Every MegaNav.Links inside the item, in page order
   */
  groups: MegaNavCollectedGroup[];
}

export interface MegaNavRegisteredLink extends MegaNavCollectedLink {
  group: string;
  title?: string;
}

interface Entry<T> {
  key: string;
  value: T;
  node: Element | null;
}

type Register<T> = (key: string, value: T, node: Element | null) => () => void;

function byPagePosition<T>(a: Entry<T>, b: Entry<T>) {
  if (!a.node || !b.node || a.node === b.node) return 0;

  return a.node.compareDocumentPosition(b.node) &
    Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;
}

function useRegistry<T extends object>() {
  const [entries, setEntries] = useState<Map<string, Entry<T>>>(
    () => new Map()
  );

  const register = useCallback<Register<T>>((key, value, node) => {
    // Called from layout effects, which only re-run when the value changes
    setEntries((previous) => new Map(previous).set(key, { key, value, node }));

    return () =>
      setEntries((previous) => {
        if (!previous.has(key)) return previous;
        const next = new Map(previous);
        next.delete(key);
        return next;
      });
  }, []);

  const list = useMemo(
    () => Array.from(entries.values()).sort(byPagePosition),
    [entries]
  );

  return [list, register] as const;
}

const notLetterOrDigit = new RegExp("[^\\p{L}\\p{N}]+", "gu");
const reservedIds = ["more", "search"];

/**
 * Readable id from a label, in any script. Empty when nothing usable is left
 */
function toId(label: string) {
  const id = label
    .toLowerCase()
    .replace(notLetterOrDigit, "-")
    .replace(/^-|-$/g, "");

  return reservedIds.includes(id) ? "" : id;
}

const isDev = process.env.NODE_ENV !== "production";

const warned = new Set<string>();

function warn(message: string) {
  if (!isDev || warned.has(message)) return;

  warned.add(message);
  console.warn(`[MegaNav] ${message}`);
}

export type { Entry, Register };
export { isDev, reservedIds, toId, useRegistry, warn };
