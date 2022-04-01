import { getUpdatedItems, EVENTS, ARIA } from '@ilo/utils';

/**
 * The Accordion module which handles rendering field labels inline on a form.
 *
 * @class Accordion
 */
export default class Accordion {
  /**
   * Accordion constructor which assigns the element passed into the constructor
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
    this.itemStatuses = [];

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Accordion A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences()
      .setupHandlers()
      .enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Accordion A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The field that a user interacts with on a form
     * @type {Object}
     */
    this.accordionItems = this.element.querySelectorAll('.ilo--accordion__item');
    this.multipleExpanded = this.element.getAttribute('data-multipleexpanded');
    this.accordionButtons = this.element.querySelectorAll('.ilo--accordion__button');
    this.accordionPanels = this.element.querySelectorAll('.ilo--accordion__panel');
    console.log(this.multipleExpanded);

    this.accordionButtons.forEach((button, i) => {
      const expanded = button.getAttribute(ARIA.EXPANDED);
      const id = this.accordionItems[i].getAttribute('id');
      if (expanded === 'true') {
        this.itemStatuses = getUpdatedItems({
          id,
          itemStatuses: this.itemStatuses,
          allowMultipleExpanded: this.multipleExpanded,
        });
      }
    });

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Accordion A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.collapseSection = this.collapseSection.bind(this);
    this.expandSection = this.expandSection.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateAccordionItems = this.updateAccordionItems.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Accordion A reference to the instance of the class
   * @chainable
   */
  enable() {
    if (this.accordionButtons.length > 0) {
      this.accordionButtons.forEach((button, i) => {
        button.addEventListener(EVENTS.CLICK, () => this.onClick(i));
      });
    }

    return this;
  }

  /**
   * Onclick interaction with the accordion button
   *
   * @return {Object} Accordion A reference to the instance of the class
   * @chainable
   */
  onClick(i) {
    const id = this.accordionItems[i].getAttribute('id');

    this.itemStatuses = getUpdatedItems({
      id,
      itemStatuses: this.itemStatuses,
      allowMultipleExpanded: this.multipleExpanded,
    });

    this.updateAccordionItems();

    return this;
  }

  /**
   * Update accordion items based off of new statuses
   *
   * @chainable
   */
  updateAccordionItems() {
    this.accordionItems.forEach((item, i) => {
      const id = item.getAttribute('id');
      const open = this.itemStatuses.indexOf(id) > -1;
      if (open) {
        this.accordionButtons[i].setAttribute(ARIA.EXPANDED, 'true');
        this.accordionPanels[i].setAttribute(ARIA.HIDDEN, 'false');
        this.expandSection(this.accordionPanels[i]);
      } else {
        this.accordionButtons[i].setAttribute(ARIA.EXPANDED, 'false');
        this.accordionPanels[i].setAttribute(ARIA.HIDDEN, 'true');
        this.collapseSection(this.accordionPanels[i]);
      }
    });

    return this;
  }

  /**
   * Animates a panel collapse
   *
   * @param {HTMLElement} element - REQUIRED - the accordion panel to be collapsed
   *
   * @chainable
   */
  collapseSection(element) {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(() => {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(() => {
        element.style.height = `${0}px`;
      });
    });
  }

  /**
   * Animates a panel expansion
   *
   * @param {HTMLElement} element - REQUIRED - the accordion panel to be expanded
   *
   * @chainable
   */
  expandSection(element) {
    const sectionHeight = element.scrollHeight;
    element.style.height = `${sectionHeight}px`;

    element.addEventListener(EVENTS.TRANSITIONEND, () => {
      element.getAttribute(ARIA.HIDDEN) === MISC.FALSE
        ? (element.style.height = 'auto')
        : (element.style.height = '0px');
      element.removeEventListener(EVENTS.TRANSITIONEND, () => {
        element.style.height = null;
      });
    });
  }
}
