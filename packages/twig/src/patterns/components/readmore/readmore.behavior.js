import ReadMore from "./readmore";

Drupal.behaviors.readmore = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="ReadMore"]`),
      (element) => {
          if(!element.dataset.jsProcessed) {
              // eslint-disable-next-line no-console
              console.log("loading ReadMore component....");
              new ReadMore(element);
              element.dataset.jsProcessed = true;
          }
      }
    );
  },
};
