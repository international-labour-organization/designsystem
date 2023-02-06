import { EVENTS } from "@ilo-org/utils";

/**
 * The Modal module which handles control and display of a modal dialog
 *
 *
 * @class Modal
 */
export default class Modal {
  /**
   * Modal constructor which assigns the element passed into the constructor
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
   * @return {Object} Modal A reference to the instance of the class
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
    this.OpenButton = this.element.querySelector(`.modal--open`);
    this.CloseButton = this.element.querySelector(`.modal--close`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Modal A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.OpenButtonHandler = this.openButtonClick.bind(this);
    this.CloseHandler = this.closeButtonClick.bind(this);
    this.KeyPressHandler = this.keyPress.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.OpenButton.addEventListener(EVENTS.CLICK, () =>
      this.OpenButtonHandler()
    );
    this.CloseButton.addEventListener(EVENTS.CLICK, () => this.CloseHandler());

    return this;
  }

  /**
   * Actions performed on click of the open button
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  openButtonClick() {
    this.element.classList.add("show");
    setTimeout(() => {
      this.element.classList.add("fadein");
    }, 125);
    window.addEventListener(EVENTS.KEY_DOWN, (e) => this.KeyPressHandler(e));

    return this;
  }

  /**
   * Actions performed on click of the close button
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  closeButtonClick() {
    this.element.classList.remove("fadein");
    setTimeout(() => {
      this.element.classList.remove("show");
    }, 125);
    window.removeEventListener(EVENTS.KEY_DOWN, (e) => this.KeyPressHandler(e));

    return this;
  }

  /**
   * Actions performed on key press
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  keyPress(e) {
    if (e.key === "Escape") {
      this.closeButtonClick();
    }

    return this;
  }
}
