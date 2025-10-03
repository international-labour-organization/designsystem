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
      searchIsOpen: false,
      isDesktop: true,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // References to elements that get rendered dynamically on the client
    this.dropdown = null;

    // References to element that is rendered dynamically in `nav_main.twig`
    this.inputSearch = null;

    // Set up a breakpoint observer to track viewport size changes
    this.breakpointObserver = createBreakpointObserver((breakpoint) => {
      this.state.isDesktop = ["xl", "xxl"].includes(breakpoint);
    });

    // Set up a ResizeObserver to track nav element width changes
    this.resizeObserver = new ResizeObserver(() => {
      if (this.state.dropDownIsOpen) {
        this.handleResize(this.dropdown);
      }
    });

    this.resizeObserver = new ResizeObserver(() => {
      if (this.state.searchIsOpen) {
        this.handleResize(this.inputSearch);
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
  startBreakpointObserver = () => {
    this.breakpointObserver.start();
    return this;
  };

  /**
   * Renders elements that are only needed on the client side.
   * This includes cloning and appending the dropdown template to the document body.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  renderClientContent = () => {
    const items = [
      `#${this.prefix}--nav-dropdown__template`,
      `#${this.prefix}--nav-search__template`,
    ];

    for (const templateSelector of items) {
      const template = document.querySelector(templateSelector);

      if (template) {
        const content = template.content.cloneNode(true);
        document.body.appendChild(content);
      }
    }

    return this;
  };

  /**
   * Caches references to DOM elements that will be used throughout the component.
   * This includes the dropdown button and the dropdown container.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  cacheDomReferences = () => {
    this.dropdownButton = this.element.querySelector(
      `.${this.prefix}--nav-menu__more`
    );

    this.inputSearchButton = this.element.querySelector(
      `.${this.prefix}--main-nav__nav-search`
    );

    // Get a reference to the rendered dropdown (not the template)
    this.dropdown = document.body.querySelector(
      `.${this.prefix}__nav-extra-menu.${this.prefix}--nav-dropdown`
    );

    this.inputSearch = document.body.querySelector(
      `.${this.prefix}--main-nav__nav-extra-search.${this.prefix}--nav-dropdown`
    );

    return this;
  };

  /**
   * Enables event listeners for the component's interactive elements.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  enableHandlers = () => {
    if (this.dropdownButton) {
      this.dropdownButton.addEventListener("click", () => {
        this.state.dropDownIsOpen = !this.state.dropDownIsOpen;
      });
    }

    if (this.inputSearchButton) {
      this.inputSearchButton.addEventListener("click", () => {
        this.state.searchIsOpen = !this.state.searchIsOpen;
      });
    }
    return this;
  };

  /**
   * Registers state change handlers for the component.
   * Currently handles the dropdown open/closed state changes.
   *
   * @returns {Nav} Returns the instance for method chaining
   */
  registerStateHandlers = () => {
    this.registerStateHandler("dropDownIsOpen", (value) => {
      if (value) {
        this.handleOpen("dropdown");
      } else {
        this.handleClose("dropdown");
      }
    });

    this.registerStateHandler("searchIsOpen", (value) => {
      if (value) {
        this.handleOpen("search");
      } else {
        this.handleClose("search");
      }
    });

    this.registerStateHandler("isDesktop", this.handleBreakpointChange);

    return this;
  };

  /**
   * Handles the breakpoint change event.
   * Closes the dropdown if the breakpoint is "md", "sm", or "xs".
   *
   * @param {boolean} isDesktop - Whether the current breakpoint is desktop
   */
  handleBreakpointChange = (isDesktop) => {
    if (!isDesktop) {
      this.state.dropDownIsOpen = false;
      this.state.searchIsOpen = false;
    }
  };

  /**
   * Gets the configuration for a dropdown type.
   *
   * @param {string} type - The dropdown type ('dropdown' or 'search')
   * @returns {Object} Configuration object for the dropdown
   */
  getDropdownConfig = (type) => {
    const configs = {
      dropdown: {
        element: this.dropdown,
        button: this.dropdownButton,
        stateKey: "dropDownIsOpen",
        otherStateKey: "searchIsOpen",
      },
      search: {
        element: this.inputSearch,
        button: this.inputSearchButton,
        stateKey: "searchIsOpen",
        otherStateKey: "dropDownIsOpen",
      },
    };

    return configs[type];
  };

  /**
   * General method to handle opening any dropdown.
   * Sets up necessary event listeners and applies appropriate classes.
   *
   * @param {string} type - The dropdown type ('dropdown' or 'search')
   */
  handleOpen = (type) => {
    const config = this.getDropdownConfig(type);

    if (!config.element || !config.button) return;

    // Close the other dropdown
    this.state[config.otherStateKey] = false;

    // Resize the dropdown
    this.handleResize(config.element);

    // Start observing the nav element for width changes
    this.resizeObserver.observe(this.element);

    // Add an event listener to the window to close the dropdown when the user clicks outside of it
    window.addEventListener("click", this.handleOutsideClick);

    // Add open class to the dropdown
    config.element.classList.add(`${this.prefix}--nav-dropdown--open`);

    // Add aria-expanded="true" to the button
    config.button.setAttribute("aria-expanded", "true");

    this.handleTabNavigation(config.element);
  };

  /**
   * General method to handle closing any dropdown.
   * Removes event listeners and appropriate classes.
   *
   * @param {string} type - The dropdown type ('dropdown' or 'search')
   */
  handleClose = (type) => {
    const config = this.getDropdownConfig(type);

    if (!config.element || !config.button) return;

    // Remove open class from the dropdown
    config.element.classList.remove(`${this.prefix}--nav-dropdown--open`);

    // Remove aria-expanded="true" from the button
    config.button.setAttribute("aria-expanded", "false");

    // Only disconnect observer and remove listener if no dropdown is open
    if (!this.state.dropDownIsOpen && !this.state.searchIsOpen) {
      this.resizeObserver.disconnect();
      window.removeEventListener("click", this.handleOutsideClick);
    }
  };

  /**
   * Resizes the given element to match the dimensions of the nav element.
   * @param {HTMLElement} element - The element to resize
   */
  handleResize = (element) => {
    element.style.width = `${this.element.offsetWidth}px`;
    element.style.left = `${this.element.getBoundingClientRect().left}px`;
    element.style.top = `${this.element.getBoundingClientRect().bottom}px`;
  };

  /**
   * Handles clicks outside of the dropdown and its parent element.
   * Closes the dropdown if a click occurs outside of both elements.
   *
   * @param {MouseEvent} event - The click event object
   */
  handleOutsideClick = (event) => {
    if (
      this.state.dropDownIsOpen &&
      !this.element?.contains(event.target) &&
      !this.dropdown?.contains(event.target)
    ) {
      this.state.dropDownIsOpen = false;
    }

    if (
      this.state.searchIsOpen &&
      !this.element?.contains(event.target) &&
      !this.inputSearch?.contains(event.target)
    ) {
      this.state.searchIsOpen = false;
    }
  };

  /**
   * Manages keyboard navigation within the dropdown.
   * Implements focus trapping and keyboard shortcuts for accessibility.
   *
   * @param {KeyboardEvent} event - The keyboard event object
   */
  handleFocusTrap = (event) => {
    createFocusTrap(event, this.dropdown.querySelectorAll("a"), () => {
      this.state.dropDownIsOpen = false;
      this.dropdownButton.focus();
    });
  };

  /**
   * Sets up keyboard navigation for the dropdown.
   * Focuses the dropdown and adds keyboard event listeners.
   */
  handleTabNavigation = () => {
    setTimeout(() => {
      this.dropdown.focus();
      this.dropdown.addEventListener("keydown", this.handleFocusTrap);
    }, 100);
  };
}
