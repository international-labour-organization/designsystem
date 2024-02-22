import * as Icons from "@ilo-org/icons";

const SIZING = [16, 20, 24, 32];
const DEFAULT_SIZE = 24;
const SVG_NS = "http://www.w3.org/2000/svg";
const PATH_NS = "http://www.w3.org/2000/path";

/**
 * The Icon module which handles rendering icons
 *
 * @class Icon
 */
export default class Icon {
  /**
   * Icon constructor which assigns the element passed into the constructor
   *
   * @param {SVGElement} element - REQUIRED - the module's container
   */
  constructor(element) {
    /**
     * Reference to the DOM element that is the root of the component
     * @property {SVGElement}
     */
    this.element = element;

    /** Initialize the icon logic*/
    this.init();
  }

  /**
   * Initializes the icon logic
   */
  init() {
    const isValid = this.validate();
    if (!isValid) {
      return;
    }

    const svg = this.build();

    this.prepare(svg);
    this.element.outerHTML = svg.outerHTML;

    return this;
  }

  /**
   * Validate icon prop
   *
   * @returns {boolean}
   */
  validate() {
    let { name, size } = this.element.dataset;
    if (!SIZING.includes(+size)) {
      console.warn(
        `Icon size ${size} is not supported. Defaulting to ${DEFAULT_SIZE}px`
      );
      size = DEFAULT_SIZE;
    }

    const reference = Icons[`${name}${size}`];
    if (!reference) {
      console.warn(`Icon "${name}" not found`);
      return false;
    }

    return true;
  }

  /**
   * Build a new SVG element
   *
   * @returns {SVGElement}
   */
  build() {
    const { name, size, color } = this.element.dataset;
    const config = Icons[`${name}${size}`];
    const element = document.createElementNS(SVG_NS, "svg");

    for (const [key, value] of Object.entries(config.attrs)) {
      element.setAttribute(key, value);
    }

    if (color) {
      element.setAttribute("fill", color);
    }

    for (const item of config.content) {
      const child = document.createElementNS(PATH_NS, item.elem);
      for (let [key, value] of Object.entries(item.attrs)) {
        if (key === "fill" && color) {
          value = color;
        }
        child.setAttribute(key, value);
      }
      element.appendChild(child);
    }

    return element;
  }

  /**
   * Attach final attributes
   *
   * @param {SVGElement} icon - REQUIRED - the svg icon instance
   */
  prepare(icon) {
    icon.setAttribute("class", this.element.getAttribute("class"));
    icon.setAttribute("data-js-processed", true);
  }
}
