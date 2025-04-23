/**
 * Creates a focus trap for a dropdown menu.
 *
 * @param {KeyboardEvent} event - The keyboard event object
 * @param {NodeList} focusableElements - The focusable elements within the dropdown
 * @param {Function} escapeCallBack - The callback function to handle the escape key
 * @param {Function} tabCallBack - The callback function to handle the tab key
 * @returns {void}
 */

export default function createFocusTrap(
  event,
  focusableElements,
  escapeCallBack = (event) => {},
  tabCallBack = (event) => {}
) {
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Escape") {
    escapeCallBack(event);
  }

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
        tabCallBack(event);
      }
    } else if (document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
      tabCallBack(event);
    }
  }
}
