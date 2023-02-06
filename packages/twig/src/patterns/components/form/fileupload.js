import { EVENTS } from "@ilo-org/utils";

/**
 * The FileUpload module which handles rendering field labels inline on a form.
 *
 * @class FileUpload
 */
export default class FileUpload {
  /**
   * FileUpload constructor which assigns the element passed into the constructor
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
   * @return {Object} FileUpload A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} FileUpload A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Read More state
     * @type {Object}
     */
    this.container = this.element.parentElement.parentElement;

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} FileUpload A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onChange = this.onChange.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} FileUpload A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.element.addEventListener(EVENTS.CHANGE, (e) => this.onChange(e));

    return this;
  }

  /**
   * onChange interaction with the FileUpload button
   *
   * @return {Object} FileUpload A reference to the instance of the class
   * @chainable
   */
  onChange(e) {
    const oldDiv =
      this.container.querySelector(`.${this.prefix}--fieldset--input`) !== null;
    if (oldDiv) {
      this.container.remove(oldDiv);
    }
    const newDiv = document.createElement("div");
    newDiv.classList.add(`${this.prefix}--fieldset--input`);
    const fileList = document.createElement("ul");
    fileList.classList.add(`${this.prefix}--file-upload--list`);
    let files = "";
    [...e.target.files].map((file) => {
      files += this.template(file.name);
    });
    fileList.innerHTML = files;
    newDiv.appendChild(fileList);
    this.container.appendChild(newDiv);

    return this;
  }

  /**
   * A template for outputting the list item markup
   *
   * @param {String} filename
   * @return {String}
   */
  template(filename) {
    return `<li class="ilo--file-upload--list-item">${filename}</li>`;
  }
}
