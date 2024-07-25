import { EVENTS } from "@ilo-org/utils";

/**
 * The Search module which handles the clear button.
 *
 * @class Search
 */
export default class Search {
  /**
   * Search constructor which assigns the element passed into the constructor
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
    this.multipleExpanded = false;

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Search A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Search A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The field that a user interacts with on a form
     * @type {Object}
     */
    this.searchButton = this.element.querySelector(
      ".ilo--searchfield--clear-button"
    );
    this.searchInputField = this.element.querySelector(".ilo--input");
    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Search A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onClick = this.onClick.bind(this);
    this.KeyPressHandler = this.onKeyPress.bind(this);
    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Search A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.searchButton.addEventListener(EVENTS.CLICK, this.onClick.bind(this));
    this.searchInputField.addEventListener(
      "keyup",
      this.onKeyPress.bind(this, this.searchButton)
    );

    return this;
  }

  /**
   * Onclick interaction with the clear button
   */
  onClick() {
    this.searchInputField.value = "";
    this.searchButton.classList.remove("show");
  }

  onKeyPress(searchButton, e) {
    const inputValue = e.target.value.trim();
    if (inputValue !== "") {
      this.searchButton.classList.add("show");
    } else {
      this.searchButton.classList.remove("show");
    }
  }
}
