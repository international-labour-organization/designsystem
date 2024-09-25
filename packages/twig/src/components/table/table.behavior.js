import Table from "./table";

Drupal.behaviors.table = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Table"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Table(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
