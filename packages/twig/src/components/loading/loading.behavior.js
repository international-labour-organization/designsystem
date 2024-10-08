import Loading from "./loading";

Drupal.behaviors.loading = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Loading"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Loading(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
