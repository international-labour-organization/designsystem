/**
 * A class which helps sending messages accoss modules via a DOM node
 */
export class MessageBus {
  /**
   * sendEvent
   *
   * A function which lets you dispatch a custom event on
   * a Node. If the element is passed, it uses the element
   * available on the current `this` context.
   *
   * @param {String} eventName Name of the custom event that is being triggered
   * @param {Object} options Object which should be passed in the message
   * @param {Object} element DOM node which the event should be attached to
   */
  sendEvent(eventName, options, element) {
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(eventName, false, false, options);
    (element || this.element).dispatchEvent(evt);
  }
}
