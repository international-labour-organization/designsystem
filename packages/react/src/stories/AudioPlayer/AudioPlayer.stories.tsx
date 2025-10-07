import { Meta, StoryObj } from "@storybook/react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";

const meta: Meta<typeof AudioPlayer> = {
  title: "Components/Media/AudioPlayer",
  component: AudioPlayer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Audio player component for playing audio files.`,
      },
    },
  },
};

const Default: StoryObj = {
  name: "Default",
  args: {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    name: "Sample Track",
    programme: "Sample Programme",
    creator: "Sample Creator",
  },
};

export default meta;
export { Default };
