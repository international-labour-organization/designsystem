import { EVENTS, ARIA } from "@ilo-org/utils";

/**
 * The Tabs module which handles rendering field labels inline on a form.
 *
 *
 * @class Tabs
 */
export default class Tabs {
  /**
   * Tabs constructor which assigns the element passed into the constructor
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
   * @return {Object} Tabs A reference to the instance of the class
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
    this.tabButtons = this.element.querySelectorAll(
      `.${this.prefix}--tabs--selection--button`
    );
    this.tabPanels = this.element.querySelectorAll('[role="tabpanel"]');
    this.firstTab;

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Tabs A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.OnClickHandler = this.onClick.bind(this);
    this.KeyPressHandler = this.onKeyPress.bind(this);
    this.OnPrevHandler = this.setSelectedToPreviousTab.bind(this);
    this.OnNextHandler = this.setSelectedToNextTab.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Tabs A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.element.classList.add("tabs--js");

    Array.from(this.tabButtons).forEach((button) => {
      button.addEventListener(EVENTS.CLICK, (e) => this.OnClickHandler(e));
      button.addEventListener(EVENTS.KEY_DOWN, (e) => this.KeyPressHandler(e));

      if (!this.firstTab) {
        this.firstTab = button.getAttribute(ARIA.CONTROLS);
      }
      this.lastTab = button.getAttribute(ARIA.CONTROLS);
    });

    return this;
  }

  /**
   * Actions performed on click of a tab
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  onClick(e) {
    e.preventDefault();
    const tabid = e.currentTarget.getAttribute(ARIA.CONTROLS);
    this.selectTab(tabid);

    return this;
  }

  /**
   * Actions performed on key press
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  onKeyPress(e) {
    let flag = false;
    const tabid = e.currentTarget.getAttribute(ARIA.CONTROLS);

    switch (e.key) {
      case "ArrowLeft":
        this.setSelectedToPreviousTab(tabid);
        flag = true;
        break;

      case "ArrowRight":
        this.setSelectedToNextTab(tabid);
        flag = true;
        break;

      case "Home":
        this.selectTab(this.firstTab.id);
        flag = true;
        break;

      case "End":
        this.selectTab(this.lastTab.id);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      e.stopPropagation();
      e.preventDefault();
    }

    return this;
  }

  /**
   * Selects the chosen tab
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  selectTab(tabid) {
    const selectedTab = this.element.querySelector(
      `[${ARIA.CONTROLS}="${tabid}"]`
    );
    Array.from(this.tabPanels).forEach((panel) => {
      panel.setAttribute(ARIA.EXPANDED, false);
    });
    Array.from(this.tabButtons).forEach((button) => {
      button.setAttribute(ARIA.SELECTED, false);
    });
    selectedTab.focus();
    selectedTab.setAttribute(ARIA.SELECTED, true);
    document.getElementById(tabid).setAttribute(ARIA.EXPANDED, true);

    return this;
  }

  /**
   * Selects the previous tab in the list of tabs
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  setSelectedToPreviousTab(tabid) {
    const prevTab =
      document.getElementById(tabid).previousElementSibling !== null
        ? document.getElementById(tabid).previousElementSibling
        : document.getElementById(this.lastTab);
    this.selectTab(prevTab.id);

    return this;
  }

  /**
   * Selects the previous tab in the list of tabs
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  setSelectedToNextTab(tabid) {
    const nextTab =
      document.getElementById(tabid).nextElementSibling !== null
        ? document.getElementById(tabid).nextElementSibling
        : document.getElementById(this.firstTab);
    this.selectTab(nextTab.id);

    return this;
  }
}
