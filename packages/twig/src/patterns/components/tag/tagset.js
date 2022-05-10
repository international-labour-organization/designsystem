import { getUpdatedItems, EVENTS, ARIA } from '@ilo-org/utils';

/**
 * The Tag module which handles rendering field labels inline on a form.
 *
 * @class Tag
 */
export default class Tag {
  /**
   * Tag constructor which assigns the element passed into the constructor
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
    this.multipleActive = true;
    this.itemStatuses = [];

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Tag A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Tag A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The field that a user interacts with on a form
     * @type {Object}
     */
    this.tags = this.element.querySelectorAll('.ilo--tag');
    this.multipleExpanded = this.element.getAttribute('data-multipleactive');
    // this.accordionButtons = this.element.querySelectorAll('.ilo--accordion__button');
    // this.accordionPanels = this.element.querySelectorAll('.ilo--accordion__panel');
    console.log(this.multipleExpanded);

    this.accordionButtons.forEach((button, i) => {
      const expanded = button.dataset('active');
      const id = this.tags[i].getAttribute('id');
      if (expanded === 'true') {
        this.itemStatuses = getUpdatedItems({
          id,
          itemStatuses: this.itemStatuses,
          allowMultipleActive: this.multipleActive,
        });
      }
    });

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Tag A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    // this.collapseSection = this.collapseSection.bind(this);
    // this.expandSection = this.expandSection.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateTagItems = this.updateTagItems.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Tag A reference to the instance of the class
   * @chainable
   */
  enable() {
    if (this.tags.length > 0) {
      this.tags.forEach((button, i) => {
        button.addEventListener(EVENTS.CLICK, () => this.onClick(i));
      });
    }

    return this;
  }

  /**
   * Onclick interaction with the tag button
   *
   * @return {Object} Tag A reference to the instance of the class
   * @chainable
   */
  onClick(i) {
    const id = this.tags[i].getAttribute('id');

    this.itemStatuses = getUpdatedItems({
      id,
      itemStatuses: this.itemStatuses,
      allowMultipleExpanded: this.multipleExpanded,
    });

    this.updateTagItems();

    return this;
  }

  /**
   * Update tag items based off of new statuses
   *
   * @chainable
   */
  updateTagItems() {
    this.tags.forEach((item, i) => {
      const id = item.getAttribute('id');
      const open = this.itemStatuses.indexOf(id) > -1;
      if (open) {
        this.tags[i].classList.add('ilo--tag--active');
        this.tags[i].dataset('active', 'true');
      } else {
        this.tags[i].classList.remove('ilo--tag--active');
        this.tags[i].dataset('active', 'false');
      }
    });

    return this;
  }
}
