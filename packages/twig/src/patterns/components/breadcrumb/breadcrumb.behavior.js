import Breadcrumb from './breadcrumb';

Drupal.behaviors.breadcrumb = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Breadcrumb"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Breadcrumb component....');
        new Breadcrumb(element);
      }
    );
  },
};
