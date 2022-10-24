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
    this.subnavButton = this.element.querySelector(`.${this.prefix}--nav--trigger`);
    this.menuCloseSet = this.element.querySelectorAll(`.${this.prefix}--header--menu--close`);
    this.subnavBack = this.element.querySelector(`.${this.prefix}--mobile--subnav--back`);
    this.menuOpen = this.element.querySelector(`.${this.prefix}--header--menu`);
    this.searchButton = this.element.querySelector(`.${this.prefix}--search--button`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Navigation A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.subnavOpenClick = this.handleSubnavClickOpen.bind(this);
    this.subnavBackClick = this.handleSubnavBackClick.bind(this);
    this.menuCloseClick = this.handleMenuCloseClick.bind(this);
    this.menuOpenClick = this.handleMenuOpenClick.bind(this);
    this.searchButtonClick = this.handleSearchButtonClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  enable() {
    // subnavButton
    if (this.subnavButton) {
      this.subnavButton.addEventListener(EVENTS.CLICK, () => this.subnavOpenClick());
      this.subnavButton.addEventListener(EVENTS.TOUCH_START, () => this.subnavOpenClick());
    }
    // subnavBack
    if (this.subnavBack) {
      this.subnavBack.addEventListener(EVENTS.CLICK, () => this.subnavBackClick());
      this.subnavBack.addEventListener(EVENTS.TOUCH_START, () => this.subnavBackClick());
    }
    // searchButton
    if (this.searchButton) {
      this.searchButton.addEventListener(EVENTS.CLICK, () => this.searchButtonClick());
      this.searchButton.addEventListener(EVENTS.TOUCH_START, () => this.searchButtonClick());
    }
    // menuCloseSet
    if (this.menuCloseSet.length > 0) {
      this.menuCloseSet.forEach((closeButton, i) => {
        closeButton.addEventListener(EVENTS.CLICK, () => this.menuCloseClick(i));
        closeButton.addEventListener(EVENTS.TOUCH_START, () => this.menuCloseClick(i));
      });
    }

    // menuOpen
    this.menuOpen.addEventListener(EVENTS.CLICK, () => this.menuOpenClick());
    this.menuOpen.addEventListener(EVENTS.TOUCH_START, () => this.menuOpenClick());

    return this;
  }

  /**
   * Onclick interaction with the search button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSearchButtonClick() {
    this.element.classList.toggle(`${this.prefix}--search--open`);
    this.element.classList.remove(`${this.prefix}--subnav--open`);

    return this;
  }

  /**
   * Onclick interaction with the menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleMenuOpenClick() {
    this.element.classList.add(`${this.prefix}--mobile--open`);

    return this;
  }

  /**
   * Onclick interaction with the Subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavClickOpen() {
    this.element.classList.toggle(`${this.prefix}--subnav--open`);
    this.element.classList.remove(`${this.prefix}--search--open`);

    return this;
  }

  /**
   * Onclick interaction with the Subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavBackClick() {
    this.element.classList.remove(`${this.prefix}--subnav--open`);

    return this;
  }

  /**
   * Onclick interaction with the menu close button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleMenuCloseClick() {
    this.element.classList.remove(`${this.prefix}--mobile--open`);
    this.element.classList.remove(`${this.prefix}--subnav--open`);

    return this;
  }
}
