import Navigation from "./navigation";

Drupal.behaviors.navigation = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Navigation"]`),
      (element) => {
        if(!element.dataset.jsProcessed) {
            // eslint-disable-next-line no-console
            console.log("loading Navigation component....");
            new Navigation(element);
            element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
