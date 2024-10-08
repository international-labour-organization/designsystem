import ReadMore from "./readmore";

Drupal.behaviors.readmore = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="ReadMore"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new ReadMore(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
