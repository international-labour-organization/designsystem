export default class LinkList {
  /**
   * LinkList constructor which assigns the element passed into the constructor
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

    /** element prefix */
    this.prefix = `${this.element.dataset.prefix}--link-list`;

    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} LinkList A reference to the instance of the class
   * @chainable
   */
  init() {
    this.append();

    return this;
  }

  /**
   * Appends target="_blank" to all external links in the list
   *
   * @return {Object} LinkList A reference to the current instance of the class
   * @chainable
   */
  append() {
    const selector = `a:not([target=_blank]).${this.prefix}--link`;
    const links = this.element.querySelectorAll(selector);
    const origin = window.location.origin;

    for (const link of links) {
      if (new URL(link.href).origin !== origin) {
        link.setAttribute("target", "_blank");
      }
    }

    return this;
  }
}
