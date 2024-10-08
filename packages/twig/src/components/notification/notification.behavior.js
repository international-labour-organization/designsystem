import Notification from "./notification";

Drupal.behaviors.notification = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Notification"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Notification(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
