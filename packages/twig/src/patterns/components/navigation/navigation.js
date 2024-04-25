import { EVENTS } from "@ilo-org/utils";

/**
 * The Navigation module which handles rendering field labels inline on a form.
 *
 * @class Navigation
 */
export default class Navigation {
  /**
   * Navigation constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  constructor(element, callback = null) {
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */
    this.element = element;

    // get the theme prefix
    this.prefix = this.element.dataset.prefix;

    this.callback = callback;

    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Subnav state
     * @type {Object}
     */
    this.subNav = this.element.querySelector(`.${this.prefix}--subnav`);
    this.subnavButton = this.element.querySelector(
      `.${this.prefix}--nav--trigger`
    );
    this.menuCloseSet = this.element.querySelectorAll(
      `.${this.prefix}--header--menu--close`
    );
    this.subnavBack = this.element.querySelectorAll(
      `.${this.prefix}--mobile--subnav--back`
    );
    this.menuOpen = this.element.querySelector(`.${this.prefix}--header--menu`);
    this.searchButton = this.element.querySelector(
      `.${this.prefix}--search--button`
    );
    this.searchBox = this.element.querySelector(`.${this.prefix}--search-box`);
    this.contextButton = this.element.querySelector(
      `.${this.prefix}--language-switcher--button`
    );
    this.languageButton = this.element.querySelector(
      `.${this.prefix}--mobile--nav--language--switcher--button`
    );
    this.contextLinks = this.element.querySelectorAll(
      `.${this.prefix}--context-menu--link`
    );
    this.languageLinks = this.element.querySelectorAll(
      `.${this.prefix}--nav--language`
    );
    this.body = document.body;

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Navigation A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.subnavClick = this.handleSubnavClick.bind(this);
    this.subnavClickOff = this.handleSubnavClickOff.bind(this);
    this.subnavClickOn = this.handleSubnavClickOn.bind(this);
    this.subnavBackClick = this.handleSubnavBackClick.bind(this);
    this.menuCloseClick = this.handleMenuCloseClick.bind(this);
    this.menuOpenClick = this.handleMenuOpenClick.bind(this);
    this.languageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.contextLinkClick = this.handleContextLinkClick.bind(this);
    this.onResize = this.handleResize.bind(this);
    this.keyPress = this.handleKeyPress.bind(this);
    this.contextButtonClick = this.handleContextButtonClick.bind(this);
    this.contextButtonClickOff = this.handleContextButtonClickOff.bind(this);
    this.contextButtonClickOn = this.handleContextButtonClickOn.bind(this);
    this.searchButtonClick = this.handleSearchButtonClick.bind(this);
    this.searchButtonClickOff = this.handleSearchButtonClickOff.bind(this);
    this.searchButtonClickOn = this.handleSearchButtonClickOn.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  enable() {
    // subnavButton
    if (this.subnavButton) {
      this.subnavButton.addEventListener(EVENTS.CLICK, (e) =>
        this.subnavClick(e)
      );
      this.subnavButton.addEventListener(EVENTS.TOUCH_START, (e) =>
        this.subnavClick(e)
      );
    }

    // subnavBack
    if (this.subnavBack.length > 0) {
      this.subnavBack.forEach((button) => {
        button.addEventListener(EVENTS.CLICK, (e) => this.subnavBackClick(e));
        button.addEventListener(EVENTS.TOUCH_START, (e) =>
          this.subnavBackClick(e)
        );
      });
    }

    // searchButton
    if (this.searchButton) {
      this.searchButton.addEventListener(EVENTS.CLICK, (e) =>
        this.searchButtonClick(e)
      );
      this.searchButton.addEventListener(EVENTS.TOUCH_START, (e) =>
        this.searchButtonClick(e)
      );
    }
    // menuCloseSet
    if (this.menuCloseSet.length > 0) {
      this.menuCloseSet.forEach((closeButton, i) => {
        closeButton.addEventListener(EVENTS.CLICK, (e) =>
          this.menuCloseClick(i, e)
        );
        closeButton.addEventListener(EVENTS.TOUCH_START, (e) =>
          this.menuCloseClick(i, e)
        );
      });
    }

    // menuOpen
    if (this.menuOpen) {
      this.menuOpen.addEventListener(EVENTS.CLICK, (e) =>
        this.menuOpenClick(e)
      );
      this.menuOpen.addEventListener(EVENTS.TOUCH_START, (e) =>
        this.menuOpenClick(e)
      );
    }

    // contextButton
    if (this.contextButton) {
      this.contextButton.addEventListener(EVENTS.CLICK, (e) =>
        this.contextButtonClick(e)
      );
      this.contextButton.addEventListener(EVENTS.TOUCH_START, (e) =>
        this.contextButtonClick(e)
      );
    }

    // languageButton
    if (this.languageButton) {
      this.languageButton.addEventListener(EVENTS.CLICK, (e) =>
        this.languageButtonClick(e)
      );
      this.languageButton.addEventListener(EVENTS.TOUCH_START, (e) =>
        this.languageButtonClick(e)
      );
    }

    // contextLinks
    if (this.contextLinks.length > 0 && this.callback) {
      this.contextLinks.forEach((contextLink) => {
        contextLink.addEventListener(EVENTS.CLICK, (e) =>
          this.contextLinkClick(e)
        );
        contextLink.addEventListener(EVENTS.TOUCH_START, (e) =>
          this.contextLinkClick(e)
        );
      });
    }

    // languageLinks
    if (this.languageLinks.length > 0 && this.callback) {
      this.languageLinks.forEach((languageLink) => {
        languageLink.addEventListener(EVENTS.CLICK, (e) =>
          this.contextLinkClick(e)
        );
        languageLink.addEventListener(EVENTS.TOUCH_START, (e) =>
          this.contextLinkClick(e)
        );
      });
    }

    if (this.searchBox) {
      // Click events in the searchBox should not bubble up to the body
      this.searchBox.addEventListener(
        EVENTS.CLICK,
        (ev) => {
          ev.stopPropagation();
        },
        false
      );
    }

    if (this.subNav) {
      // Click events in the subNav should not bubble up to the body
      this.subNav.addEventListener(
        EVENTS.CLICK,
        (ev) => {
          ev.stopPropagation();
        },
        false
      );
    }
    window.addEventListener(EVENTS.RESIZE, (e) => {
      if (window.innerWidth >= 1024) {
        this.onResize(e);
      }
    });

    return this;
  }

