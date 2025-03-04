/**
 * Class representing a language toggle component.
 * This class manages a language selection dropdown with accessibility and event handling.
 */
export default class LanguageToggle {
  /**
   * Creates an instance of LanguageToggle.
   * @param {HTMLElement} element - The root element for the language toggle component.
   */
  constructor(element) {
    /**
     * @property {HTMLElement} element - The root element of the language toggle.
     */
    this.element = element;

    /**
     * @property {string} prefix - The prefix used for class names within the component.
     */
    this.prefix = `${this.element.dataset.prefix}--language-toggle`;

    /**
     * @property {string} contextMenuVisibleClass - The class name indicating the context menu is open.
     */
    this.contextMenuVisibleClass = `${this.prefix}--context-menu__open`;

    this.init();
  }

  /**
   * Initializes the component by caching DOM references, setting up handlers, and enabling event listeners.
   */
  init() {
    this.cacheDomReferences().setupHandlers().enable();
  }

  /**
   * Caches references to important DOM elements within the component.
   * @returns {LanguageToggle} The instance of the LanguageToggle class.
   */
  cacheDomReferences() {
    /**
     * @property {HTMLElement} contextButton - The button that toggles the context menu.
     */
    this.contextButton = this.element.querySelector(
      `.${this.prefix}--container`
    );

    /**
     * @property {HTMLElement} contextMenu - The dropdown menu containing language options.
     */
    this.contextMenu = this.element.querySelector(
      `.${this.prefix}--context-menu`
    );

    return this;
  }

  /**
   * Binds class methods to the current instance.
   * @returns {LanguageToggle} The instance of the LanguageToggle class.
   */
  setupHandlers() {
    this.contexMenuIsOpen = this.contexMenuIsOpen.bind(this);
    this.openContextMenu = this.openContextMenu.bind(this);
    this.closeContextMenu = this.closeContextMenu.bind(this);
    this.positionContextMenu = this.positionContextMenu.bind(this);
    this.onClick = this.onClick.bind(this);
    return this;
  }

  /**
   * Enables event listeners for the language toggle component.
   */
  enable() {
    this.contextButton.addEventListener("click", this.onClick.bind(this));
    window.addEventListener("load", () => {
      this.positionContextMenu();
    });
  }

  /**
   * Handles the click event on the language toggle button.
   * @param {Event} e - The click event object.
   * @returns {LanguageToggle} The instance of the LanguageToggle class.
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
   * Opens the context menu and positions it correctly.
   * @returns {LanguageToggle} The instance of the LanguageToggle class.
   */
  openContextMenu() {
    this.contextMenu.classList.add(this.contextMenuVisibleClass);
    this.contextMenu.removeAttribute("hidden");
    this.contextButton.setAttribute("aria-expanded", "true");
    this.positionContextMenu();
    return this;
  }

  /**
   * Closes the context menu.
   */
  closeContextMenu() {
    this.contextMenu.classList.remove(this.contextMenuVisibleClass);
    this.contextMenu.setAttribute("hidden", "hidden");
    this.contextButton.setAttribute("aria-expanded", "false");
  }

  /**
   * Positions the context menu relative to the language toggle button.
   */
  positionContextMenu() {
    const containerRect = this.element.getBoundingClientRect();
    const contextMenuRect = this.contextMenu.getBoundingClientRect();
    this.contextMenu.style.left = `${containerRect.left + (containerRect.width - contextMenuRect.width) / 2}px`;
    this.contextMenu.style.top = `${containerRect.bottom}px`;
  }

  /**
   * Checks if the context menu is currently open.
   * @returns {boolean} True if the context menu is open, otherwise false.
   */
  contexMenuIsOpen() {
    return this.contextMenu.classList.contains(this.contextMenuVisibleClass);
  }
}
