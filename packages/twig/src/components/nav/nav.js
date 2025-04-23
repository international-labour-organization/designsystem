import {
  StatefulComponent,
  createFocusTrap,
  createBreakpointObserver,
} from "../../utils";

/**
 * A component that manages desktop navigation for complex sites with many navigation options. It handles:
 * - Primary navigation items
 * - Dropdown menus for secondary navigation items
 * - Dynamic positioning and responsive behavior
 * - Focus management and keyboard navigation
 * - Click-outside handling for dropdowns
 * - State management for navigation states *
 *
 * @extends StatefulComponent
 */
export default class Nav extends StatefulComponent {
  /**
   * Creates a new Nav component instance.
   * Initializes the component with its initial state and sets up necessary properties.
   *
   * @param {HTMLElement} element - The root element of the navigation component
   */
  constructor(element) {
    // Initial state
    const initialState = {
      dropDownIsOpen: false,
      isDesktop: true,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // References to elements that get rendered dynamically on the client
    this.dropdown = null;

    // Set up a breakpoint observer to track viewport size changes
    this.breakpointObserver = createBreakpointObserver((breakpoint) => {
      this.state.isDesktop = ["xl", "xxl"].includes(breakpoint);
      console.log(this.state.isMobile);
    });

    // Set up a ResizeObserver to track nav element width changes
    this.resizeObserver = new ResizeObserver(() => {
      if (this.state.dropDownIsOpen) {
        this.handleResizeDropdown();
      }
    });

    // Initialize the component
    this.init();
  }

  /**
   * Initializes the component by setting up all necessary functionality.
   * This includes rendering client-side content, caching DOM references,
   * binding event handlers, registering state handlers and starting the breakpoint observer .
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  init() {
    this.renderClientContent()
      .cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .registerStateHandlers()
      .startBreakpointObserver();

    return this;
  }

  /**
   * Starts the breakpoint observer.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  startBreakpointObserver() {
    this.breakpointObserver.start();
  }

  /**
   * Renders elements that are only needed on the client side.
   * This includes cloning and appending the dropdown template to the document body.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  renderClientContent() {
    const dropdownTemplate = this.element.querySelector(
      `#${this.prefix}--nav-dropdown__template`
    );
    // Clone the template content
    const dropdownContent = dropdownTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(dropdownContent);

    return this;
  }

  /**
   * Caches references to DOM elements that will be used throughout the component.
   * This includes the dropdown button and the dropdown container.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  cacheDomReferences() {
    this.dropdownButton = this.element.querySelector(
      `.${this.prefix}--nav-menu__more`
    );

    // Get a reference to the rendered dropdown (not the template)
    this.dropdown = document.body.querySelector(
      `.${this.prefix}--nav-dropdown`
    );

    return this;
  }

  /**
   * Binds all event handler methods to the component instance.
   * This ensures that 'this' context is preserved when handlers are called.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  bindHandlers() {
    this.handleBreakpointChange = this.handleBreakpointChange.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleResizeDropdown = this.handleResizeDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleFocusTrap = this.handleFocusTrap.bind(this);
    return this;
  }

  /**
   * Enables event listeners for the component's interactive elements.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  enableHandlers() {
    this.dropdownButton.addEventListener("click", this.handleDropdownClick);
    return this;
  }

  /**
   * Registers state change handlers for the component.
   * Currently handles the dropdown open/closed state changes.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  registerStateHandlers() {
    this.registerStateHandler("dropDownIsOpen", (value) => {
      if (value) {
        this.handleOpenDropdown();
      } else {
        this.handleCloseDropdown();
      }
    });

    this.registerStateHandler("isDesktop", this.handleBreakpointChange);

    return this;
  }

  /**
   * Handles the breakpoint change event.
   * Closes the dropdown if the breakpoint is "md", "sm", or "xs".
   *
   * @param {boolean} isDesktop - Whether the current breakpoint is desktop
   */
  handleBreakpointChange(isDesktop) {
    if (!isDesktop) {
      this.state.dropDownIsOpen = false;
    }
  }

  /**
   * Handles the opening of the dropdown menu.
   * Sets up necessary event listeners and applies appropriate classes.
   */
  handleOpenDropdown() {
    // Resize the dropdown
    this.handleResizeDropdown();

    // Start observing the nav element for width changes
    this.resizeObserver.observe(this.element);

    // Add an event listener to the window to close the dropdown when the user clicks outside of it
    window.addEventListener("click", this.handleOutsideClick);

    // Add open class to the dropdown
    this.dropdown?.classList.add(`${this.prefix}--nav-dropdown--open`);

    // Add open class to the dropdown button
    this.dropdownButton?.classList.add(`${this.prefix}--nav-menu__more--open`);

    this.handleTabNavigation();
  }

  /**
   * Handles the closing of the dropdown menu.
   * Removes event listeners and appropriate classes.
   */
  handleCloseDropdown() {
    // Remove open class from the dropdown
    this.dropdown?.classList.remove(`${this.prefix}--nav-dropdown--open`);

    // Remove open class from the dropdown button
    this.dropdownButton?.classList.remove(
      `${this.prefix}--nav-menu__more--open`
    );

    // Stop observing the nav element
    this.resizeObserver.disconnect();

    // Remove event listener from the window
    window.removeEventListener("click", this.handleOutsideClick);
  }

  /**
   * Adjusts the dropdown's position and size based on the parent element.
   * Ensures the dropdown aligns properly with its parent navigation element.
   */
  handleResizeDropdown() {
    this.dropdown.style.width = `${this.element.offsetWidth}px`;
    this.dropdown.style.top = `${this.element.offsetHeight}px`;
  }

  /**
   * Toggles the dropdown's open/closed state when the dropdown button is clicked.
   */
  handleDropdownClick() {
    this.state.dropDownIsOpen = !this.state.dropDownIsOpen;
  }

  /**
   * Handles clicks outside of the dropdown and its parent element.
   * Closes the dropdown if a click occurs outside of both elements.
   *
   * @param {MouseEvent} event - The click event object
   */
  handleOutsideClick(event) {
    if (
      this.state.dropDownIsOpen &&
      !this.element?.contains(event.target) &&
      !this.dropdown?.contains(event.target)
    ) {
      this.state.dropDownIsOpen = false;
    }
  }

  /**
   * Manages keyboard navigation within the dropdown.
   * Implements focus trapping and keyboard shortcuts for accessibility.
   *
   * @param {KeyboardEvent} event - The keyboard event object
   */
  handleFocusTrap(event) {
    createFocusTrap(event, this.dropdown.querySelectorAll("a"), () => {
      this.state.dropDownIsOpen = false;
      this.dropdownButton.focus();
    });
  }

  /**
   * Sets up keyboard navigation for the dropdown.
   * Focuses the dropdown and adds keyboard event listeners.
   */
  handleTabNavigation() {
    setTimeout(() => {
      this.dropdown.focus();
      this.dropdown.addEventListener("keydown", this.handleFocusTrap);
    }, 100);
  }
}
