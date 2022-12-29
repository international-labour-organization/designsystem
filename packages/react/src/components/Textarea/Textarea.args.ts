import { TextareaProps } from "./Textarea.props";

const basic: TextareaProps = {
  disabled: false,
  label: "Textarea",
  name: "textarea",
  placeholder: "Textarea",
  required: false,
  spellcheck: false,
};

const hashelper: TextareaProps = {
  disabled: false,
  helper: "This one has helper text",
  label: "Textarea",
  name: "textarea",
  placeholder: "Textarea",
  required: false,
  spellcheck: false,
};

const haserror: TextareaProps = {
  disabled: false,
  error: "This one has an error",
  label: "Textarea",
  name: "textarea",
  placeholder: "Textarea",
  required: false,
  spellcheck: false,
};

const hastooltip: TextareaProps = {
  disabled: false,
  label: "Textarea",
  name: "textarea",
  placeholder: "Textarea",
  required: false,
  spellcheck: false,
  tooltip: "This is the tooltip",
};

/**
 * Sample prop definitions Textarea's enumerable properties (imported in stories and test)
 */
const TextareaArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
};

export default TextareaArgs;
