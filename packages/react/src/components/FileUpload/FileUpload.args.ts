import { FileUploadProps } from "./FileUpload.props";

const basic: FileUploadProps = {
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

const hashelper: FileUploadProps = {
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

const haserror: FileUploadProps = {
  id: "fileupload",
  disabled: false,
  error: true,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

const hastooltip: FileUploadProps = {
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

const disabled: FileUploadProps = { ...basic, disabled: true };

/**
 * Sample prop definitions FileUpload's enumerable properties (imported in stories and test)
 */
const FileUploadArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
  disabled,
};

export default FileUploadArgs;
