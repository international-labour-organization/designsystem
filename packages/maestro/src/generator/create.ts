import { UIPatternValue, pattern as validate } from "./schema";
import { types } from "./types";
import { stories } from "./story";

import { MaestroComponent, MaestroPattern, MaestroStory } from ".";

function create(
  component: MaestroComponent,
  pattern: MaestroPattern
): MaestroStory {
  const validation = validate.safeParse(pattern);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const uip = Object.values(validation.data).at(0);

  if (!uip) {
    throw new Error("Pattern not found");
  }

  return {
    meta: {
      component,
      argTypes: types(uip),
      parameters: parameters(uip),
    },
    stories: stories(uip),
  };
}

function parameters(
  pattern: UIPatternValue
): MaestroStory["meta"]["parameters"] {
  return {
    layout: "centered",
    docs: {
      description: {
        component: pattern.description,
      },
    },
  };
}

export { create };
