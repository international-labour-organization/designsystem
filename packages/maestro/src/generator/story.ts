import { StoryObj } from "@storybook/html";

import { code } from "./code";
import { UIPatternValue } from "./schema";

import { MaestroStory } from ".";

function stories(pattern: UIPatternValue): MaestroStory["stories"] {
  const props = Object.assign({}, pattern.fields, pattern.settings);
  const defaultStory: StoryObj = {
    storyName: "Default",
    args: {},
  };

  for (const [key, value] of Object.entries(props)) {
    defaultStory.args![key] = value.preview;
  }

  defaultStory.parameters = {
    docs: {
      source: {
        code: code(pattern.use, defaultStory.args!),
      },
    },
  };

  if (!pattern.variants) {
    return [defaultStory];
  }

  const stories: StoryObj[] = [defaultStory];

  for (const [key, variant] of Object.entries(pattern.variants)) {
    if (key === "default") continue;
    const merged = Object.assign({}, variant.fields, variant.settings);
    const args = Object.assign(
      {},
      defaultStory.args,
      Object.entries(merged).reduce<Record<string, unknown>>(
        (acc, [key, value]) => {
          acc[key] = value;

          return acc;
        },
        {}
      )
    );

    const story: StoryObj = {
      storyName: variant.label,
      args,
      parameters: {
        docs: {
          source: {
            code: code(pattern.use, args),
          },
        },
      },
    };

    stories.push(story);
  }

  return stories;
}

export { stories };
