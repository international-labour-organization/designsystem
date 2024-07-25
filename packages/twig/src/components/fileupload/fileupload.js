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
    // Find the container of the input
    this.container = this.element.parentElement.parentElement;

    // Find the form control
    this.formControl = this.container.parentElement;

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
   * Format bytes to a human readable format
   *
   * @param {Number} bytes
   * @param {Number} decimals
   * @return {String}
   */
  formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  /**
   * onChange interaction with the FileUpload button
   *
   * @return {Object} FileUpload A reference to the instance of the class
   * @chainable
   */
  onChange() {
    // Classname of the list of files to upload
    const fileListClass = `${this.prefix}--file-upload--list`;

    // Find the fileList if it exsists
    let fileList = this.formControl.querySelector(`.${fileListClass}`);

    // Remove the fileList if it exists
    if (fileList) {
      fileList.remove();
    }

    // Create a new filelist and add it to the form control
    fileList = document.createElement("ul");
    fileList.classList.add(fileListClass);
    this.formControl.appendChild(fileList);

    // Add files to the filelist
    let files = "";
    [...this.element.files].forEach((file) => {
      const fileSize = this.formatBytes(file.size);
      files += this.template(file.name, fileSize);
    });

    fileList.innerHTML = files;

    return this;
  }

  /**
   * A template for outputting the list item markup
   *
   * @param {String} filename
   * @param {String} filesize
   * @return {String}
   */
  template(filename, filesize) {
    return `<li class="ilo--file-upload--list-item">${filename} (${filesize})</li>`;
  }
}
