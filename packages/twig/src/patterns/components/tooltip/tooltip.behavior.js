import Tooltip from './tooltip';

Drupal.behaviors.media = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tooltip"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Tooltip component....');
        new Tooltip(element);
      }
    );
  },
};
