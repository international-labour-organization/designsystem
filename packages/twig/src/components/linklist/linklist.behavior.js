import LinkList from "./linklist";

Drupal.behaviors.link = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="LinkList"]`),
      (element) => {
        if (!element.dataset.jsProcessed) {
          new LinkList(element);
          element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
