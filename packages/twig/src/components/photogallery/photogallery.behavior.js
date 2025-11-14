import PhotoGallery from "./photogallery";

Drupal.behaviors.photoGallery = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="PhotoGallery"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new PhotoGallery(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
