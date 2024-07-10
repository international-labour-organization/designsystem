// UIPattern = UI Patterns
enum UIPatternFieldTypes {
  String = "string",
  Value = "value",
  Number = "number",
  Bool = "boolean",
  Select = "select",
  Checkbox = "checkbox",
  Radio = "radio",
  Object = "object",
}

type ControlType =
  | "object"
  | "boolean"
  | "check"
  | "inline-check"
  | "radio"
  | "inline-radio"
  | "select"
  | "multi-select"
  | "number"
  | "range"
  | "file"
  | "color"
  | "date"
  | "text";

const UIPatternFieldToStorybookType: Record<UIPatternFieldTypes, ControlType> =
  {
    [UIPatternFieldTypes.String]: "text",
    [UIPatternFieldTypes.Value]: "text",
    [UIPatternFieldTypes.Number]: "number",
    [UIPatternFieldTypes.Bool]: "boolean",
    [UIPatternFieldTypes.Select]: "select",
    [UIPatternFieldTypes.Checkbox]: "boolean",
    [UIPatternFieldTypes.Radio]: "radio",
    [UIPatternFieldTypes.Object]: "object",
  };

export { UIPatternFieldTypes, UIPatternFieldToStorybookType };
