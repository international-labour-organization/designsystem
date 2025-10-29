import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AudioPlayer } from "../src/components/AudioPlayer/AudioPlayer";
import { afterEach } from "node:test";

const sampleProps = {
  src: "/test-audio.mp3",
  name: "Test Track",
  programme: "Test Programme",
  creator: "Test Creator",
};

describe("AudioPlayer", () => {
  beforeEach(() => {
    Object.defineProperty(window.HTMLMediaElement.prototype, "duration", {
      get() {
        return 120;
      },
    });
    window.HTMLMediaElement.prototype.play = vi.fn();
    window.HTMLMediaElement.prototype.pause = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the component correctly", () => {
    render(<AudioPlayer {...sampleProps} />);
    expect(screen.getByText("Test Track")).toBeInTheDocument();
    expect(screen.getByText("Test Programme")).toBeInTheDocument();
    expect(screen.getByText("Test Creator")).toBeInTheDocument();
    // Initially the length of the track is unknown
    expect(screen.getAllByText("00:00").length).toBe(2);

    fireEvent(
      document.getElementsByTagName("audio")[0],
      new Event("loadedmetadata")
    );
    expect(screen.getByText("00:00")).toBeInTheDocument();
    expect(screen.getByText("02:00")).toBeInTheDocument();
  });

  it("plays and pauses the audio on button click", async () => {
    render(<AudioPlayer {...sampleProps} />);
    const playButton = screen.getByRole("button", { name: "Play" });

    // Play
    expect(window.HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    await userEvent.click(playButton);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();

    // Pause
    // TODO: Remove useEffect from component so that this is not needed
    window.HTMLMediaElement.prototype.pause.mockClear();
    await userEvent.click(playButton);
    expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  });
});
