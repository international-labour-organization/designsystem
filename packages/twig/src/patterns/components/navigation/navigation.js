import { EVENTS } from '@ilo-org/utils';

/**
 * The Navigation module which handles rendering field labels inline on a form.
 *
 * @class Navigation
 */
export default class Navigation {
  /**
   * Navigation constructor which assigns the element passed into the constructor
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
    this.prefix = this.element.dataset.prefix;

    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Subnav state
     * @type {Object}
     */
    this.SubnavButton = this.element.querySelector(`.${this.prefix}--nav--trigger`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Navigation A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.subnavClick = this.handleSubnavClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.SubnavButton.addEventListener(EVENTS.CLICK, () => this.subnavClick());

    return this;
  }

  /**
   * Onclick interaction with the Subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavClick() {
    this.element.classList.toggle(`${this.prefix}--subnav--open`);

    return this;
  }
}
