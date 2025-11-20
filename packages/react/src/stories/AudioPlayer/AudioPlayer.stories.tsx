import { useState } from "react";
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
    src: "/audio-example.mp3",
    name: "Sample Track",
    programme: "Sample Programme",
    creator: "Sample Creator",
  },
};

const MultipleTracks: StoryObj = {
  name: "Multiple Tracks",
  render: () => {
    const tracks = [
      {
        src: "/audio-example.mp3",
        name: "Sample Track 1",
        programme: "Sample Programme",
        creator: "Sample Creator",
      },
      {
        src: "/audio-example-2.mp3",
        name: "Sample Track 2",
        programme: "Sample Programme",
        creator: "Sample Creator",
      },
    ];

    const [currentTrack, setCurrentTrack] = useState(0);
    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      }
    };

    return (
      <div>
        <AudioPlayer {...tracks[currentTrack]} onEnded={handleEnded} />
        <ul style={{ display: "inline-block", listStyle: "none", padding: 0 }}>
          {tracks.map((track, idx) => (
            <li
              key={track.name}
              style={{
                cursor: "pointer",
                fontWeight: idx === currentTrack ? "bold" : "normal",
                marginBottom: 4,
                marginTop: 8,
              }}
              onClick={() => setCurrentTrack(idx)}
            >
              {track.name}
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export default meta;
export { Default, MultipleTracks };
