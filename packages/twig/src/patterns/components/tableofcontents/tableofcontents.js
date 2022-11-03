import { EVENTS } from '@ilo-org/utils';

/**
 * The TableOfContents module which handles control and display of a TableOfContents dialog
 *
 *
 * @class TableOfContents
 */
export default class TableOfContents {
  /**
   * TableOfContents constructor which assigns the element passed into the constructor
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

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} TableOfContents A reference to the instance of the class
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
    this.OpenButton = this.element.querySelector(`.toc--modal--open`);
    this.CloseButton = this.element.querySelector(`.toc--modal--close`);
    this.trigger = this.element.querySelector(`.${this.prefix}--table-of-contents--trigger`);
    this.modalUx = this.element.querySelector(`.${this.prefix}--table-of-contents--modal`);
    this.toc = this.element.querySelector(`.${this.prefix}--table-of-contents`);

    console.log(this.modalUx);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} TableOfContents A reference to the current instance of the class
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
   * @return {Object} TableOfContents A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.OpenButton.addEventListener(EVENTS.CLICK, () => this.OpenButtonHandler());
    this.CloseButton.addEventListener(EVENTS.CLICK, () => this.CloseHandler());

    return this;
  }

  /**
   * Actions performed on click of the open button
   *
   * @return {Object} TableOfContents A reference to the instance of the class
   * @chainable
   */
  openButtonClick() {
    this.trigger.classList.add('hide');
    this.element.classList.add('show');
    this.modalUx.classList.add('show');
    this.toc.classList.add('show');
    setTimeout(() => {
      this.modalUx.classList.add('fadein');
      this.toc.classList.add('fadein');
    }, 125);
    window.addEventListener(EVENTS.KEY_DOWN, (e) => this.KeyPressHandler(e));

    return this;
  }

  /**
   * Actions performed on click of the close button
   *
   * @return {Object} TableOfContents A reference to the instance of the class
   * @chainable
   */
  closeButtonClick() {
    this.modalUx.classList.remove('fadein');
    this.toc.classList.remove('fadein');
    setTimeout(() => {
      this.modalUx.classList.remove('show');
      this.toc.classList.remove('show');
      this.element.classList.remove('show');
      this.trigger.classList.remove('hide');
    }, 125);
    window.removeEventListener(EVENTS.KEY_DOWN, (e) => this.KeyPressHandler(e));

    return this;
  }

  /**
   * Actions performed on key press
   *
   * @return {Object} TableOfContents A reference to the instance of the class
   * @chainable
   */
  keyPress(e) {
    if (e.key === 'Escape') {
      this.closeButtonClick();
    }

    return this;
  }
}
