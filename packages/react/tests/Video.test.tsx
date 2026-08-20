import { createRef } from "react";
import { expect, describe, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { Video } from "../src/components/Video";
import { VideoPlayerRef } from "../src/components/Video/VideoPlayer.props";

const { mockPlayer, videojsMock } = vi.hoisted(() => {
  const mockPlayer = {
    dispose: vi.fn(),
    poster: vi.fn(),
    src: vi.fn(),
  };
  const videojsMock = vi.fn<
    (
      element: HTMLVideoElement,
      options: Record<string, unknown>
    ) => typeof mockPlayer
  >(() => mockPlayer);
  return { mockPlayer, videojsMock };
});

vi.mock("../src/hooks/useGlobalSettings", () => ({
  default: () => ({ prefix: "ilo" }),
}));

vi.mock("video.js", () => ({
  default: videojsMock,
}));

vi.mock("videojs-youtube", () => ({}));

const fixture = {
  src: "/video-example.mp4",
  poster: {
    src: "/media-file-poster.jpg",
    alt: "Poster alt text",
  },
  caption:
    "The ILO brings together governments, employers and workers to set labour standards.",
  tracks: [
    {
      src: "/video-example.en.vtt",
      srclang: "en",
      label: "English",
      kind: "captions" as const,
      default: true,
    },
    {
      src: "/video-example.es.vtt",
      srclang: "es",
      label: "Spanish",
      kind: "captions" as const,
    },
  ],
};

describe("Video", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the figure with base and wrapper classes", () => {
    const { container } = render(<Video src={fixture.src} />);
    const figure = container.querySelector("figure");

    expect(figure).toHaveClass("ilo--video");
    expect(container.querySelector(".ilo--video--wrapper")).toBeInTheDocument();
    expect(container.querySelector(".ilo--videoplayer")).toBeInTheDocument();
  });

  it("should render the caption when provided", () => {
    render(<Video src={fixture.src} caption={fixture.caption} />);

    const caption = screen.getByText(fixture.caption);
    expect(caption).toBeInTheDocument();
    expect(caption.tagName).toBe("FIGCAPTION");
    expect(caption).toHaveClass("ilo--video--caption");
  });

  it("should initialize video.js with src and poster", async () => {
    render(<Video src={fixture.src} poster={fixture.poster} />);

    await waitFor(() => expect(videojsMock).toHaveBeenCalled());

    const [videoElement, options] = videojsMock.mock.calls[0];
    expect(videoElement).toHaveClass("ilo--video--element");
    expect(options).toMatchObject({
      poster: fixture.poster.src,
      sources: [{ type: undefined, src: fixture.src }],
    });
  });

  it("should use the youtube source type when youtube is true", async () => {
    const youtubeSrc = "https://youtu.be/X72_A4_6zjU";
    render(<Video src={youtubeSrc} youtube />);

    await waitFor(() => expect(videojsMock).toHaveBeenCalled());

    const [, options] = videojsMock.mock.calls[0];
    expect(options).toMatchObject({
      sources: [{ type: "video/youtube", src: youtubeSrc }],
    });
  });

  it("should append text tracks to the video element", async () => {
    render(<Video src={fixture.src} tracks={fixture.tracks} />);

    await waitFor(() => expect(videojsMock).toHaveBeenCalled());

    const [videoElement] = videojsMock.mock.calls[0];
    const trackElements = videoElement.querySelectorAll("track");

    expect(trackElements).toHaveLength(fixture.tracks.length);
    expect(trackElements[0]).toHaveAttribute("src", fixture.tracks[0].src);
    expect(trackElements[0]).toHaveAttribute("srclang", "en");
    expect(trackElements[0]).toHaveAttribute("label", "English");
    expect(trackElements[0]).toHaveAttribute("kind", "captions");
    expect(trackElements[0]).toHaveAttribute("default");
  });

  it("should expose the video.js player via ref", async () => {
    const ref = createRef<VideoPlayerRef>();
    render(<Video src={fixture.src} ref={ref} />);

    await waitFor(() => expect(ref.current?.player).toBe(mockPlayer));
  });

  it("should dispose the player on unmount", async () => {
    const { unmount } = render(<Video src={fixture.src} />);

    await waitFor(() => expect(videojsMock).toHaveBeenCalled());
    unmount();

    expect(mockPlayer.dispose).toHaveBeenCalled();
  });
});
