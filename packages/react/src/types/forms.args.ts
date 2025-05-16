// This annoying file has to exist because at the present time, react-docgen-typescript can't generate argTypes for
// components that use forwardRef. So we have to create the argTypes manually. This only regards Form elements for the time being.

export const formFieldArgTypes = (element: string) => ({
  className: {
    description:
      "The className of the Component. Passed to the outermost element.",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  disabled: {
    description: "Whether the Component is disabled",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: { summary: "false" },
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  error: {
    description: "Whether the Component has an error",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: { summary: "false" },
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  id: {
    description:
      "The id attribute of the underlying form element. This will be the same as `name` if not set",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  inputStyle: {
    description: "Inline styles for the input",
    control: {
      type: "object",
    },
    table: {
      type: {
        summary: "React.CSSProperties | undefined",
      },
    },
  },
  name: {
    description:
      "The name of the Component. This is required and should be unique",
    control: {
      type: "text",
    },
    type: {
      required: true,
      name: "other" as const,
      value: "string",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  onBlur: {
    description: "The onBlur handler of the Component",
    control: {
      type: "function",
    },
    table: {
      type: {
        summary: `(event: React.FocusEvent<${element}>) => any`,
      },
    },
  },
  onChange: {
    description: "The onChange handler of the Component",
    control: {
      type: "function",
    },
    table: {
      type: {
        summary: `(event: React.ChangeEvent<${element}>) => any`,
      },
    },
  },
  required: {
    description: "Whether the Component is required",
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean | undefined",
      },
      defaultValue: { summary: false },
    },
  },
});

export const choiceFieldArgTypes = (element: string) => ({
  ...formFieldArgTypes(element),
  defaultChecked: {
    description: "Whether the Component is checked by default when it loads",
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  checked: {
    description: "Whether the Component is checked",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: { summary: "false" },
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  value: {
    description: "The value of the Component",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
});

export const formControlArgTypes = {
  className: {
    description:
      "The className of the Component. Passed to the outermost element.",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  disabled: {
    description: "Whether the Component is disabled",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: { summary: "false" },
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  error: {
    description: "Whether the Component has an error",
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: { summary: "false" },
      type: {
        summary: "boolean | undefined",
      },
    },
  },
  errorMessage: {
    description: "The error message to display in case of an error",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  label: {
    description: "The label of the Component. This is required.",
    control: {
      type: "text",
    },
    type: {
      required: true,
      name: "other" as const,
      value: "string",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  labelSize: {
    description: "The size of the label",
    defaultValue: "medium",
    control: "select",
    options: ["small", "medium", "large"],
    table: {
      defaultValue: { summary: "medium" },
      type: {
        name: "enum",
        summary: "small | medium | large",
      },
    },
  },
  labelPlacement: {
    description: "The placement of the label",
    defaultValue: "start",
    control: "select",
    options: ["top", "start", "bottom", "end"],
    table: {
      defaultValue: { summary: "start" },
      type: {
        name: "enum",
        summary: "top | start | bottom | end",
      },
    },
  },
  helper: {
    description: "Helper text to display with the label",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  style: {
    description: "Inline styles for the outermost element of the Component",
    control: {
      type: "object",
    },
    table: {
      type: {
        summary: "React.CSSProperties | undefined",
      },
    },
  },
  tooltip: {
    description: "Optional text to render in a tooltip",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
  theme: {
    description: "The theme of the Component",
    defaultValue: "light",
    control: "select",
    options: ["light", "dark"],
  },
};

export const labelledFormFieldArgTypes = (element: string) => ({
  ...formControlArgTypes,
  ...formFieldArgTypes(element),
});

export const labelledChoiceFieldArgTypes = (element: string) => ({
  ...formControlArgTypes,
  ...choiceFieldArgTypes(element),
});
