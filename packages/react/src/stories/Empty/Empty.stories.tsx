import { Meta, StoryFn } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgTypes,
  Subheading,
} from "@storybook/addon-docs";
import { Empty } from "../../components/Empty";
import { EmptyProps } from "../../components/Empty/Empty.props";

const EmptyMeta: Meta<typeof Empty> = {
  title: "Components/Transitions/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Empty component receives no props. It it displayed on page load
            as a placeholder component while data loads.
          </Description>
          <Primary />
          <Stories title="Examples" />
          <Subheading>Default Props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default EmptyMeta;

export const Default: StoryFn<EmptyProps> = () => (
  <Empty style={{ width: "100%", maxWidth: "600px", height: "400px" }} />
);
