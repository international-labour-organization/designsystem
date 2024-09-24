import TableOfContents from "./tableofcontents";

Drupal.behaviors.tableofcontents = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="TableOfContents"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new TableOfContents(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
