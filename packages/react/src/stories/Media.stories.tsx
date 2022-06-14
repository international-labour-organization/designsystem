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
import { Media } from "../components/Media";
import { MediaProps } from "../components/Media/Media.props";
import mediaArgs from "../components/Media/media.args";

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
  title: "Components/Media",
  component: Media,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Media component displays either an image or a video. Requires an
            image always, since the image is used as the video's poster when
            there is a video.
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
} as Meta<typeof Media>;

/**
 * MediaTemplate
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const MediaTemplate: Story<MediaProps> = (args) => <Media {...args} />;

/**
 * Image Only Instance
 *
 */
export const ImageMedia = MediaTemplate.bind({});

/**
 * Video File Instance
 *
 */
export const VideoFileMedia = MediaTemplate.bind({});

/**
 * Video YouTube Instance
 *
 */
export const VideoYTMedia = MediaTemplate.bind({});

// enumerate the props for the image only option
ImageMedia.args = mediaArgs.imageonly;
ImageMedia.storyName = "Image Only";

// enumerate the props for the video file option
VideoFileMedia.args = mediaArgs.videofile;
VideoFileMedia.storyName = "Video File";

// enumerate the props for the video youtube option
VideoYTMedia.args = mediaArgs.videoyt;
VideoYTMedia.storyName = "Video YouTube";
