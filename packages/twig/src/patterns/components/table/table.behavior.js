import Table from './table';

Drupal.behaviors.table = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Table"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Table component....');
        new Table(element);
      }
    );
  },
};
