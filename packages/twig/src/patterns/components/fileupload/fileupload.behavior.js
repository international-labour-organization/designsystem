import FileUpload from "./fileupload";

Drupal.behaviors.fileupload = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="FileUpload"]`),
      (element) => {
        new FileUpload(element);
      }
    );
  },
};
