import Callout from "./callout";

Drupal.behaviors.callout = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Callout"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Callout(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
