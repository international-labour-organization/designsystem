import StatefulComponent from "../../utils/statefulComponent";

/**
 * Class representing a language toggle component.
 * This class manages a language selection dropdown with accessibility and event handling.
 */
export default class LanguageToggle extends StatefulComponent {
  constructor(element) {
    const initialState = {
      contextMenuIsOpen: false,
    };
    super(element, initialState);

    this.prefix = `${this.element.dataset.prefix}--language-toggle`;

    this.contextMenuTemplate = null;

    this.contextMenuContent = null;

    this.contextMenu = null;

    this.contextMenuVisibleClass = `${this.prefix}--context-menu__open`;

    this.init();
  }

  init() {
    this.cacheDomReferences()
      .bindHandlers()
      .enableHandlers()
      .handleStateChange();
    return this;
  }

  cacheDomReferences() {
    this.contextMenuTemplate = this.element.querySelector(
      `#${this.prefix}--context-menu--template`
    );
    this.contextButton = this.element.querySelector(
      `.${this.prefix}--container`
    );

    return this;
  }

  bindHandlers() {
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOpenContextMenu = this.handleOpenContextMenu.bind(this);
    this.handleCloseContextMenu = this.handleCloseContextMenu.bind(this);
    this.positionContextMenu = this.positionContextMenu.bind(this);
    this.onClick = this.onClick.bind(this);
    return this;
  }

  enableHandlers() {
    this.contextButton.addEventListener("click", this.onClick);
    return this;
  }

  handleStateChange() {
    this.element.addEventListener("stateChange", (event) => {
      const prop = event.detail.prop;
      const value = event.detail.value;

      if (prop === "contextMenuIsOpen") {
        if (value) {
          this.handleOpenContextMenu();
        } else {
          this.handleCloseContextMenu();
        }
      }
    });
    return this;
  }

  onClick(e) {
    e.stopPropagation();
    if (this.state.contextMenuIsOpen) {
      this.state.contextMenuIsOpen = false;
    } else {
      this.state.contextMenuIsOpen = true;
    }
    return this;
  }

  handleOpenContextMenu() {
    // Create a MutationObserver to watch for the context menu being added to the DOM
    const observer = new MutationObserver((mutations, obs) => {
      if (this.contextMenu && document.body.contains(this.contextMenu)) {
        this.handleTabNavigation();
        obs.disconnect(); // Stop observing once the menu is found
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

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

    return this;
  }

  handleCloseContextMenu() {
    this.contextMenu.classList.remove(this.contextMenuVisibleClass);
    this.contextMenu.remove();
    window.removeEventListener("click", this.handleOutsideClick);
    window.removeEventListener("resize", this.positionContextMenu);
  }

  positionContextMenu() {
    const containerRect = this.element.getBoundingClientRect();
    const contextMenuRect = this.contextMenu.getBoundingClientRect();
    this.contextMenu.style.left = `${containerRect.left + (containerRect.width - contextMenuRect.width) / 2}px`;
    this.contextMenu.style.top = `${containerRect.bottom}px`;
  }

  handleOutsideClick(event) {
    if (
      this.state.contextMenuIsOpen &&
      !this.element?.contains(event.target) &&
      !this.contextMenu?.contains(event.target)
    ) {
      this.state.contextMenuIsOpen = false;
    }
  }

  handleTabNavigation() {
    const focusableElements = Array.from(
      this.contextMenu.querySelectorAll("a")
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    // Handle keyboard navigation within the context menu
    this.element.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.state.contextMenuIsOpen = false;
      }

      // If focus is outside the menu, move it to first element
      if (!focusableElements.includes(document.activeElement)) {
        console.log("outside");
        event.preventDefault();
        firstFocusableElement.focus();
        return;
      }

      // Shift+Tab on first element -> focus last element
      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        console.log("shift tab");
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      // Tab on last element -> focus first element
      if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    });
  }
}
