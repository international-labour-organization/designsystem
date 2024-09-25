import css from "dom-helpers/css";

type Dimension = "height" | "width";

const MARGINS: { [d in Dimension]: string[] } = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"],
};

export default function getDefaultDimensionValue(
  dimension: Dimension,
  elem: HTMLElement
): number {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(
    1
  )}` as keyof HTMLElement;
  const value = elem[offset];
  const margins = MARGINS[dimension];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    value +
    // @ts-ignore
    parseInt(css(elem, margins[0]), 10) +
    // @ts-ignore
    parseInt(css(elem, margins[1]), 10)
  );
}
