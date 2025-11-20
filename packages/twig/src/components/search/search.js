import { StatefulComponent } from "../../utils";

/**
 * Search component that manages the clear button visibility/state for search input fields.
 *
 * @class Search
 * @extends StatefulComponent
 */
export default class Search extends StatefulComponent {
  /**
   * @param {HTMLElement} element Root element of the search component
   */
  constructor(element) {
    const initialState = {
      inputValue: "",
    };

    super(element, initialState);
    this.init();
  }

  /**
   * Initializes the component by caching references, binding handlers,
   * registering state listeners, wiring events, and syncing initial state.
   *
   * @returns {Search}
   */
  init() {
    return this.cacheDomReferences()
      .bindHandlers()
      .registerStateHandlers()
      .enable()
      .syncInitialState();
  }

  /**
   * Cache DOM references needed for interaction.
   *
   * @returns {Search}
   */
  cacheDomReferences = () => {
    this.clearButton = this.element.querySelector(
      ".ilo--searchfield--clear-button"
    );
    this.inputField = this.element.querySelector(".ilo--input");
    return this;
  };

  /**
   * Bind class methods to preserve context.
   *
   * @returns {Search}
   */
  bindHandlers = () => {
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    return this;
  };

  /**
   * Register listeners for state changes.
   *
   * @returns {Search}
   */
  registerStateHandlers = () => {
    this.registerStateHandler("inputValue", this.handleInputValueChange);
    return this;
  };

  /**
   * Attach DOM listeners.
   *
   * @returns {Search}
   */
  enable = () => {
    if (this.clearButton) {
      this.clearButton.addEventListener("click", this.handleClearClick);
    }

    if (this.inputField) {
      this.inputField.addEventListener("keyup", this.handleInputKeyUp);
    }

    return this;
  };

  /**
   * Sync the state with any pre-filled input value (e.g., from server-side rendering).
   *
   * @returns {Search}
   */
  syncInitialState = () => {
    if (this.inputField) {
      this.state.inputValue = this.inputField.value.trim();
    }
    return this;
  };

  /**
   * Handle click on the clear button by resetting the input.
   */
  handleClearClick() {
    if (!this.inputField) return;
    this.state.inputValue = "";
    this.inputField.focus();
  }

  /**
   * Handle keyup events to maintain the latest input value.
   *
   * @param {KeyboardEvent} event
   */
  handleInputKeyUp(event) {
    this.state.inputValue = event.target.value;
  }

  /**
   * Keep the input element and clear button visibility synced with state changes.
   *
   * @param {string} value
   */
  handleInputValueChange = (value = "") => {
    this.toggleClearButton(value);
    this.updateInputField(value);
  };

  /**
   * Update the DOM input value if needed.
   *
   * @param {string} value
   */
  updateInputField = (value = "") => {
    if (!this.inputField || this.inputField.value === value) return;
    this.inputField.value = value;
  };

  /**
   * Toggle the visibility of the clear button.
   *
   * @param {string} value Current value of the search input
   */
  toggleClearButton(value) {
    if (!this.clearButton) return;
    if (value?.trim()) {
      this.clearButton.classList.add("show");
    } else {
      this.clearButton.classList.remove("show");
    }
  }
}
