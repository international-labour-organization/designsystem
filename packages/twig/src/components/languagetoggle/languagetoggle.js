import StatefulComponent from "../../utils/statefulComponent";

export default class LanguageToggle extends StatefulComponent {
  constructor(element) {
    // Initialize state for our component
    const initialState = {
      contextMenuIsOpen: false,
    };

    // Initial state must be passed to the constructor for the StatefulComponent to work
    super(element, initialState);

    this.prefix = `${this.element.dataset.prefix}--language-toggle`;
    this.contextMenuVisibleClass = `${this.prefix}--context-menu__open`;

    // Placeholders for DOM references for elements that haven't been added to the DOM yet
    this.contextMenuTemplate = null;
    this.contextMenuContent = null;
    this.contextMenu = null;

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
    this.contextMenuTemplate = this.element.querySelector(
      `#${this.prefix}--context-menu--template`
    );
    this.contextButton = this.element.querySelector(
      `.${this.prefix}--container`
    );

    return this;
  }

  bindHandlers() {
    this.handleFocusTrap = this.handleFocusTrap.bind(this);
    this.registerStateHandlers = this.registerStateHandlers.bind(this);
    this.handleTabNavigation = this.handleTabNavigation.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOpenContextMenu = this.handleOpenContextMenu.bind(this);
    this.handleCloseContextMenu = this.handleCloseContextMenu.bind(this);
    this.positionContextMenu = this.positionContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    return this;
  }

  registerStateHandlers() {
    this.registerStateHandler("contextMenuIsOpen", (value) => {
      if (value) {
        this.handleOpenContextMenu();
      } else {
        this.handleCloseContextMenu();
      }
    });
    return this;
  }

  enableHandlers() {
    this.contextButton.addEventListener("click", this.handleClick);
    return this;
  }

  handleClick(e) {
    e.stopPropagation();
    this.state.contextMenuIsOpen = !this.state.contextMenuIsOpen;
    return this;
  }

  handleOpenContextMenu() {
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

    this.handleTabNavigation();

    return this;
  }

  handleCloseContextMenu() {
    this.contextMenu.classList.remove(this.contextMenuVisibleClass);
    this.contextMenu.remove();
    this.contextMenu.removeEventListener("keydown", this.handleFocusTrap);
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

  handleFocusTrap(event) {
    // Get all focusable elements in the context menu
    const focusableElements = Array.from(
      this.contextMenu.querySelectorAll("a")
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    if (event.key === "Escape") {
      this.state.contextMenuIsOpen = false;
      this.contextButton.focus();
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
    // Browser hack to make sure that the context menu is in the DOM
    // and done transitioning before we try to focus it
    setTimeout(() => {
      this.contextMenu.focus();
      this.contextMenu.addEventListener("keydown", this.handleFocusTrap);
    }, 100);
  }
}
