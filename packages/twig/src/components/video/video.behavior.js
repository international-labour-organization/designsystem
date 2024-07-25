import Video from "./video";

Drupal.behaviors.media = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Video"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Video(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
