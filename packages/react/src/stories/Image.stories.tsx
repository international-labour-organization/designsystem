import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Image } from "../components/Image";
import { ImageProps } from "../components/Image/Image.props";
import imageArgs from "../components/Image/Image.args";

const urlDoc = `
The \`url\` prop expects an array of object each containing a \`breakpoint\` and a \`src\` prop. There must be a minimuim of one of these, but preferably multiple items corresponding to the same image at different raw sizes, so that responsive images can be displayed.

| Prop   |  Description  |
|----------|-------------|
| \`breakpoint\` | The min-width at which to start displaying this size of the image - the first item in the array should always have a breakpoint value of 0 |
| \`src\` | The image src to display at this breakpoint |
`;

/**
 * Button Story
 *
 */
export default {
  title: "Components/Image",
  component: Image,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Image component displays an image, along with an image credit
            and optional caption.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>URL Prop</Subheading>
          <Description>{urlDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Image>;

/**
 * ImageTemplate
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ImageTemplate: Story<ImageProps> = (args) => <Image {...args} />;

/**
 * Image Only Instance
 *
 */
export const ImageMedia = ImageTemplate.bind({});

// enumerate the props for the image only option
ImageMedia.args = imageArgs.image;
ImageMedia.storyName = "Image";
