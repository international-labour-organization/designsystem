import Loading from "./loading";

Drupal.behaviors.loading = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Loading"]`),
      (element) => {
        if(!element.dataset.jsProcessed) {
            // eslint-disable-next-line no-console
            console.log("loading Loading component....");
            new Loading(element);
            element.dataset.jsProcessed = true;
        }
      }
    );
  },
};
