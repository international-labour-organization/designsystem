import Tabs from "./tabs";
import Tooltip from "../tooltip/tooltip";

Drupal.behaviors.tabs = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tabs"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Tabs(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tooltip"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new Tooltip(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
