import Navigation from "./navigation";

const warnNavigationDeprecated = (() => {
  let warned = false;
  return () => {
    if (!warned && typeof console !== "undefined" && console.warn) {
      console.warn(
        "ILO Design System: The navigation.twig component is deprecated and will be removed in a future release. Switch to the SubsiteNav component with type=main."
      );
      warned = true;
    }
  };
})();

Drupal.behaviors.navigation = {
  attach() {
    warnNavigationDeprecated();
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Navigation"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Navigation(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
