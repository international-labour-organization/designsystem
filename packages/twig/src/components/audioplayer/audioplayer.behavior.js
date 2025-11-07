import AudioPlayer from "./audioplayer";

Drupal.behaviors.audioplayer = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="AudioPlayer"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new AudioPlayer(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
