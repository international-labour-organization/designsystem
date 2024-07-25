/**
 * The Tooltip module which handles showing a bit of markup on mouseover
 *
 * @class Tooltip
 */

import { createPopper } from "@popperjs/core";

export default class Tooltip {
  /**
   * Tooltip constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  constructor(element) {
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */
    this.element = element;

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Read More state
     * @type {Object}
     */

    // enable defaults
    this.prefix = this.element.getAttribute("data-prefix");
    this.tooltip = this.element.querySelector(`.${this.prefix}--tooltip`);
    this.arrow = this.element.querySelector(`.${this.prefix}--tooltip--arrow`);
    this.alignment = this.arrow.getAttribute("data-alignment");
    this.placement = this.tooltip.getAttribute("data-placement");

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Tooltip A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onMouseOver = this.handleOnMouseOver.bind(this);
    this.onFocus = this.handleOnMouseOver.bind(this);
    this.onMouseOut = this.handleOnMouseOut.bind(this);
    this.onBlur = this.handleOnMouseOut.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.element.addEventListener("mouseover", this.onMouseOver);
    this.element.addEventListener("focus", this.onMouseOver);
    this.element.addEventListener("mouseout", this.onMouseOut);
    this.element.addEventListener("blur", this.onMouseOut);
    return this;
  }

  handleOnMouseOver(e) {
    const target = e.currentTarget;

    if (target != null) {
      const rect = target.getBoundingClientRect();
      this.tooltip.classList.add(`${this.prefix}--tooltip--visible`);
      this.tooltip.classList.add(`${this.prefix}--tooltip--fade`);
      this.postMouseOver(rect);
    }

    return this;
  }

  handleOnMouseOut() {
    setTimeout(() => {
      this.tooltip.classList.remove(`${this.prefix}--tooltip--fade`);
      this.tooltip.classList.remove(`${this.prefix}--tooltip--visible`);
    }, 200);

    return this;
  }

  postMouseOver() {
    const ttNode = this.tooltip;
    this.setMaxWidthAndClass(this.tooltip);
    if (ttNode != null) {
      // Create Popper instance if not already existing
      if (!this.popper) {
        this.popper = createPopper(this.element, this.tooltip, {
          // Set tooltip priority to be placed on top first
          placement: "top",
          modifiers: [
            "flip", // Changes the side of the tooltip if there isnt space
            "preventOverflow",
            {
              name: "offset",
              options: {
                offset: [0, 12], // Adjust offset as needed
              },
            },
          ],
        });
      }

      // Update Popper position
      this.popper.update();
    }

    return this;
  }

  /**
   * Set max width and add class based on content length
   *
   * @param {string} content - Tooltip content
   */
  setMaxWidthAndClass(tooltip) {
    const tooltipText = tooltip.textContent || tooltip.innerText;
    const textLength = tooltipText.trim().length;

    if (textLength > 50) {
      this.tooltip.classList.add(`${this.prefix}--tooltip--long`);
    }
  }
}
