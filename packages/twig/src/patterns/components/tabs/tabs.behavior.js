import Tabs from './tabs';
import Tooltip from '../tooltip/tooltip';

Drupal.behaviors.loading = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tabs"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Tabs component....');
        new Tabs(element);
      }
    );
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
