import { FileUploadProps } from "./FileUpload.props";

const basic: FileUploadProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "File Upload Field Label",
  multiple: false,
  name: "fileupload",
  placeholder: "File Upload Field",
  required: false,
};

const hashelper: FileUploadProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: "The file upload's helper text",
  label: "File Upload Field Label",
  multiple: false,
  name: "fileupload",
  placeholder: "File Upload Field",
  required: false,
};

const haserror: FileUploadProps = {
  callback: "",
  disabled: false,
  error: "this one has an error",
  helper: false,
  label: "File Upload Field Label",
  multiple: false,
  name: "fileupload",
  placeholder: "File Upload Field",
  required: false,
};

const hastooltip: FileUploadProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "File Upload Field Label",
  multiple: false,
  name: "fileupload",
  placeholder: "File Upload Field",
  required: false,
  tooltip: "here is the Tooltip",
};

/**
 * Sample prop definitions FileUpload's enumerable properties (imported in stories and test)
 */
const FileUploadArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
};

export default FileUploadArgs;
