import StatefulComponent from "../../../utils/statefulComponent";

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
      secondaryMobDrawerIsOpen: false,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // References to elements that get rendered dynamically on the client
    this.mobileDrawer = null;
    this.mobileDrawerClose = null;
    this.secondaryMobileDrawer = null;
    this.secondaryMobileDrawerClose = null;
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
    const mobileDrawerPrimaryTemplate = this.element.querySelector(
      `#${this.prefix}--nav-mobile-drawer__template__primary`
    );

    // Clone the template content
    const mobileDrawerPrimaryContent =
      mobileDrawerPrimaryTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(mobileDrawerPrimaryContent);

    const mobileDrawerSecondaryTemplate = this.element.querySelector(
      `#${this.prefix}--nav-mobile-drawer__template__secondary`
    );

    // Clone the template content
    const mobileDrawerSecondaryContent =
      mobileDrawerSecondaryTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(mobileDrawerSecondaryContent);

    return this;
  }

  cacheDomReferences() {
    // Get a reference to the rendered burger (not the template)
    this.burger = this.element.querySelector(
      `.${this.prefix}--subsite-nav-complex__nav-burger`
    );

    // Get a reference to the rendered mobile drawer (not the template)
    this.mobileDrawer = document.body.querySelector(
      `#${this.prefix}--nav-mobile-drawer__primary`
    );

    // Get a reference to the rendered mobile language button once it gets rendered
    this.mobileLanguageButton = this.mobileDrawer.querySelector(
      `.${this.prefix}--nav-mobile__widgets-language`
    );

    // Get a reference to the rendered mobile drawer (not the template)
    this.secondaryMobileDrawer = document.body.querySelector(
      `#${this.prefix}--nav-mobile-drawer__secondary`
    );

    // Get a reference to the rendered mobile drawer close button once it gets rendered
    this.secondaryMobileDrawerClose = this.secondaryMobileDrawer.querySelector(
      `.${this.prefix}--nav-mobile-drawer__header-close`
    );

    // Get a reference to all of the close buttons
    this.mobileDrawerCloseButtons = document.body.querySelectorAll(
      `.${this.prefix}--nav-mobile-drawer__header-close`
    );

    return this;
  }

  bindHandlers() {
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.handleCloseSecondaryMobileDrawer =
      this.handleCloseSecondaryMobileDrawer.bind(this);
    this.handleOpenSecondaryMobileDrawer =
      this.handleOpenSecondaryMobileDrawer.bind(this);
    this.handleCloseMobileDrawer = this.handleCloseMobileDrawer.bind(this);
    this.handleMobileDrawerClose = this.handleMobileDrawerClose.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleOpenMobileDrawer = this.handleOpenMobileDrawer.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    return this;
  }

  enableHandlers() {
    this.burger.addEventListener("click", this.handleBurgerClick);
    this.mobileDrawerCloseButtons.forEach((button) => {
      button.addEventListener("click", this.handleMobileDrawerClose);
    });
    this.mobileLanguageButton.addEventListener(
      "click",
      this.handleLanguageButtonClick
    );
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

    this.registerStateHandler("secondaryMobDrawerIsOpen", (value) => {
      if (value) {
        this.handleOpenSecondaryMobileDrawer();
      } else {
        this.handleCloseSecondaryMobileDrawer();
      }
    });
    return this;
  }

  handleBurgerClick() {
    this.state.mobDrawerIsOpen = !this.state.mobDrawerIsOpen;
  }

  handleMobileDrawerClose() {
    this.state.mobDrawerIsOpen = false;
    this.state.secondaryMobDrawerIsOpen = false;
  }

  handleOpenMobileDrawer() {
    this.mobileDrawer?.classList.add(`${this.prefix}--nav-mobile-drawer--open`);
  }

  handleCloseMobileDrawer() {
    this.mobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleLanguageButtonClick() {
    this.state.secondaryMobDrawerIsOpen = true;
  }

  handleOpenSecondaryMobileDrawer() {
    this.secondaryMobileDrawer.classList.add(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }

  handleCloseSecondaryMobileDrawer() {
    this.secondaryMobileDrawer?.classList.remove(
      `${this.prefix}--nav-mobile-drawer--open`
    );
  }
}
