import { FileUploadProps } from "./FileUpload.props";

const basic: FileUploadProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: "The file upload's helper text",
  label: "File Upload Field Label",
  multiple: false,
  name: "fileupload",
  placeholder: "File Upload Field",
  required: false,
  tooltip: "Tooltip",
};
/**
 * Sample prop definitions FileUpload's enumerable properties (imported in stories and test)
 */
const FileUploadArgs = {
  basic,
};

export default FileUploadArgs;
