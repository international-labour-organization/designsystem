// UIP = UI Patterns
enum UIPFieldTypes {
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

const UIPFieldToStorybookType: Record<UIPFieldTypes, ControlType> = {
  [UIPFieldTypes.String]: "text",
  [UIPFieldTypes.Value]: "text",
  [UIPFieldTypes.Number]: "number",
  [UIPFieldTypes.Bool]: "boolean",
  [UIPFieldTypes.Select]: "select",
  [UIPFieldTypes.Checkbox]: "boolean",
  [UIPFieldTypes.Radio]: "radio",
  [UIPFieldTypes.Object]: "object",
};

export { UIPFieldTypes, UIPFieldToStorybookType };
