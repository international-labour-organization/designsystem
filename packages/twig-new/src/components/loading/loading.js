import { EVENTS } from "@ilo-org/utils";

/**
 * The Loading module which handles rendering field labels inline on a form.
 *
 * To use this, you'll need to have the Javascript that's making the API call send custom events equal to
 * the constants EVENTS.ITEMSLOADED and EVENTS.ITEMSLOADING to the document. Send EVENTS.ITEMSLOADING when the  * API call is made, and EVENTS.ITEMSLOADED when the data has successfully loaded.
 *
 * @class Loading
 */
export default class Loading {
  /**
   * Loading constructor which assigns the element passed into the constructor
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

    // get the theme prefix
    this.prefix = `${this.element.dataset.prefix}--loading`;

    // set some values
    this.status = "idle";

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Loading A reference to the instance of the class
   * @chainable
   */
  init() {
    this.setupHandlers().enable();

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Loading A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.LoadingHandler = this.loading.bind(this);
    this.LoadedHandler = this.loaded.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Loading A reference to the instance of the class
   * @chainable
   */
  enable() {
    document.addEventListener(EVENTS.ITEMSLOADING, () => this.LoadingHandler);
    document.addEventListener(EVENTS.ITEMSLOADED, () => this.LoadedHandler);

    return this;
  }

  /**
   * Items are loading
   *
   * @return {Object} Loading A reference to the instance of the class
   * @chainable
   */
  loading() {
    this.element.classList.remove(`${this.prefix}--idle`);
    this.element.classList.add(`${this.prefix}--loading`);

    return this;
  }

  /**
   * What happens when the items have loaded
   *
   * @return {Object} Loading A reference to the instance of the class
   * @chainable
   */
  loaded() {
    this.element.classList.remove(`${this.prefix}--loading`);
    this.element.classList.add(`${this.prefix}--loaded`);
    this.element.querySelector(`.${this.prefix}--copy`).innerHTML =
      this.element.dataset.loadedmessage;

    return this;
  }
}
