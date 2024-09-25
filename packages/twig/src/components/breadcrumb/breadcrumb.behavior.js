import Breadcrumb from "./breadcrumb";

Drupal.behaviors.breadcrumb = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Breadcrumb"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Breadcrumb(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
