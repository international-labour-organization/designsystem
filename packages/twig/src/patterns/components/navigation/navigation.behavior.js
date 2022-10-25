import Navigation from './navigation';

Drupal.behaviors.navigation = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Navigation"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Navigation component....');
        new Navigation(element);
      }
    );
  },
};
