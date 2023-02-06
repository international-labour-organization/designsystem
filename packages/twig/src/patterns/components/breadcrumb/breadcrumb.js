import { EVENTS } from "@ilo-org/utils";

/**
 * The Breadcrumb module which handles rendering field labels inline on a form.
 *
 * @class Breadcrumb
 */
export default class Breadcrumb {
  /**
   * Breadcrumb constructor which assigns the element passed into the constructor
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
   * Initializes the view
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable().onResize();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    this.breadcrumbs = this.element.querySelector(".ilo--breadcrumb--items");
    this.breadcrumbwidth = this.breadcrumbs.offsetWidth;
    this.ContextButton = this.element.querySelector(
      `.${this.prefix}--breadcrumb--item--context`
    );
    this.ContextMenu = this.element.querySelector(`.context--menu`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Breadcrumb A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onResize = this.onResize.bind(this);
    this.onClick = this.onClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  enable() {
    window.addEventListener(EVENTS.RESIZE, (e) => this.onResize(e));
    this.ContextButton.addEventListener(EVENTS.CLICK, () => this.onClick());

    return this;
  }

  /**
   * onResize interaction with the accordion button
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  onResize() {
    if (this.breadcrumbwidth > this.element.offsetWidth / 2) {
      this.element.classList.add("contextmenu");
      this.ContextMenu.classList.remove("open");
    } else {
      this.element.classList.remove("contextmenu");
      this.ContextMenu.classList.remove("open");
    }

    return this;
  }

  /**
   * OnClick interaction with the ContextMenu button
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  onClick() {
    if (this.element.classList.contains("contextmenu")) {
      if (this.ContextMenu.classList.contains("open")) {
        this.ContextMenu.classList.remove("open");
      } else {
        this.ContextMenu.classList.add("open");
      }
    }

    return this;
  }
}
