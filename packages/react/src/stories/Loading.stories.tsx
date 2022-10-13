import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Loading } from "../components/Loading";
import { LoadingProps } from "../components/Loading/Loading.props";
import loadingArgs from "../components/Loading/Loading.args";

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

/**
 * Loading Story
 *
 */
export default {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Loading component displays a loading state. Status is passed to
            it via props, along with size setting.
          </Description>
          <Primary />
          <Subheading>status Prop</Subheading>
          <Description>{statusDoc}</Description>
          <Subheading>size Prop</Subheading>
          <Description>{sizeDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Loading>;

/**
 * Loading Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const LoadingTemplate: Story<LoadingProps> = (args) => <Loading {...args} />;

export const BaseLoading = LoadingTemplate.bind({});

export const LoadingLarge = LoadingTemplate.bind({});

export const LoadedLarge = LoadingTemplate.bind({});

export const LoadingSmall = LoadingTemplate.bind({});

export const LoadedSmall = LoadingTemplate.bind({});

BaseLoading.args = loadingArgs.loadinglarge;
BaseLoading.storyName = "Loading - loading large";

LoadingLarge.args = loadingArgs.loadinglarge;
LoadingLarge.storyName = "Loading - loading large";

LoadedLarge.args = loadingArgs.loadedlarge;
LoadedLarge.storyName = "Loading - loaded large";

LoadingSmall.args = loadingArgs.loadingsmall;
LoadingSmall.storyName = "Loading - loading small";

LoadedSmall.args = loadingArgs.loadedsmall;
LoadedSmall.storyName = "Loading - loaded small";
