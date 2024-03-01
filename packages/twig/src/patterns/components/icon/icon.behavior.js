import Icon from "./icon";

Drupal.behaviors.icon = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Icon"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          // eslint-disable-next-line no-console
          new Icon(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
