import Notification from './notification';

Drupal.behaviors.notification = {
  attach() {
    console.log('got here....');
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Notification"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Notification component....');
        new Notification(element);
      }
    );
  },
};
