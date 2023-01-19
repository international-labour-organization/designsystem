import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
} from "@storybook/addon-docs";
import { Loading } from "../../components/Loading";
import { LoadingProps } from "../../components/Loading/Loading.props";
import loadingArgs from "../../components/Loading/Loading.args";

const statusDoc = `
By changing the \`status\` prop you can change whether the Loading component is displaying the spinner, the completed state, or nothing at all.

| type   |  Description  |
|----------|-------------|
| \`idle\` | The Loading component is idle and displays nothing. For screen readers, the component must be on the page before the loading state is invoked. |
| \`loading\` | The Loading component displays the spinner graphic and the loading message. |
| \`loaded\` | The Loading component displays the completed message and graphic. |`;

const sizeDoc = `
By changing the \`size\` prop you can change whether the Loading component appears as the small or large design.

| type   |  Description  |
|----------|-------------|
| \`small\` | The Loading component displays the small design |
| \`large\` | The Loading component displays the large design |`;

const LoadingMeta: Meta<typeof Loading> = {
  title: "Components/Transitions/Loading",
  tags: ["autodocs"],
  component: Loading,
  argTypes: {
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
    status: {
      options: ["idle", "loading", "loaded"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Loading component displays a loading state. Status is passed to
            it via props, along with size setting.
          </Description>
          <Primary />
          <Subheading>Status</Subheading>
          <Description>{statusDoc}</Description>
          <Subheading>Size</Subheading>
          <Description>{sizeDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default LoadingMeta;

/**
 * Loading Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const LoadingTemplate: StoryFn<LoadingProps> = (args) => <Loading {...args} />;

export const LoadingLarge: StoryFn<LoadingProps> = LoadingTemplate.bind({});

export const LoadedLarge: StoryFn<LoadingProps> = LoadingTemplate.bind({});

export const LoadingSmall: StoryFn<LoadingProps> = LoadingTemplate.bind({});

export const LoadedSmall: StoryFn<LoadingProps> = LoadingTemplate.bind({});

LoadingLarge.args = loadingArgs.loadinglarge;
LoadingLarge.storyName = "Loading - large";

LoadedLarge.args = loadingArgs.loadedlarge;
LoadedLarge.storyName = "Loaded - large";

LoadingSmall.args = loadingArgs.loadingsmall;
LoadingSmall.storyName = "Loading - small";

LoadedSmall.args = loadingArgs.loadedsmall;
LoadedSmall.storyName = "Loaded - small";
