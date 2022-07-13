import Video from './video';

Drupal.behaviors.media = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="Video"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading Video component....');
        new Video(element);
      }
    );
  },
};
