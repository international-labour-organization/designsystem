/**
 * The Notification module which handles rendering field labels inline on a form.
 *
 * @class Notification
 */
export default class Notification {
  /**
   * Notification constructor which assigns the element passed into the constructor
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
    this.parent = this.element.parentElement;

    // get the theme prefix
    this.prefix = this.element.dataset.prefix;

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Notification A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Notification A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Read More state
     * @type {Object}
     */
    this.CloseButton = this.element.querySelector(
      `.${this.prefix}--notification--close`
    );

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Notification A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onClick = this.onClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Notification A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.CloseButton.addEventListener("click", () => this.onClick());

    return this;
  }

  /**
   * Onclick interaction with the Notification button
   *
   * @return {Object} Notification A reference to the instance of the class
   * @chainable
   */
  onClick() {
    this.parent.removeChild(this.element);

    return this;
  }
}
