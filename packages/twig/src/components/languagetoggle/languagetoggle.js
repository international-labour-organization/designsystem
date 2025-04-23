import StatefulComponent from "../../utils/statefulComponent";
import createFocusTrap from "../../utils/createFocusTrap";

/**
 * A language toggle component that provides a dropdown menu for language selection.
 * This component extends StatefulComponent to manage its open/closed state and
 * provides keyboard navigation and focus management for accessibility.
 *
 * @extends StatefulComponent
 */
export default class LanguageToggle extends StatefulComponent {
  /**
   * Creates a new LanguageToggle instance
   *
   * @param {HTMLElement} element - The root element of the language toggle component
   */
  constructor(element) {
    // Initialize state for our component
    const initialState = {
      contextMenuIsOpen: false,
    };

    // Initial state must be passed to the constructor for the StatefulComponent to work
    super(element, initialState);

    this.prefix = `${this.element.dataset.prefix}--language-toggle`;
    this.contextMenuVisibleClass = `${this.prefix}--context-menu__open`;

    // Placeholders for DOM references for elements that haven't been added to the DOM yet
    this.contextMenuTemplate = null;
    this.contextMenuContent = null;
    this.contextMenu = null;

    this.init();
  }

  /**
   * Initializes the component by setting up DOM references, binding event handlers,
   * enabling event listeners, and registering state change handlers.
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  init() {
    this.cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .registerStateHandlers();
    return this;
  }

  /**
   * Caches references to DOM elements needed by the component
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  cacheDomReferences() {
    this.contextMenuTemplate = this.element.querySelector(
      `#${this.prefix}--context-menu--template`
    );
    this.contextButton = this.element.querySelector(
      `.${this.prefix}--container`
    );

    return this;
  }

  /**
   * Binds all event handler methods to the component instance
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  bindHandlers() {
    this.handleFocusTrap = this.handleFocusTrap.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOpenContextMenu = this.handleOpenContextMenu.bind(this);
    this.handleCloseContextMenu = this.handleCloseContextMenu.bind(this);
    this.positionContextMenu = this.positionContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    return this;
  }

  /**
   * Registers handlers for state changes
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  registerStateHandlers() {
    this.registerStateHandler("contextMenuIsOpen", (value) => {
      if (value) {
        this.handleOpenContextMenu();
      } else {
        this.handleCloseContextMenu();
      }
    });
    return this;
  }

  /**
   * Enables event listeners for user interactions
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  enableHandlers() {
    this.contextButton.addEventListener("click", this.handleClick);
    return this;
  }

  /**
   * Handles click events on the toggle button
   *
   * @param {MouseEvent} e - The click event
   * @returns {LanguageToggle} The instance for method chaining
   */
  handleClick(e) {
    e.stopPropagation();
    this.state.contextMenuIsOpen = !this.state.contextMenuIsOpen;
    return this;
  }

  /**
   * Opens the context menu and sets up necessary event listeners
   *
   * @returns {LanguageToggle} The instance for method chaining
   */
  handleOpenContextMenu() {
    this.contextMenuContent = this.contextMenuTemplate.content.cloneNode(true);
    document.body.appendChild(this.contextMenuContent);
    this.contextMenu = document.body.querySelector(
      `.${this.prefix}--context-menu`
    );

    this.positionContextMenu();

    this.contextMenu.classList.add(this.contextMenuVisibleClass);
    this.contextButton.setAttribute("aria-expanded", "true");

    window.addEventListener("click", this.handleOutsideClick);
    window.addEventListener("resize", this.positionContextMenu);

    this.handleTabNavigation();

    return this;
  }

  /**
   * Closes the context menu and cleans up event listeners
   */
  handleCloseContextMenu() {
    this.contextMenu.classList.remove(this.contextMenuVisibleClass);
    this.contextMenu.remove();
    this.contextMenu.removeEventListener("keydown", this.handleFocusTrap);
    window.removeEventListener("click", this.handleOutsideClick);
    window.removeEventListener("resize", this.positionContextMenu);
  }

  /**
   * Positions the context menu relative to the toggle button
   */
  positionContextMenu() {
    const containerRect = this.element.getBoundingClientRect();
    const contextMenuRect = this.contextMenu.getBoundingClientRect();
    this.contextMenu.style.left = `${containerRect.left + (containerRect.width - contextMenuRect.width) / 2}px`;
    this.contextMenu.style.top = `${containerRect.bottom}px`;
  }

  /**
   * Handles clicks outside the context menu to close it
   *
   * @param {MouseEvent} event - The click event
   */
  handleOutsideClick(event) {
    if (
      this.state.contextMenuIsOpen &&
      !this.element?.contains(event.target) &&
      !this.contextMenu?.contains(event.target)
    ) {
      this.state.contextMenuIsOpen = false;
    }
  }

  /**
   * Manages keyboard focus within the context menu
   *
   * @param {KeyboardEvent} event - The keyboard event
   */
  handleFocusTrap(event) {
    // Get all focusable elements in the context menu
    const focusableElements = Array.from(
      this.contextMenu.querySelectorAll("a")
    );

    createFocusTrap(event, focusableElements, () => {
      this.state.contextMenuIsOpen = false;
      this.contextButton.focus();
    });
  }

  /**
   * Sets up keyboard navigation for the context menu
   */
  handleTabNavigation() {
    // Browser hack to make sure that the context menu is in the DOM
    // and done transitioning before we try to focus it
    setTimeout(() => {
      this.contextMenu.focus();
      this.contextMenu.addEventListener("keydown", this.handleFocusTrap);
    }, 100);
  }
}
