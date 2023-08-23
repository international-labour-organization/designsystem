import TableOfContents from "./tableofcontents";

Drupal.behaviors.tableofcontents = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="TableOfContents"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new TableOfContents(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
