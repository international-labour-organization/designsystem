/**
 * A base class that provides state management functionality for components.
 * It creates a reactive state system that automatically dispatches events when state changes.
 *
 * This class is useful when you need to:
 * - Track component state changes
 * - React to state updates via event listeners
 * - Share state management logic across multiple components
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
    this.state = this.setupState(this.initialState);

    this.#init();
  }

  /**
   * Initializes the component by binding necessary methods
   *
   * @private
   */
  #init() {
    this.setupState = this.setupState.bind(this);
  }

  /**
   * Creates a Proxy-based reactive state system that dispatches events on state changes
   *
   * @private
   * @param {Object} initialState - The initial state to proxy
   * @returns {Proxy} A proxy object that will dispatch events when properties are changed
   */
  setupState(initialState = {}) {
    return new Proxy(initialState, {
      set: (target, prop, value) => {
        if (value !== target[prop]) {
          target[prop] = value;
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
