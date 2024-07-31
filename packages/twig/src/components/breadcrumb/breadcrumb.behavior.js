import Breadcrumb from "./breadcrumb";

Drupal.behaviors.breadcrumb = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Breadcrumb"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Breadcrumb(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
