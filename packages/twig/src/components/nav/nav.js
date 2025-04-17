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
    };

    // Initialize the component
    super(element, initialState);

    // Prefix
    this.prefix = this.element.dataset.prefix;

    // This is a reference to the dropdown template that has the content
    this.dropdownContent = null;

    // This is a reference to the actual dropdown once it gets rendered
    this.dropdown = null;

    // Initialize the component
    this.init();
  }

  init() {
    this.cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .registerStateHandlers();
    return this;
  }

  cacheDomReferences() {
    this.dropdownButton = this.element.querySelector(
      `.${this.prefix}--nav-menu__more`
    );
    this.dropdownTemplate = this.element.querySelector(
      `#${this.prefix}--nav-dropdown__template`
    );
    this.dropdownContainer = this.element.querySelector(
      `.${this.prefix}--nav-dropdown`
    );
    return this;
  }

  bindHandlers() {
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleFocusTrap = this.handleFocusTrap.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleResizeDropdown = this.handleResizeDropdown.bind(this);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    return this;
  }

  enableHandlers() {
    this.dropdownButton?.addEventListener("click", this.handleDropdownClick);
    this.element.addEventListener("keydown", this.handleEscapeKey);
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
    return this;
  }

  handleOpenDropdown() {
    // Clone the template content
    this.dropdownContent = this.dropdownTemplate.content.cloneNode(true);

    // Append template content to the body
    document.body.appendChild(this.dropdownContent);

    // Get a reference to the rendered dropdown (not the template)
    this.dropdown = document.body.querySelector(
      `.${this.prefix}--nav-dropdown`
    );

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

    setTimeout(() => {
      // Remove content from body
      this.dropdown?.remove();
      this.dropdownContent = null;
    }, 250);
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

  handleEscapeKey(event) {
    if (!this.state.dropDownIsOpen) return;
    if (event.key === "Escape") {
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
}