  /**
   * Onclick interaction with the context links
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleContextLinkClick(event) {
    event.preventDefault();
    this.callback(event);

    return this;
  }

  /**
   * Actions performed on key press
   *
   * @param {Event} e - event object
   * @param {Function} callback - function to call if the escape key is pressed
   *
   * @return {Object} Nav A reference to the instance of the class
   * @chainable
   */
  handleKeyPress(e, callback) {
    if (e.key === "Escape") {
      callback(e);
    }

    return this;
  }

  /**
   * Onclick interaction with the language menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleLanguageButtonClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.element.classList.toggle(`${this.prefix}--select--open`);

    return this;
  }

  /**
   * Onclick interaction with the context menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleContextButtonClickOn(e) {
    e.stopImmediatePropagation();
    this.element.classList.add(`${this.prefix}--context--open`);
    window.addEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.contextButtonClickOff),
      false
    );
    window.addEventListener(EVENTS.CLICK, this.contextButtonClickOff);

    return this;
  }

  /**
   * Onclick interaction with the context menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleContextButtonClickOff(e) {
    e.stopImmediatePropagation();
    this.element.classList.remove(`${this.prefix}--context--open`);
    window.removeEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.contextButtonClickOff),
      false
    );
    window.removeEventListener(EVENTS.CLICK, this.contextButtonClickOff);

    return this;
  }

  /**
   * Onclick interaction with the context menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleContextButtonClick(e) {
    if (this.element.classList.contains(`${this.prefix}--context--open`)) {
      this.contextButtonClickOff(e);
    } else {
      this.contextButtonClickOn(e);
    }

    return this;
  }

  /**
   * Onclick interaction with the search button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSearchButtonClickOn(e) {
    e.stopImmediatePropagation();
    // e.stopPropagation();

    // Cross-browser hack to make sure the element has display
    // before the next class is added so the transition will work
    this.searchBox.style.display = "block";
    window.setTimeout(() => {
      this.element.classList.add(`${this.prefix}--search--open`);
    }, 10);

    window.addEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.searchButtonClickOff),
      false
    );

    if (window.innerWidth >= 1024) {
      window.addEventListener(EVENTS.CLICK, this.searchButtonClickOff, false);
    }

    return this;
  }

  /**
   * Onclick interaction with the search button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSearchButtonClickOff(e) {
    e.stopImmediatePropagation();
    this.element.classList.remove(`${this.prefix}--search--open`);

    // Hiden from tab navigation after transition
    window.setTimeout(() => {
      this.searchBox.style.display = "none";
    }, 225);

    window.removeEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.searchButtonClickOff),
      false
    );

    window.removeEventListener(EVENTS.CLICK, this.searchButtonClickOff, false);

    return this;
  }

  /**
   * Onclick interaction with the search button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSearchButtonClick(e) {
    this.element.classList.remove(`${this.prefix}--subnav--open`);

    if (this.element.classList.contains(`${this.prefix}--search--open`)) {
      this.searchButtonClickOff(e);
    } else {
      this.searchButtonClickOn(e);
    }

    return this;
  }

  /**
   * Onclick interaction with the menu button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleMenuOpenClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.element.classList.add(`${this.prefix}--mobile--open`);
    this.body.classList.add(`${this.prefix}--menu--open`);

    return this;
  }

  /**
   * Onclick interaction with the subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavClickOn(e) {
    e.stopImmediatePropagation();
    this.subNav.style.display = "block";

    // Cross-browser hack to make sure the element has display
    // before the next class is added so the transition will work
    window.setTimeout(() => {
      this.element.classList.add(`${this.prefix}--subnav--open`);
    }, 10);

    window.addEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.subnavClickOff),
      false
    );

    if (window.innerWidth >= 1024) {
      window.addEventListener(EVENTS.CLICK, this.subnavClickOff);
    }
    return this;
  }

  /**
   * Onclick interaction with the subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavClickOff(e) {
    e.stopImmediatePropagation();
    this.element.classList.remove(`${this.prefix}--subnav--open`);

    window.setTimeout(() => {
      this.subNav.style.display = "none";
    }, 225);

    window.removeEventListener(
      EVENTS.KEY_DOWN,
      (ev) => this.keyPress(ev, this.subnavClickOff),
      false
    );

    window.removeEventListener(EVENTS.CLICK, this.subnavClickOff);

    return this;
  }

  /**
   * Onclick interaction with the Subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.element.classList.remove(`${this.prefix}--search--open`);

    if (this.element.classList.contains(`${this.prefix}--subnav--open`)) {
      this.subnavClickOff(e);
    } else {
      this.subnavClickOn(e);
    }

    return this;
  }

  /**
   * Onclick interaction with the Subnav button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleSubnavBackClick(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    // this.element.classList.remove(`${this.prefix}--subnav--open`);
    this.subnavClickOff(e);
    this.element.classList.remove(`${this.prefix}--select--open`);

    return this;
  }

  /**
   * Onclick interaction with the menu close button
   *
   * @return {Object} Navigation A reference to the instance of the class
   * @chainable
   */
  handleMenuCloseClick(i, e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.element.classList.remove(`${this.prefix}--mobile--open`);
    this.element.classList.remove(`${this.prefix}--subnav--open`);
    this.body.classList.remove(`${this.prefix}--menu--open`);

    return this;
  }

  /**
   * onResize interaction with the accordion button
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  handleResize() {
    this.element.classList.remove(`${this.prefix}--context--open`);
    this.element.classList.remove(`${this.prefix}--mobile--open`);
    this.element.classList.remove(`${this.prefix}--subnav--open`);
    this.element.classList.remove(`${this.prefix}--search--open`);

    return this;
  }
}
