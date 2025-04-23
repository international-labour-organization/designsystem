import { StatefulComponent, createBreakpointObserver } from "../../../utils";

/**
 * A component that manages mobile navigation functionality including drawers and interactions.
 *
 * @extends StatefulComponent
 */
export default class MobileNav extends StatefulComponent {
  constructor(element) {
    // Initial state
    const initialState = {
      mobDrawerIsOpen: false,
      languagesMobDrawerIsOpen: false,
      moreMobDrawerIsOpen: false,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // References to elements that get rendered dynamically on the client
    this.mobileDrawer = null;
    this.mobileDrawerClose = null;
    this.languagesMobileDrawer = null;
    this.languagesMobileDrawerClose = null;
    this.mobileLanguageButton = null;
    this.burger = null;

    // Initialize the component
    this.init();
  }

  init() {
    this.renderClientContent()
      .cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .registerStateHandlers();

    return this;
  }

  // Render elements that only get rendered on the client
  renderClientContent() {
    // Get all mobile drawer templates in the order they appear in the DOM
    const mobileDrawerTemplates = [
      `${this.prefix}--nav-mobile-drawer__template__main`,
      `${this.prefix}--nav-mobile-drawer__template__languages`,
      `${this.prefix}--nav-mobile-drawer__template__more`,
    ];

    // Append each template's content to the body in order
    mobileDrawerTemplates.forEach((templateId) => {
      const template = this.element.querySelector(`#${templateId}`);
      const content = template.content.cloneNode(true);
      document.body.appendChild(content);
    });

    return this;
  }

  cacheDomReferences() {
    // Get a reference to the rendered burger (not the template)
    this.burger = this.element.querySelector(
      `.${this.prefix}--subsite-nav-complex__nav-burger`
    );

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
  }

  bindHandlers() {
    this.handleMenuHomeButtonClick = this.handleMenuHomeButtonClick.bind(this);
    this.handleMoreButtonClick = this.handleMoreButtonClick.bind(this);
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.handleCloseLanguagesMobileDrawer =
      this.handleCloseLanguagesMobileDrawer.bind(this);
    this.handleOpenLanguagesMobileDrawer =
      this.handleOpenLanguagesMobileDrawer.bind(this);
    this.handleCloseMobileDrawer = this.handleCloseMobileDrawer.bind(this);
    this.handleMobileDrawerClose = this.handleMobileDrawerClose.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleOpenMobileDrawer = this.handleOpenMobileDrawer.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    return this;
  }

  enableHandlers() {
    // Add click handler for burger menu toggle
    this.burger.addEventListener("click", this.handleBurgerClick);

    // Add click handler for language selector
    this.mobileLanguageButton.addEventListener(
      "click",
      this.handleLanguageButtonClick
    );

    // Add click handler for more menu button
    this.mobileMoreButton.addEventListener("click", this.handleMoreButtonClick);

    // Add click handlers for all close buttons
    this.mobileDrawerCloseButtons.forEach((button) => {
      button.addEventListener("click", this.handleMobileDrawerClose);
    });

    // Add click handlers for menu home buttons
    this.menuHomeButtons.forEach((button) => {
      button.addEventListener("click", this.handleMenuHomeButtonClick);
    });

    return this;
  }

  registerStateHandlers() {
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
    return this;
  }

  handleBurgerClick() {
    this.state.mobDrawerIsOpen = true;
  }

  handleLanguageButtonClick() {
    this.state.languagesMobDrawerIsOpen = true;
  }

  handleMoreButtonClick() {
    this.state.moreMobDrawerIsOpen = true;
  }

  handleMenuHomeButtonClick() {
    this.state.languagesMobDrawerIsOpen = false;
    this.state.moreMobDrawerIsOpen = false;
  }

  handleMobileDrawerClose() {
    this.state.mobDrawerIsOpen = false;
    this.state.languagesMobDrawerIsOpen = false;
    this.state.moreMobDrawerIsOpen = false;
  }

  handleOpenMobileDrawer() {
    this.mobileDrawer?.classList.add(`${this.prefix}--nav-mobile-drawer--open`);
  }

  handleCloseMobileDrawer() {
    this.mobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleOpenLanguagesMobileDrawer() {
    this.languagesMobileDrawer.classList.add(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleCloseLanguagesMobileDrawer() {
    this.languagesMobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleOpenMoreMobileDrawer() {
    this.moreMobileDrawer.classList.add(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleCloseMoreMobileDrawer() {
    this.moreMobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }
}
