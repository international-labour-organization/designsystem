import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Image } from "../../components/Image";
import { ImageProps } from "../../components/Image/Image.props";
import imageArgs from "../../components/Image/Image.args";

const urlDoc = `
The \`url\` prop expects an array of object each containing a \`breakpoint\` and a \`src\` prop. There must be a minimuim of one of these, but preferably multiple items corresponding to the same image at different raw sizes, so that responsive images can be displayed.`;

const ImageMeta: Meta<typeof Image> = {
  title: "Components/Media/Image",
  component: Image,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Image component displays an image, along with an image credit
            and optional caption.
          </Description>
          <Primary />
          <Subheading>Responsive images</Subheading>
          <Description>{urlDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default ImageMeta;

const ImageTemplate: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const ImageMedia: StoryFn<ImageProps> = ImageTemplate.bind({});

ImageMedia.args = imageArgs;
ImageMedia.storyName = "Image";
