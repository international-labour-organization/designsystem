import Nav from "./nav";
import MobileNav from "./mobile/nav_mobile";

Drupal.behaviors.nav = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Nav"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Nav(element);
          new MobileNav(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
