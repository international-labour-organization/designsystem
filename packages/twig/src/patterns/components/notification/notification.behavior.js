import Notification from "./notification";

Drupal.behaviors.notification = {
  attach() {
    console.log("got here....");
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Notification"]`),
      (element) => {
        if(!element.dataset.jsProcessed) {
            // eslint-disable-next-line no-console
            console.log("loading Notification component....");
            new Notification(element);
            element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
