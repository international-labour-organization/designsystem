/**
 * The Callout module which handles rendering field labels inline on a form.
 *
 * @class Callout
 */
export default class Callout {
  /**
   * Callout constructor which assigns the element passed into the constructor
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
    this.toggleLabel = "";

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();
    if (!this.toggleOpen && this.toggleCollapsible) {
      this.calcHeight();
    }

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The field that a user interacts with on a form
     * @type {Object}
     */
    this.toggle = this.element.querySelector(".ilo--callout--toggle");
    this.toggleOpen = this.element.classList.value.includes("callout--open");
    this.toggleCollapsible =
      this.element.classList.value.includes("callout--collapse");
    if (this.toggle) {
      this.toggleLabel = this.toggle.querySelector(
        ".ilo--callout--button-text"
      );
      this.toggleLabelOpen = this.toggle.getAttribute("data-open");
      this.toggleLabelClosed = this.toggle.getAttribute("data-closed");
    }
    this.button = this.element.querySelector(".ilo--button");

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Callout A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onToggle = this.handleToggle.bind(this);
    this.onClick = this.handleClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  enable() {
    if (this.toggle) {
      this.toggle.addEventListener("click", this.onToggle);
    }

    if (this.button) {
      this.button.addEventListener("click", this.onClick);
    }

    return this;
  }

  /**
   * calcHeight
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  calcHeight() {
    this.header = this.element.querySelector('[class*="--header"]');
    this.height = this.header.offsetHeight;
    this.element.style.maxHeight = `${this.height + 25}px`;

    return this;
  }

  /**
   * Onclick interaction
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  handleClick() {
    // callback of sorts
    return this;
  }

  /**
   * handleToggle
   *
   * toggle the collapse state of the callout
   *
   * @param {Object} e - Event
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  handleToggle(e) {
    e.preventDefault();
    this.toggleOpen = !this.toggleOpen;

    const label = this.toggleOpen
      ? this.toggleLabelOpen
      : this.toggleLabelClosed;

    this.element.classList.toggle("ilo--callout__open");
    this.toggleLabel.innerText = label;

    return this;
  }
}
