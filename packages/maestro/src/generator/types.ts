import { UIPatternValue } from "./schema";
import {
  UIPatternFieldToStorybookType,
  UIPatternFieldTypes,
} from "./definitions";

import { MaestroStory } from ".";

type ArgTypes = MaestroStory["meta"]["argTypes"];

function types(pattern: UIPatternValue): ArgTypes {
  const props = Object.assign({}, pattern.fields, pattern.settings);
  const argTypes: ArgTypes = {};

  for (const [key, value] of Object.entries(props)) {
    switch (value.type) {
      case UIPatternFieldTypes.Select: {
        if (!value.options) {
          throw new Error("Select field must have options");
        }

        const options = Object.keys(value.options);
        argTypes[key] = {
          control: {
            type: UIPatternFieldToStorybookType[value.type] as "select",
            labels: options,
          },
          options: options,
          description: value.description,
        };

        break;
      }
      case UIPatternFieldTypes.Radio: {
        if (!value.options) {
          throw new Error("Radio field must have options");
        }

        argTypes[key] = {
          control: {
            type: UIPatternFieldToStorybookType[value.type] as "radio",
            labels: Object.keys(value.options),
          },
          description: value.description,
        };
        break;
      }
      default: {
        argTypes[key] = {
          control: {
            type: UIPatternFieldToStorybookType[value.type],
          },
          description: value.description,
        };
      }
    }
  }

  return argTypes;
}

export { types };
