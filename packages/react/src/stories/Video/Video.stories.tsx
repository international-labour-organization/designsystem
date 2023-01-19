import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Subheading,
} from "@storybook/addon-docs";
import { Video } from "../../components/Video";
import { VideoProps } from "../../components/Video/Video.props";
import videoArgs from "../../components/Video/Video.args";

/**
 * Video Story
 *
 */
const VideoMeta: Meta<typeof Video> = {
  title: "Components/Media/Video",
  tags: ["autodocs"],
  component: Video,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Video component displays a video, which can be either a media
            file or an embed from a video hosting service like YouTube. It uses
            [react-player](https://github.com/CookPete/react-player) under the
            hood so look there for further documentation.
          </Description>
          <Primary />
          <Subheading>Default props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default VideoMeta;

/**
 * VideoTemplate
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const VideoTemplate: StoryFn<VideoProps> = (args) => <Video {...args} />;

/**
 * Video File Instance
 *
 */
export const VideoFileMedia: StoryFn<VideoProps> = VideoTemplate.bind({});

/**
 * Video YouTube Instance
 *
 */
export const VideoYTMedia: StoryFn<VideoProps> = VideoTemplate.bind({});

// enumerate the props for the video file option
VideoFileMedia.args = videoArgs.videofile;
VideoFileMedia.storyName = "Media file";

// enumerate the props for the video youtube option
VideoYTMedia.args = videoArgs.videoyt;
VideoYTMedia.storyName = "YouTube";
