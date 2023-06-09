import Accordion from "./accordion";

Drupal.behaviors.accordion = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Accordion"]`),
      (element) => {
          if(!element.dataset.jsProcessed) {
            // eslint-disable-next-line no-console
            console.log("loading Accordion component....");
            new Accordion(element);
            element.dataset.jsProcessed = true;
          }
      }
    );
  },
};
