declare global {
  interface Window {
    Drupal: {
      behaviors: Record<string, { attach: () => void }>;
    };
  }
}

function BehaviorDecorator(storyFn: () => string) {
  const observer = new MutationObserver(() => {
    for (const key in window.Drupal.behaviors) {
      if (!window.Drupal.behaviors[key].attach) continue;

      window.Drupal.behaviors[key].attach();
    }

    observer.disconnect();
  });

  const wrapper = document.createElement("div");
  observer.observe(wrapper, {
    childList: true,
    subtree: true,
  });

  wrapper.innerHTML = storyFn();

  return wrapper;
}
export { BehaviorDecorator };
