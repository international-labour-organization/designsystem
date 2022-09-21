import Modal from './modal';

Drupal.behaviors.loading = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Modal"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Modal component....');
        new Modal(element);
      }
    );
  },
};
