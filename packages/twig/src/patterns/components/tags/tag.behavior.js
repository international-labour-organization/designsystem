import Tag from "./tag";

Drupal.behaviors.tag = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tag"]`),
      (element) => {
          if(!element.dataset.jsProcessed) {
            // eslint-disable-next-line no-console
            console.log("loading Tag component....");
            new Tag(element);
            element.dataset.jsProcessed = true;
          }
      }
    );
  },
};
