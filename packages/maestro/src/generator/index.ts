import { Meta, StoryObj } from "@storybook/html";

import { create } from "./create";

export type MaestroComponent = (props: Record<string, unknown>) => string;
export type MaestroPattern = Record<string, unknown>;
export type MaestroStory = {
  meta: Meta;
  stories: StoryObj[];
};

type MaestroType = {
  create: (
    component: MaestroComponent,
    pattern: MaestroPattern
  ) => MaestroStory;
};

const Maestro: MaestroType = {
  create,
};

export { Maestro };
