import { StatefulComponent, createBreakpointObserver } from "../../../utils";

/**
 * A component that manages mobile navigation functionality including drawers and interactions.
 * This component handles:
 * - Main mobile navigation drawer
 * - Language selection drawer
 * - Additional menu options drawer
 * - State management for all drawers
 * - Event handling for navigation interactions
 *
 * @extends StatefulComponent
 */
export default class MobileNav extends StatefulComponent {
  /**
   * Creates a new MobileNav component instance.
   * Initializes the component with its initial state and sets up necessary properties.
   *
   * @param {HTMLElement} element - The root element of the mobile navigation component
   */
  constructor(element) {
    // Initial state
    const initialState = {
      isMobile: false,
      mobDrawerIsOpen: false,
      languagesMobDrawerIsOpen: false,
      moreMobDrawerIsOpen: false,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix for class names
    this.prefix = this.element.dataset.prefix;

    // References to elements that get rendered dynamically on the client
    this.mobileDrawer = null;
    this.mobileDrawerClose = null;
    this.languagesMobileDrawer = null;
    this.languagesMobileDrawerClose = null;
    this.mobileLanguageButton = null;
    this.burger = null;

    // Set up a breakpoint observer to track viewport size changes
    this.breakpointObserver = createBreakpointObserver((breakpoint) => {
      this.state.isMobile = !["xl", "xxl"].includes(breakpoint);
    });

    // Initialize the component
    this.init();
  }

  /**
   * Initializes the component by setting up all necessary functionality.
   * This includes rendering client-side content, caching DOM references,
   * binding event handlers, and registering state handlers.
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  init = () => {
    this.renderClientContent()
      .cacheDomReferences()
      .enableHandlers()
      .registerStateHandlers()
      .startBreakpointObserver();

    return this;
  };

  /**
   * Starts the breakpoint observer.
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  startBreakpointObserver = () => {
    this.breakpointObserver.start();
    return this;
  };

  /**
   * Renders elements that are only needed on the client side.
   * This includes cloning and appending mobile drawer templates to the document body.
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  renderClientContent = () => {
    // Get all mobile drawer templates in the order they appear in the DOM
    const mobileDrawerTemplates = [
      `${this.prefix}--nav-mobile-drawer__template__main`,
      `${this.prefix}--nav-mobile-drawer__template__languages`,
      `${this.prefix}--nav-mobile-drawer__template__more`,
    ];

    // Append each template's content to the body in order
    mobileDrawerTemplates.forEach((templateId) => {
      const template = this.element.querySelector(`#${templateId}`);
      if (template) {
        const content = template.content.cloneNode(true);
        document.body.appendChild(content);
      }
    });

    return this;
  };

  /**
   * Caches references to DOM elements that will be used throughout the component.
   * This includes all drawer elements, buttons, and interactive elements.
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  cacheDomReferences = () => {
    // Find any element with a class that ends with __nav-burger
    // This is necessary because the burger has different classes
    // for the compact and complex themes
    this.burger = this.element.querySelector(`[class$="burger"]`);

    // Get a reference to the rendered mobile drawer (not the template)
    this.mobileDrawer = document.body.querySelector(
      `#${this.prefix}--nav-mobile-drawer__main`
    );

    // Get a reference to the rendered mobile drawer menu home button once it gets rendered
    this.menuHomeButtons = document.body.querySelectorAll(
      `.${this.prefix}--nav-mobile__nested__header`
    );

    // Get a reference to all of the close buttons
    this.mobileDrawerCloseButtons = document.body.querySelectorAll(
      `.${this.prefix}--nav-mobile-drawer__header-close`
    );

    // Get a reference to the rendered mobile language button once it gets rendered
    this.mobileLanguageButton = this.mobileDrawer.querySelector(
      `.${this.prefix}--nav-mobile__widgets-language`
    );

    // Get a reference to the rendered mobile drawer (not the template)
    this.languagesMobileDrawer = document.body.querySelector(
      `#${this.prefix}--nav-mobile-drawer__languages`
    );

    // Get a reference to the rendered mobile drawer more (not the template)
    this.moreMobileDrawer = document.body.querySelector(
      `#${this.prefix}--nav-mobile-drawer__more`
    );

    // Get a reference to the rendered mobile drawer more button once it gets rendered
    this.mobileMoreButton = this.mobileDrawer.querySelector(
      `.${this.prefix}--nav-mobile__more`
    );

    return this;
  };

  /**
   * Enables event listeners for the component's interactive elements.
   * This includes all buttons and interactive elements in the mobile navigation.
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  enableHandlers = () => {
    // Add click handler for burger menu toggle
    this.burger.addEventListener("click", this.handleBurgerClick);

    // Add click handler for language selector
    if (this.mobileLanguageButton) {
      this.mobileLanguageButton.addEventListener(
        "click",
        this.handleLanguageButtonClick
      );
    }

    if (this.mobileMoreButton) {
      // Add click handler for more menu button
      this.mobileMoreButton.addEventListener(
        "click",
        this.handleMoreButtonClick
      );
    }

    // Add click handlers for all close buttons
    this.mobileDrawerCloseButtons.forEach((button) => {
      button.addEventListener("click", this.handleMobileDrawerClose);
    });

    // Add click handlers for menu home buttons
    this.menuHomeButtons.forEach((button) => {
      button.addEventListener("click", this.handleMenuHomeButtonClick);
    });

    return this;
  };

  /**
   * Registers state change handlers for the component.
   * Handles state changes for all mobile drawers (main, languages, and more).
   *
   * @returns {MobileNav} Returns the instance for method chaining
   */
  registerStateHandlers = () => {
    this.registerStateHandler("mobDrawerIsOpen", (value) => {
      if (value) {
        this.handleOpenMobileDrawer();
      } else {
        this.handleCloseMobileDrawer();
      }
    });

    this.registerStateHandler("languagesMobDrawerIsOpen", (value) => {
      if (value) {
        this.handleOpenLanguagesMobileDrawer();
      } else {
        this.handleCloseLanguagesMobileDrawer();
      }
    });

    this.registerStateHandler("moreMobDrawerIsOpen", (value) => {
      if (value) {
        this.handleOpenMoreMobileDrawer();
      } else {
        this.handleCloseMoreMobileDrawer();
      }
    });

    this.registerStateHandler("isMobile", this.handleBreakpointChange);

    return this;
  };

  /**
   * Handles the burger menu click event.
   * Opens the main mobile drawer when the burger menu is clicked.
   */
  handleBurgerClick = () => {
    this.burger.setAttribute("aria-expanded", "true");
    this.state.mobDrawerIsOpen = true;
  };

  /**
   * Handles the language button click event.
   * Opens the languages mobile drawer when the language button is clicked.
   */
  handleLanguageButtonClick = () => {
    this.state.languagesMobDrawerIsOpen = true;
  };

  /**
   * Handles the more button click event.
   * Opens the more options mobile drawer when the more button is clicked.
   */
  handleMoreButtonClick = () => {
    this.state.moreMobDrawerIsOpen = true;
  };

  /**
   * Handles the menu home button click event.
   * Closes the languages and more drawers when returning to the main menu.
   */
  handleMenuHomeButtonClick = () => {
    this.state.languagesMobDrawerIsOpen = false;
    this.state.moreMobDrawerIsOpen = false;
  };

  /**
   * Handles the mobile drawer close button click event.
   * Closes all mobile drawers when the close button is clicked.
   */
  handleMobileDrawerClose = () => {
    this.state.mobDrawerIsOpen = false;
    this.state.languagesMobDrawerIsOpen = false;
    this.state.moreMobDrawerIsOpen = false;
  };

  /**
   * Handles opening the main mobile drawer.
   * Adds the appropriate class to show the drawer.
   */
  handleOpenMobileDrawer = () => {
    this.mobileDrawer.inert = false;
    this.mobileDrawer?.classList.add(`${this.prefix}--nav-mobile-drawer--open`);
  };

  /**
   * Handles closing the main mobile drawer.
   * Removes the appropriate class to hide the drawer.
   */
  handleCloseMobileDrawer = () => {
    this.mobileDrawer.inert = true;
    this.mobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
    this.burger.setAttribute("aria-expanded", "false");
  };

  /**
   * Handles opening the languages mobile drawer.
   * Adds the appropriate class to show the languages drawer.
   */
  handleOpenLanguagesMobileDrawer = () => {
    this.languagesMobileDrawer.inert = false;
    this.mobileDrawer.inert = true;
    this.mobileLanguageButton.setAttribute("aria-expanded", "true");
    this.languagesMobileDrawer.classList.add(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  };

  /**
   * Handles closing the languages mobile drawer.
   * Removes the appropriate class to hide the languages drawer.
   */
  handleCloseLanguagesMobileDrawer = () => {
    this.languagesMobileDrawer.inert = true;
    this.mobileDrawer.inert = false;
    this.mobileLanguageButton.setAttribute("aria-expanded", "false");
    this.languagesMobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  };

  /**
   * Handles opening the more options mobile drawer.
   * Adds the appropriate class to show the more options drawer.
   */
  handleOpenMoreMobileDrawer = () => {
    this.moreMobileDrawer.inert = false;
    this.mobileDrawer.inert = true;
    this.mobileMoreButton.setAttribute("aria-expanded", "true");
    this.moreMobileDrawer.classList.add(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  };

  /**
   * Handles closing the more options mobile drawer.
   * Removes the appropriate class to hide the more options drawer.
   */
  handleCloseMoreMobileDrawer = () => {
    this.moreMobileDrawer.inert = true;
    this.mobileDrawer.inert = false;
    this.mobileMoreButton.setAttribute("aria-expanded", "false");
    this.moreMobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  };

  /**
   * Handles the breakpoint change event.
   * Closes all mobile drawers when the breakpoint is "xl" or "xxl".
   *
   * @param {string} breakpoint - The current breakpoint
   */
  handleBreakpointChange = (isMobile) => {
    if (!isMobile) {
      this.state.mobDrawerIsOpen = false;
      this.state.languagesMobDrawerIsOpen = false;
      this.state.moreMobDrawerIsOpen = false;
    }
  };
}
