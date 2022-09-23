/**
 * The Tooltip module which handles showing a bit of markup on mouseover
 *
 * @class Tooltip
 */
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
    this.prefix = this.element.getAttribute('data-prefix');
    this.tooltip = this.element.querySelector(`.${this.prefix}--tooltip`);
    this.arrow = this.element.querySelector(`.${this.prefix}--tooltip--arrow`);
    this.alignment = this.arrow.getAttribute('data-alignment');
    this.placement = this.tooltip.getAttribute('data-placement');

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
    this.element.addEventListener('mouseover', this.onMouseOver);
    this.element.addEventListener('focus', this.onMouseOver);
    this.element.addEventListener('mouseout', this.onMouseOut);
    this.element.addEventListener('blur', this.onMouseOut);
    return this;
  }

  handleOnMouseOver(e) {
    const target = e.currentTarget;

    if (target != null) {
      const rect = target.getBoundingClientRect();
      this.tooltip.classList.add(`${this.prefix}--tooltip--visible`);
      this.postMouseOver(rect);
    }

    return this;
  }

  handleOnMouseOut(e) {
    this.tooltip.classList.remove(`${this.prefix}--tooltip--visible`);

    return this;
  }

  postMouseOver(hoverRect) {
    // position the tooltip after showing it
    let placement = 'center';
    let alignment = 'left';

    const ttNode = this.tooltip;
    if (ttNode != null) {
      let x = 0,
        y = 0;

      const docWidth = document.documentElement.clientWidth,
        docHeight = document.documentElement.clientHeight;

      const rx = hoverRect.x + hoverRect.width, // most right x
        lx = hoverRect.x, // most left x
        ty = hoverRect.y, // most top y
        by = hoverRect.y + hoverRect.height; // most bottom y

      // tooltip rectange
      const ttRect = ttNode.getBoundingClientRect();

      const bRight =
        rx + ttRect.width <= window.scrollX + docWidth &&
        ty + ttRect.height <= window.scrollY + docHeight;
      const bLeft = lx - ttRect.width >= 0 && ty + ttRect.height <= window.scrollY + docHeight;
      const bAbove = ty - ttRect.height >= 0;
      const bBellow = by + ttRect.height <= window.scrollY + docHeight;

      // the tooltip doesn't fit to the left
      if (bRight) {
        x = hoverRect.width + 32;
        y = 0;
        placement = 'negative';
        alignment = 'right';
      } else if (bBellow) {
        x = 0;
        y = hoverRect.height + 32;

        placement = 'center';
        alignment = 'bottom';
      } else if (bLeft) {
        x = -ttRect.width - 32;
        y = 0;

        placement = 'negative';
        alignment = 'left';
      } else if (bAbove) {
        x = 0;
        y = -ttRect.height - 32;

        placement = 'center';
        alignment = 'top';
      }

      // set style top and left on tooltip
      // setPosition({ x: x, y: y });
      this.tooltip.style.top = y;
      this.tooltip.style.left = x;

      // set class for placement on arrow
      // setArrowPlacement(placement);
      this.arrow.classList.remove(`${this.prefix}--tooltip--arrow--placement-${this.placement}`);
      this.arrow.classList.add(`${this.prefix}--tooltip--arrow--placement-${this.placement}`);
      this.placement = placement;
      this.arrow.setAttribute('data-placement', placement);

      // set class for alignment on tooltip
      // setArrowAlignment(alignment);
      this.tooltip.classList.remove(`${this.prefix}--tooltip--alignment-${this.alignment}`);
      this.tooltip.classList.add(`${this.prefix}--tooltip--alignment-${this.alignment}`);
      this.alignment = alignment;

      this.tooltip.setAttribute('data-alignment', alignment);
    }

    return this;
  }
}
