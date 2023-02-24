import Accordion from "./accordion";

Drupal.behaviors.accordion = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Accordion"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log("loading Accordion component....");
        new Accordion(element);
      }
    );
  },
};
