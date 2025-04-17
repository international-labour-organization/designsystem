/**
 * A base class that provides state management functionality for components.
 * It creates a reactive state system that triggers handlers automatically when state changes.
 *
 * This class is useful when you need to:
 * - Track component state changes
 * - React to state updates via event listeners
 * - Share state management logic across multiple components
 * - Create reactive UI components that respond to state changes
 *
 * @example
 * // Example subclass implementation
 * class MyComponent extends StatefulComponent {
 *   constructor(element) {
 *     // Initialize state with default values
 *     const initialState = {
 *       isOpen: false,
 *       selectedItem: null,
 *       items: []
 *     };
 *
 *     // Call super with element and initial state
 *     super(element, initialState);
 *
 *     // Initialize component-specific properties
 *     this.prefix = 'my-component';
 *
 *     // Initialize the component
 *     this.init();
 *   }
 *
 *   init() {
 *     this.cacheDomReferences()
 *       .bindHandlers()
 *       .registerStateHandlers();
 *     return this;
 *   }
 *
 *   registerStateHandlers() {
 *     // Register handlers for state changes
 *     this.registerStateHandler('isOpen', (value) => {
 *       if (value) {
 *         this.open();
 *       } else {
 *         this.close();
 *       }
 *     });
 *
 *     this.registerStateHandler('selectedItem', (value) => {
 *       this.updateSelectedItem(value);
 *     });
 *
 *     return this;
 *   }
 *
 *   // Example method that updates state
 *   toggle() {
 *     this.state.isOpen = !this.state.isOpen;
 *   }
 * }
 *
 * @class StatefulComponent
 */
export default class StatefulComponent {
  /**
   * Creates a new StatefulComponent instance
   *
   * @param {HTMLElement} element - The DOM element this component is attached to
   * @param {Object} initialState - The initial state object for this component
   */
  constructor(element, initialState = {}) {
    this.element = element;
    this.initialState = initialState;
    this.state = this.#setupState(this.initialState);
    this.stateHandlers = new Map();

    this.#init();
  }

  /**
   * Initializes the component by binding necessary methods
   *
   * @private
   */
  #init() {
    this.setupState = this.#setupState.bind(this);
    this.registerStateHandler = this.registerStateHandler.bind(this);
  }

  /**
   * Registers a handler function to be called when a specific state property changes
   *
   * @param {string} prop - The state property to watch
   * @param {Function} handler - The function to call when the property changes
   * @param {any} handler.value - The new value of the state property
   * @param {string} handler.prop - The name of the state property that changed
   * @example
   * // Register a handler for a state property
   * this.registerStateHandler('isOpen', (value) => {
   *   if (value) {
   *     this.open();
   *   } else {
   *     this.close();
   *   }
   * });
   *
   * // Register a handler that uses both value and prop
   * this.registerStateHandler('items', (value, prop) => {
   *   console.log(`${prop} changed to:`, value);
   *   this.renderItems(value);
   * });
   */
  registerStateHandler(prop, handler) {
    if (!this.stateHandlers.has(prop)) {
      this.stateHandlers.set(prop, []);
    }
    this.stateHandlers.get(prop).push(handler);
  }

  /**
   * Creates a Proxy-based reactive state system that dispatches events on state changes
   *
   * @private
   * @param {Object} initialState - The initial state to proxy
   * @returns {Proxy} A proxy object that will dispatch events when properties are changed
   * @example
   * // The state object can be used like a normal object
   * this.state.isOpen = true;  // Triggers handlers and events
   * this.state.items.push(item);  // Also triggers handlers and events
   */
  #setupState(initialState = {}) {
    return new Proxy(initialState, {
      set: (target, prop, value) => {
        if (value !== target[prop]) {
          target[prop] = value;

          // Call registered handlers for this property
          const handlers = this.stateHandlers.get(prop);
          if (handlers) {
            handlers.forEach((handler) => handler(value, prop));
          }

          this.element.dispatchEvent(
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
}
