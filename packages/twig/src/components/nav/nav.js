export default class Nav {
  constructor(element) {
    this.element = element;
    this.prefix = this.element.dataset.prefix;

    // Initial state
    this.initialState = {
      dropDownIsOpen: false,
    };

    // State changes manage interactivity
    this.state = this.setupState(this.initialState);

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
      .handleStateChange();
  }

  setupState(initialState = {}) {
    return new Proxy(initialState, {
      set: (target, prop, value) => {
        if (value !== target[prop]) {
          target[prop] = value;
          this.element?.dispatchEvent(
            new CustomEvent("stateChange", {
              detail: {
                prop,
                value,
                state: this.state,
              },
            })
          );
          return true;
        }
      },
    });
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
    this.setupState = this.setupState.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
    this.handleResizeDropdown = this.handleResizeDropdown.bind(this);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    return this;
  }

  enableHandlers() {
    this.dropdownButton?.addEventListener("click", this.handleDropdownClick);
    this.element.addEventListener("keydown", this.handleEscapeKey);
    return this;
  }

  handleStateChange() {
    this.element.addEventListener("stateChange", (event) => {
      const prop = event.detail.prop;
      const value = event.detail.value;

      if (prop === "dropDownIsOpen") {
        if (value) {
          this.handleOpenDropdown();
        } else {
          this.handleCloseDropdown();
        }
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
      // Set isOpen to false
      this.dropdownIsOpen = false;
    }, 250);
  }

  handleResizeDropdown() {
    this.dropdown.style.width = `${this.element.offsetWidth}px`;
    this.dropdown.style.top = `${this.element.offsetHeight}px`;
  }

  handleDropdownClick() {
    if (!this.state.dropDownIsOpen) {
      this.state.dropDownIsOpen = true;
    } else {
      this.state.dropDownIsOpen = false;
    }
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
    if (event.key === "Escape") {
      this.state.dropDownIsOpen = false;
    }
  }
}
