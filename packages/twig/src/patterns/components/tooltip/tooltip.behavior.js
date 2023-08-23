import Tooltip from "./tooltip";

Drupal.behaviors.tooltip = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tooltip"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Tooltip(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
