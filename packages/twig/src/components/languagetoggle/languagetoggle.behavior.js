import LanguageToggle from "./languagetoggle";

Drupal.behaviors.languagetoggle = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="LanguageToggle"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new LanguageToggle(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
