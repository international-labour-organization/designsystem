import { TextareaProps } from "./Textarea.props";

const basic: TextareaProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Textarea",
  name: "textarea",
  placeholder: "Textarea",
  required: false,
  spellcheck: false,
};

/**
 * Sample prop definitions Textarea's enumerable properties (imported in stories and test)
 */
const TextareaArgs = {
  basic,
};

export default TextareaArgs;
