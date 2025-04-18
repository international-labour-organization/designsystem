import StatefulComponent from "../../utils/statefulComponent";

/**
 * A component that manages a dropdown menu for navigation purposes.
 *
 * @extends StatefulComponent
 */
export default class Nav extends StatefulComponent {
  constructor(element) {
    // Initial state
    const initialState = {
      dropDownIsOpen: false,
      mobileDrawerIsOpen: false,
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // This is a reference to the actual dropdown once it gets rendered
    this.dropdown = null;

    // This is a reference to the actual mobile drawer once it gets rendered
    this.mobileDrawer = null;

    // Initialize the component
    this.init();
  }

  init() {
    this.cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .registerStateHandlers()
      .renderTemplates();
    return this;
  }

  cacheDomReferences() {
    this.dropdownButton = this.element.querySelector(
      `.${this.prefix}--nav-menu__more`
    );
    this.dropdownTemplate = this.element.querySelector(
      `#${this.prefix}--nav-dropdown__template`
    );
    this.burger = this.element.querySelector(
      `.${this.prefix}--subsite-nav-complex__nav-burger`
    );
    this.mobileDrawerTemplate = this.element.querySelector(
      `#${this.prefix}--nav-mobile-drawer__template`
    );
    return this;
  }

  bindHandlers() {
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleOpenMobileDrawer = this.handleOpenMobileDrawer.bind(this);
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleFocusTrap = this.handleFocusTrap.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleResizeDropdown = this.handleResizeDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    return this;
  }

  enableHandlers() {
    this.dropdownButton.addEventListener("click", this.handleDropdownClick);
    this.burger.addEventListener("click", this.handleBurgerClick);
    return this;
  }

  registerStateHandlers() {
    this.registerStateHandler("dropDownIsOpen", (value) => {
      if (value) {
        this.handleOpenDropdown();
      } else {
        this.handleCloseDropdown();
      }
    });

    this.registerStateHandler("mobileDrawerIsOpen", (value) => {
      if (value) {
        this.handleOpenMobileDrawer();
      }
    });
    return this;
  }

  renderTemplates() {
    // Clone the template content
    const dropdownContent = this.dropdownTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(dropdownContent);

    // Get a reference to the rendered dropdown (not the template)
    this.dropdown = document.body.querySelector(
      `.${this.prefix}--nav-dropdown`
    );

    // Clone the template content
    this.mobileDrawerContent =
      this.mobileDrawerTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(this.mobileDrawerContent);

    // Get a reference to the rendered mobile drawer (not the template)
    this.mobileDrawer = document.body.querySelector(
      `.${this.prefix}--nav-mobile-drawer`
    );
  }

  handleOpenDropdown() {
    // Resize the dropdown
    this.handleResizeDropdown();

    // Add an event listener to the window to resize the dropdown when the window is resized
    window.addEventListener("resize", this.handleResizeDropdown);

    // Add an event listener to the window to close the dropdown when the user clicks outside of it
    window.addEventListener("click", this.handleOutsideClick);

    // Add open class to the dropdown
    this.dropdown?.classList.add(`${this.prefix}--nav-dropdown--open`);

    // Add open class to the dropdown button
    this.dropdownButton?.classList.add(`${this.prefix}--nav-menu__more--open`);

    this.handleTabNavigation();
  }

  handleCloseDropdown() {
    // Remove open class from the dropdown
    this.dropdown?.classList.remove(`${this.prefix}--nav-dropdown--open`);

    // Remove open class from the dropdown button
    this.dropdownButton?.classList.remove(
      `${this.prefix}--nav-menu__more--open`
    );

    // Remove event listener from the window
    window.removeEventListener("resize", this.handleResizeDropdown);

    // Remove event listener from the window
    window.removeEventListener("click", this.handleOutsideClick);
  }

  handleResizeDropdown() {
    this.dropdown.style.width = `${this.element.offsetWidth}px`;
    this.dropdown.style.top = `${this.element.offsetHeight}px`;
  }

  handleDropdownClick() {
    this.state.dropDownIsOpen = !this.state.dropDownIsOpen;
  }

  handleOutsideClick(event) {
    if (
      this.state.dropDownIsOpen &&
      !this.element?.contains(event.target) &&
      !this.dropdown?.contains(event.target)
    ) {
      this.state.dropDownIsOpen = false;
    }
  }

  handleFocusTrap(event) {
    const focusableElements = Array.from(this.dropdown.querySelectorAll("a"));
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    if (event.key === "Escape") {
      this.state.dropDownIsOpen = false;
      this.dropdownButton.focus();
    }

    if (event.key === "Tab") {
      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }
  }

  handleTabNavigation() {
    setTimeout(() => {
      this.dropdown.focus();
      this.dropdown.addEventListener("keydown", this.handleFocusTrap);
    }, 100);
  }

  handleBurgerClick() {
    this.state.mobileDrawerIsOpen = !this.state.mobileDrawerIsOpen;
  }

  handleOpenMobileDrawer() {
    this.mobileDrawer?.classList.add(`${this.prefix}--nav-mobile-drawer--open`);
  }
}
