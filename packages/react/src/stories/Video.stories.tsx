import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Video } from "../components/Video";
import { VideoProps } from "../components/Video/Video.props";
import videoArgs from "../components/Video/Video.args";

/**
 * Video Story
 *
 */
export default {
  title: "Components/Video",
  component: Video,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Video component displays a video, either self-hosted or hosted
            on YouTube.
          </Description>
          <Primary />
          <ArgsTable />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Video>;

/**
 * VideoTemplate
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const VideoTemplate: Story<VideoProps> = (args) => <Video {...args} />;

/**
 * Video File Instance
 *
 */
export const VideoFileMedia = VideoTemplate.bind({});

/**
 * Video YouTube Instance
 *
 */
export const VideoYTMedia = VideoTemplate.bind({});

// enumerate the props for the video file option
VideoFileMedia.args = videoArgs.videofile;
VideoFileMedia.storyName = "Video File";

// enumerate the props for the video youtube option
VideoYTMedia.args = videoArgs.videoyt;
VideoYTMedia.storyName = "Video YouTube";
