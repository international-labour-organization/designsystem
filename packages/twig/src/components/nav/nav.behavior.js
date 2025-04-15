import Nav from "./nav";

Drupal.behaviors.nav = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Nav"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Nav(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
