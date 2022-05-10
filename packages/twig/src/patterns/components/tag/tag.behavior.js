import Tag from './tag';

Drupal.behaviors.tag = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Tag"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Tag component....');
        new Tag(element);
      }
    );
  },
};
