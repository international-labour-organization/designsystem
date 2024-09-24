import Modal from "./modal";

Drupal.behaviors.modal = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Modal"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Modal(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
