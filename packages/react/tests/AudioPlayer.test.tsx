import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AudioPlayer } from "../src/components/AudioPlayer/AudioPlayer";

const sampleProps = {
  src: "/test-audio.mp3",
  name: "Test Track",
  programme: "Test Programme",
  creator: "Test Creator",
};

beforeEach(() => {
  // HTMLMediaElement is not implemented in jsdom which is used by vitest
  // Create a crude mock for checking whether the underlying API methods are called correctly by the component
  window.HTMLMediaElement.prototype._mock = {
    currentTime: 0,
    duration: 0,
    volume: 1,
    play: vi.fn(),
    pause: vi.fn(),
  };

  Object.defineProperty(window.HTMLMediaElement.prototype, "duration", {
    get() {
      return this._mock.duration;
    },
  });

  Object.defineProperty(window.HTMLMediaElement.prototype, "currentTime", {
    get() {
      return this._mock.currentTime;
    },
    set(time: number) {
      this._mock.currentTime = time;
    },
  });

  Object.defineProperty(window.HTMLMediaElement.prototype, "volume", {
    get() {
      return this._mock.volume;
    },
    set(volume: number) {
      this._mock.volume = volume;
    },
  });

  window.HTMLMediaElement.prototype.play = function () {
    return this._mock.play();
  };

  window.HTMLMediaElement.prototype.pause = function () {
    return this._mock.pause();
  };
});

describe("AudioPlayer", () => {
  it("should render the component correctly", () => {
    render(<AudioPlayer {...sampleProps} />);
    expect(screen.getByText("Test Track")).toBeInTheDocument();
    expect(screen.getByText("Test Programme")).toBeInTheDocument();
    expect(screen.getByText("Test Creator")).toBeInTheDocument();
    // Initially the length of the track is unknown
    expect(screen.getAllByText("00:00").length).toBe(2);
    expect(screen.getByRole("slider")).toHaveValue("100");
  });

  it("should play and pause the audio on button click", async () => {
    render(<AudioPlayer {...sampleProps} />);
    const playButton = screen.getByRole("button", { name: "Play" });
    const audio = document.getElementsByTagName("audio")[0];
    audio._mock.duration = 120; // 2 minutes
    fireEvent(
      document.getElementsByTagName("audio")[0],
      new Event("loadedmetadata")
    );
    expect(screen.getByText("02:00")).toBeInTheDocument();

    // Play
    await userEvent.click(playButton);
    expect(audio._mock.play).toHaveBeenCalled();
    audio._mock.currentTime = 2;
    fireEvent(audio, new Event("timeupdate"));
    expect(screen.getByText("00:02")).toBeInTheDocument();

    // Pause
    await userEvent.click(playButton);
    expect(audio._mock.pause).toHaveBeenCalled();
  });

  it("should skip forward and backward correctly", async () => {
    render(<AudioPlayer {...sampleProps} />);
    const audio = document.getElementsByTagName("audio")[0];
    audio._mock.duration = 300; // 5 minutes
    fireEvent(audio, new Event("loadedmetadata"));
    expect(screen.getByText("05:00")).toBeInTheDocument();

    // Skip forward
    const skipForwardButton = screen.getByRole("button", {
      name: "Fast forward 15 seconds",
    });
    await userEvent.click(skipForwardButton);
    expect(audio._mock.currentTime).toBe(15);

    // Skip backward
    const skipBackwardButton = screen.getByRole("button", {
      name: "Rewind 15 seconds",
    });
    await userEvent.click(skipBackwardButton);
    expect(audio._mock.currentTime).toBe(0);
  });

  it("should adjust volume correctly", () => {
    render(<AudioPlayer {...sampleProps} />);
    const audio = document.getElementsByTagName("audio")[0];
    const volumeSlider = screen.getByRole("slider");

    fireEvent.change(volumeSlider, { target: { value: "50" } });
    expect(audio._mock.volume).toBe(0.5);
    const soundOn = screen.getByTestId("soundon-icon");
    expect(soundOn).toBeInTheDocument();

    fireEvent.change(volumeSlider, { target: { value: "0" } });
    expect(audio._mock.volume).toBe(0);
    const soundOff = screen.getByTestId("soundoff-icon");
    expect(soundOff).toBeInTheDocument();
  });
});
