import Tag from "./tag";

Drupal.behaviors.tag = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tag"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Tag(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
