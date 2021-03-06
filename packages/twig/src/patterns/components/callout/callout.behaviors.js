import Callout from './callout';

Drupal.behaviors.tag = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Callout"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Callout component....');
        new Callout(element);
      }
    );
  },
};
