import { EVENTS } from '@ilo-org/utils';

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
    this.toggleLabel = '';

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
    this.toggle = this.element.querySelector('.ilo--callout--toggle');
    console.log('Toggle', this.toggle);
    this.toggleOpen = this.element.classList.value.includes('ilo--callout--open');
    this.toggleLabel = this.toggle.querySelector('.ilo--callout--button-text');
    this.toggleLabelOpen = this.toggle.getAttribute('data-open');
    this.toggleLabelClosed = this.toggle.getAttribute('data-closed');
    this.button = this.element.querySelectorAll('.ilo--button');

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
    this.toggle.addEventListener(EVENTS.CLICK, this.onToggle);
    this.button.addEventListener(EVENTS.CLICK, this.onClick);

    return this;
  }

  /**
   * Onclick interaction
   *
   * @return {Object} Callout A reference to the instance of the class
   * @chainable
   */
  handleClick(e) {
    // callback of sorts
    console.log('button clicked');

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
    console.log('toggle clicked');

    const label = this.toggleOpen ? this.toggleLabelOpen : this.toggleLabelClosed;

    this.element.classList.toggle('ilo--callout--open');
    this.toggleLabel.innerText = label;

    return this;
  }
}
