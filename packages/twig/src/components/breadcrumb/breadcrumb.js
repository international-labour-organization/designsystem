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
    // Store references to classnames
    this.breadcrumbsId = `${this.prefix}--breadcrumb--container`;
    this.contextAreaClass = `${this.prefix}--breadcrumb--context`;
    this.contextMenuItemsClass = `${this.prefix}--context-menu`;
    this.contextCollapseClass = `${this.contextAreaClass}__collapse`;
    this.contextButtonClass = `${this.contextAreaClass}--button`;
    this.contextMenuClass = `${this.contextAreaClass}--menu`;
    this.contextMenuVisibleClass = `${this.contextMenuClass}__visible`;

    // Store reference to DOM elements
    this.breadcrumbs = this.element.querySelector(`#${this.breadcrumbsId}`);
    this.contextArea = this.element.querySelector(`.${this.contextAreaClass}`);
    this.contextMenu = this.element.querySelector(`.${this.contextMenuClass}`);
    this.contextButton = this.element.querySelector(
      `.${this.contextButtonClass}`
    );
    this.breadcrumbsLastLink = this.element.querySelector(
      `#${this.breadcrumbsId} > li:last-child a`
    );
    this.contextMenuItems = this.element.querySelector(
      `.${this.contextMenuItemsClass}`
    );
    this.contextMenuItemFirstLink =
      this.contextMenuItems.querySelector("li:first-child a");
    this.contextMenuItemLastLink =
      this.contextMenuItems.querySelector("li:last-child a");

    // Store a reference to the breadcrumbs width so we know when to uncollapse them
    this.breadcrumbsWidth = this.breadcrumbs.offsetWidth;

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
    this.contexMenuIsOpen = this.contexMenuIsOpen.bind(this);
    this.openContextMenu = this.openContextMenu.bind(this);
    this.closeContextMenu = this.closeContextMenu.bind(this);
    this.focusBreadcrumbsLastLink = this.focusBreadcrumbsLastLink.bind(this);
    this.focusContextMenuItemFirstLink =
      this.focusContextMenuItemFirstLink.bind(this);
    this.onKeydown = this.onKeydown.bind(this);

    return this;
  }

  /**
   * Adds event listeners to enable interaction with view
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  enable() {
    // Handle resizing events
    window.addEventListener("resize", (e) => this.onResize(e));
    if (this.contextButton) {
      // When the context button gets clicked
      this.contextButton.addEventListener("click", (e) => this.onClick(e));

      // We only need the keydown handler to manage tab navigation when the
      // context menu is visible
      this.element.addEventListener("keydown", (e) => this.onKeydown(e));
    }
    return this;
  }

  /**
   * OnClick interaction with the ContextMenu button
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  onClick(e) {
    e.stopPropagation();
    if (this.contexMenuIsOpen()) {
      this.closeContextMenu();
    } else {
      this.openContextMenu();
      // Add an event listener to close the context menu if the user clicks outside of it
      window.addEventListener("click", this.closeContextMenu, { once: true });
    }
    return this;
  }

  /**
   * onResize interaction
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  onResize() {
    if (this.contextArea && this.breadcrumbsWidth) {
      if (this.breadcrumbsWidth >= window.innerWidth / 1.5) {
        this.contextArea.classList.add(this.contextCollapseClass);
      } else {
        this.contextArea.classList.remove(this.contextCollapseClass);
        this.closeContextMenu();
      }
    }
    return this;
  }

  /**
   * onKeydown interaction for tab navigation
   *
   * @param {*} e keydown event
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  onKeydown(e) {
    // Back navigation using the shift key
    if (e.shiftKey) {
      if (e.key.toLowerCase() === "tab") {
        // If the first context menu item is selected, tabbing back
        // should select the context button
        if (document.activeElement === this.contextMenuItemFirstLink) {
          e.preventDefault();
          this.contextButton.focus();
        }
      }
      return this;
    }

    // When using tab navigation
    if (e.key.toLowerCase() === "tab") {
      // If the context menu is open...
      const contexMenuIsOpen = this.contexMenuIsOpen();
      // If the context button is focused then the next focusable item
      // should be the first item in the context menu
      if (contexMenuIsOpen) {
        if (document.activeElement === this.contextButton) {
          e.preventDefault();
          this.focusContextMenuItemFirstLink();
          return this;
        }

        // If the last context menu item is focused then the next focusable
        // item should be the last breadcrumb item
        if (document.activeElement === this.contextMenuItemLastLink) {
          e.preventDefault();
          this.focusBreadcrumbsLastLink();
          this.closeContextMenu();
          return this;
        }
      }
    }

    return this;
  }

  /**
   * Position the context menu directly beneath the button
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  positionContextMenu() {
    const buttonRect = this.contextButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const contextMenuItemsWidth = this.contextMenuItems.offsetWidth;
    const navStart = buttonCenterX - contextMenuItemsWidth / 2;
    const navTop = buttonRect.bottom + 16;
    this.contextMenu.style.left = navStart + "px";
    this.contextMenu.style.top = navTop + "px";
    return this;
  }

  /**
   * Open the Context menu
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  openContextMenu() {
    this.contextMenu.classList.add(this.contextMenuVisibleClass);
    this.contextMenu.removeAttribute("hidden");
    this.contextButton.setAttribute("aria-expanded", true);
    this.positionContextMenu();
    return this;
  }

  /**
   * Close the Context menu
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  closeContextMenu() {
    this.contextMenu.classList.remove(this.contextMenuVisibleClass);
    this.contextMenu.setAttribute("hidden", "hidden");
    this.contextButton.setAttribute("aria-expanded", false);
  }

  /**
   * Check to see whether the Context menu is open
   *
   * @returns boolean
   */
  contexMenuIsOpen() {
    return this.contextMenu.classList.contains(this.contextMenuVisibleClass);
  }

  /**
   * Focuses first link in the Context Menu
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  focusContextMenuItemFirstLink() {
    this.contextMenuItemFirstLink.focus();
    return this;
  }

  /**
   * Focuses last item of the Breadcrumbs
   *
   * @return {Object} Breadcrumb A reference to the instance of the class
   * @chainable
   */
  focusBreadcrumbsLastLink() {
    this.breadcrumbsLastLink.focus();
    return this;
  }
}
