import Modal from "./modal";

Drupal.behaviors.modal = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Modal"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Modal(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
