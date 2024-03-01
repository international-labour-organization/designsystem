import Search from "./search";

Drupal.behaviors.search = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Search"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Search(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
