import { FileUploadProps, LabelledFileUploadProps } from "./FileUpload.props";

export const basic: LabelledFileUploadProps = {
  label: "Upload your file",
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

export const hashelper: LabelledFileUploadProps = {
  label: "Upload your file",
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

export const haserror: LabelledFileUploadProps = {
  label: "Upload your file",
  id: "fileupload",
  disabled: false,
  error: true,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

export const hastooltip: LabelledFileUploadProps = {
  label: "Upload your file",
  id: "fileupload",
  disabled: false,
  error: false,
  multiple: true,
  name: "fileupload",
  placeholder: "Select files",
  required: false,
};

export const disabled: FileUploadProps = { ...basic, disabled: true };

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
