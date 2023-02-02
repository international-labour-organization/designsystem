import { getUpdatedItems, EVENTS, ARIA, MISC } from "@ilo-org/utils";

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
      .enable()
      .evaluateAccordionHeights();

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
    this.accordionItems = this.element.querySelectorAll(
      ".ilo--accordion--item"
    );
    this.multipleExpanded =
      this.element.getAttribute("data-multipleexpanded") === "true";
    this.accordionPanels = this.element.querySelectorAll(
      ".ilo--accordion--panel"
    );
    this.accordionButtons = this.element.querySelectorAll(
      ".ilo--accordion--button"
    );
    console.log(this.multipleExpanded);

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
        button.addEventListener(EVENTS.CLICK, (e) => this.onClick(e));
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
  onClick(e) {
    this.updateAccordionItems(e.target);

    return this;
  }

  /**
   * Evaluate accordion panel heights
   *
   * @chainable
   */
  evaluateAccordionHeights() {
    this.accordionPanels.forEach((item, i) => {
      item.style.setProperty(
        "--height",
        item.querySelector(".ilo--accordion--innerpanel").scrollHeight + "px"
      );
    });

    return this;
  }

  /**
   * Update accordion items based off of new statuses
   *
   * @chainable
   */
  updateAccordionItems(panelbutton) {
    const panel = panelbutton
      .closest(".ilo--accordion--item")
      .querySelector(".ilo--accordion--panel");
    const isopen = panel.classList.contains("ilo--accordion--panel--open");

    if (!this.multipleExpanded) {
      this.accordionPanels.forEach((item) => {
        if (panel !== item) {
          this.collapseSection(item);
        }
      });
    }

    if (!isopen) {
      this.expandSection(panel);
    } else {
      this.collapseSection(panel);
    }
    panelbutton.blur();

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
    element.parentElement
      .querySelector(".ilo--accordion--button")
      .setAttribute(ARIA.EXPANDED, "false");
    element.setAttribute(ARIA.HIDDEN, "false");
    element.classList.remove("ilo--accordion--panel--open");
  }

  /**
   * Animates a panel expansion
   *
   * @param {HTMLElement} element - REQUIRED - the accordion panel to be expanded
   *
   * @chainable
   */
  expandSection(element) {
    element.parentElement
      .querySelector(".ilo--accordion--button")
      .setAttribute(ARIA.EXPANDED, "true");
    element.setAttribute(ARIA.HIDDEN, "true");
    element.classList.add("ilo--accordion--panel--open");
  }
}
