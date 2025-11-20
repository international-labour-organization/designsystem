import { StatefulComponent } from "../../utils";

/**
 * Utility function to format time in MM:SS format
 *
 * @param {number} time - Time in seconds
 * @returns {string} Formatted time string
 */
const getTimeString = (time) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

/**
 * Utility function to calculate progress percentage
 *
 * @param {number} currentTime - Current playback time
 * @param {number} totalTime - Total duration
 * @returns {number} Progress percentage
 */
const getProgressPercentage = (currentTime, totalTime) => {
  if (totalTime === 0) return 0;
  return (currentTime / totalTime) * 100;
};

export default class AudioPlayer extends StatefulComponent {
  /**
   * Creates a new AudioPlayer component instance.
   * Initializes the component with its initial state and sets up necessary properties.
   *
   * @param {HTMLElement} element - The root element of the audio player component
   */
  constructor(element) {
    const initialState = {
      currentTime: 0,
      totalTime: 0,
      playing: false,
      volume: 1,
    };
    super(element, initialState);
    this.prefix = this.element.dataset.prefix;
    this.init();
  }

  /**
   * Initializes the component by setting up all necessary functionality.
   *
   * @returns {AudioPlayer} Returns the instance for method chaining
   */
  init() {
    this.cacheDomReferences().bindEventHandlers().registerStateHandlers();
    return this;
  }

  /**
   * Caches references to DOM elements that will be used throughout the component.
   *
   * @returns {AudioPlayer} Returns the instance for method chaining
   */
  cacheDomReferences() {
    this.audio = this.element.querySelector(
      `.${this.prefix}--audio-player--audio`
    );
    this.playButton = this.element.querySelector(
      `.${this.prefix}--audio-player--play-button`
    );
    this.skipBackwardButton = this.element.querySelector(
      `.${this.prefix}--audio-player--skip-backward`
    );
    this.skipForwardButton = this.element.querySelector(
      `.${this.prefix}--audio-player--skip-forward`
    );
    this.progressBar = this.element.querySelector(
      `.${this.prefix}--audio-player--progress-bar`
    );
    this.progressComplete = this.element.querySelector(
      `.${this.prefix}--audio-player--progress-complete`
    );
    this.volumeButton = this.element.querySelector(
      `.${this.prefix}--audio-player--volume-icon`
    );
    this.volumeSlider = this.element.querySelector(
      `.${this.prefix}--audio-player--volume-slider`
    );
    this.currentTimeDisplay = this.element.querySelector(
      `.${this.prefix}--audio-player--duration-played`
    );
    this.totalTimeDisplay = this.element.querySelector(
      `.${this.prefix}--audio-player--duration-total`
    );
    this.playIcon = this.element.querySelector(
      `.${this.prefix}--audio-player--play-icon`
    );
    return this;
  }

  /**
   * Binds event listeners to the component's interactive elements.
   *
   * @returns {AudioPlayer} Returns the instance for method chaining
   */
  bindEventHandlers() {
    // Audio element events
    this.audio.addEventListener("loadedmetadata", () => {
      this.state.totalTime = this.audio.duration;
    });

    this.audio.addEventListener("timeupdate", () => {
      this.state.currentTime = this.audio.currentTime;
    });

    this.audio.addEventListener("play", () => {
      this.state.playing = true;
    });

    this.audio.addEventListener("pause", () => {
      this.state.playing = false;
    });

    this.audio.addEventListener("ended", () => {
      this.state.playing = false;
    });

    // Control buttons events
    this.playButton.addEventListener("click", () => {
      this.state.playing = !this.state.playing;
    });

    this.skipBackwardButton.addEventListener("click", () => {
      this.audio.currentTime = Math.max(this.audio.currentTime - 15, 0);
    });

    this.skipForwardButton.addEventListener("click", () => {
      this.audio.currentTime = Math.min(
        this.audio.currentTime + 15,
        this.state.totalTime
      );
    });

    this.volumeButton.addEventListener("click", () => {
      if (this.state.volume === 0) {
        this.state.volume = 1;
      } else {
        this.state.volume = 0;
      }
    });

    this.volumeSlider.addEventListener("input", (event) => {
      const newVolume = Number(event.target.value) / 100;
      this.state.volume = newVolume;
    });

    this.progressBar.addEventListener("click", (event) => {
      const rect = this.progressBar.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const newTime = (clickX / rect.width) * this.state.totalTime;
      this.audio.currentTime = newTime;
    });

    return this;
  }

  /**
   * Registers state change handlers for the component.
   *
   * @returns {AudioPlayer} Returns the instance for method chaining
   */
  registerStateHandlers() {
    this.registerStateHandler("currentTime", (currentTime) => {
      this.progressComplete.style.setProperty(
        "--progress",
        `${getProgressPercentage(currentTime, this.state.totalTime)}%`
      );
      this.progressBar.setAttribute("aria-valuenow", Math.floor(currentTime));
      this.currentTimeDisplay.textContent = getTimeString(currentTime);
    });

    this.registerStateHandler("totalTime", (totalTime) => {
      this.progressBar.setAttribute("aria-valuemax", Math.floor(totalTime));
      this.totalTimeDisplay.textContent = getTimeString(totalTime);
    });

    this.registerStateHandler("playing", (playing) => {
      if (playing) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
      this.playButton.setAttribute("aria-label", playing ? "Pause" : "Play");
    });

    this.registerStateHandler("volume", (volume) => {
      this.audio.volume = volume;
      this.volumeSlider.value = volume * 100;
      this.volumeSlider.style.setProperty("--progress", `${volume * 100}%`);
      this.volumeButton.setAttribute(
        "aria-label",
        volume === 0 ? "Unmute" : "Mute"
      );
    });

    return this;
  }
}
