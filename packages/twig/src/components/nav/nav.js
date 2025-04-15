export default class Nav {
  constructor(element) {
    this.element = element;
    this.prefix = this.element.dataset.prefix;

    // This is a boolean to check if the dropdown is open
    this.isOpen = false;

    // This is a reference to the dropdown template that has the content
    this.dropdownContent = null;

    // This is a reference to the actual dropdown once it gets rendered
    this.dropdown = null;

    this.init();
  }

  init() {
    this.cacheDomReferences().setupHandlers().enable();
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

  setupHandlers() {
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    return this;
  }

  enable() {
    this.dropdownButton?.addEventListener("click", this.handleDropdownClick);
    return this;
  }

  handleDropdownClick() {
    if (!this.isOpen) {
      // Clone the template content
      this.dropdownContent = this.dropdownTemplate.content.cloneNode(true);

      // Append template content to the body
      document.body.appendChild(this.dropdownContent);

      // Get a reference to the rendered dropdown (not the template)
      this.dropdown = document.body.querySelector(
        `.${this.prefix}--nav-dropdown`
      );

      // Set the width of the dropdown to be the width of the nav
      this.dropdown.style.width = `${this.element.offsetWidth}px`;

      // Set the top of the dropdown to be the bottom of the element
      this.dropdown.style.top = `${this.element.offsetHeight}px`;

      // Add open class to the dropdown
      this.dropdown?.classList.add(`${this.prefix}--nav-dropdown--open`);

      // Add open class to the dropdown button
      this.dropdownButton?.classList.add(
        `${this.prefix}--nav-menu__more--open`
      );

      // Set isOpen to true
      this.isOpen = true;
    } else {
      // Remove open class from the dropdown
      this.dropdown?.classList.remove(`${this.prefix}--nav-dropdown--open`);

      // Remove open class from the dropdown button
      this.dropdownButton?.classList.remove(
        `${this.prefix}--nav-menu__more--open`
      );

      setTimeout(() => {
        // Remove content from body
        this.dropdown?.remove();
        this.dropdownContent = null;
        // Set isOpen to false
        this.isOpen = false;
      }, 250);
    }
  }
}
