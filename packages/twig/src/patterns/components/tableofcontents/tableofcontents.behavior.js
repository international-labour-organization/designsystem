import TableOfContents from './tableofcontents';

Drupal.behaviors.table = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="TableOfContents"]`),
      (element) => {
        // eslint-disable-next-line no-console
        console.log('loading TableOfContents component....');
        new TableOfContents(element);
      }
    );
  },
};
