/**
 * The ReadMore module which handles rendering field labels inline on a form.
 *
 * @class ReadMore
 */
export default class ReadMore {
  /**
   * ReadMore constructor which assigns the element passed into the constructor
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

    // set some values
    this.openclass = `${this.prefix}--read-more--open`;
    this.buttonopenclass = `${this.prefix}--read-more--button--open`;

    // grab our HTML text to swap
    this.fulltext = this.element.dataset.fulltext;

    // cache the excerpt
    this.excerpt = this.element.dataset.excerpt;

    // grab out button labels to swap
    this.buttonlabel = {
      closed: this.element.dataset.closed,
      opened: this.element.dataset.opened,
    };

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} ReadMore A reference to the instance of the class
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
    this.ReadMoreButton = this.element.querySelector(
      `.${this.prefix}--read-more--button`
    );
    this.RichText = this.element.querySelector(`.${this.prefix}--richtext`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} ReadMore A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onClick = this.onClick.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.ReadMoreButton.addEventListener("click", () => this.onClick());

    return this;
  }

  /**
   * Onclick interaction with the ReadMore button
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  onClick() {
    if (this.element.classList.contains(this.openclass)) {
      this.RichText.innerHTML = this.excerpt;
      this.ReadMoreButton.innerHTML = this.buttonlabel.closed;
    } else {
      this.RichText.innerHTML = this.fulltext;
      this.ReadMoreButton.innerHTML = this.buttonlabel.opened;
    }
    this.element.classList.toggle(this.openclass);
    this.ReadMoreButton.classList.toggle(this.buttonopenclass);

    return this;
  }
}
