import { schema } from "./schema";

function compose(component, pattern) {
  if (typeof pattern !== "object") {
    throw new Error("Pattern must be an object");
  }

  const validation = schema.safeParse(pattern);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const validated = Object.values(validation.data).at(0);
  const merged = Object.assign({}, validated.settings, validated.fields);

  return {
    root: {
      component,
      argTypes: argTypes(merged),
      parameters: {
        layout: "centered",
        docs: {
          description: {
            component: validated.description,
          },
        },
      },
    },
    Default: {
      args: args(merged),
    },
  };
}

function argTypes(fields) {
  return Object.keys(fields).reduce((acc, key) => {
    const field = fields[key];
    acc[key] = {
      description: field.description,
    };

    switch (field.type) {
      case "string":
        acc[key].control = "text";
        break;
      case "value":
        acc[key].control = "text";
        break;
      case "number":
        acc[key].control = "number";
        break;
      case "boolean":
        acc[key].control = "boolean";
        break;
      case "select":
        acc[key].options = Object.keys(field.options);
        acc[key].control = {
          type: "select",
          labels: Object.keys(field.options),
        };
        break;
      case "checkbox":
        acc[key].control = "boolean";
        break;
      case "radio":
        acc[key].control = {
          type: "radio",
          options: field.preview,
        };
        break;
      case "object":
        acc[key].control = "object";
        break;
    }

    return acc;
  }, {});
}

function args(fields) {
  return Object.keys(fields).reduce((acc, key) => {
    const field = fields[key];

    acc[key] = field.preview;

    return acc;
  }, {});
}

export { compose };
