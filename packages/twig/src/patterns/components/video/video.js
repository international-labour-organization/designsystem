import { EVENTS } from "@ilo-org/utils";
import videojs from "video.js";

/**
 * The Video module which handles rendering field labels inline on a form.
 *
 * @class Video
 */
export default class Video {
  /**
   * Video constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  constructor(element) {
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */
    this.element = element;

    // get the theme prefix
    this.prefix = this.element.dataset.prefix;
    this.controlsprefix = `${this.prefix}--video--controls`;

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences()
      .start()
      .cacheVideoReferences()
      .setupHandlers()
      .enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Read More state
     * @type {Object}
     */
    this.VideoElement = this.element.querySelector(
      `.${this.prefix}--video--element`
    );

    return this;
  }

  /**
   * Find all necessary DOM elements inside videojs
   *
   * @return {Object} Video A reference to the instance of the class
   * @chainable
   */
  cacheVideoReferences() {
    /**
     * The button for video play control
     * @type {?Element}
     */
    this.PlayButton = this.element.querySelector(".vjs-play-control");

    /**
     * The duration display
     * @type {?Element}
     */
    this.Duration = this.element.querySelector(".vjs-duration");

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Video A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.onDurationHover = this.onDurationHover.bind(this);

    return this;
  }

  /**
   * Creates event listeners to fix duration hover
   * https://github.com/international-labour-organization/designsystem/issues/521
   *
   * @return {Object} Video A reference to the instance of the class
   * @chainable
   */
  enable() {
    if (!this.Duration) return this;
    this.Duration.addEventListener(EVENTS.MOUSEOVER, () =>
      this.onDurationHover(true)
    );
    this.Duration.addEventListener(EVENTS.MOUSEOUT, () => {
      this.onDurationHover(false);
    });

    return this;
  }
  /**
   * Starts up videojs
   *
   * @return {Object} Video A reference to the instance of the class
   * @chainable
   */
  start() {
    this.player = videojs(this.VideoElement, {
      autoplay: false,
      controls: true,
      preload: "auto",
      bigPlayButton: false,
      controlBar: {
        descriptionsButton: false,
        playbackRateMenuButton: false,
        chaptersButton: false,
        audioTrackButton: false,
        pictureInPictureToggle: false,
        subsCapsButton: false,
        seekToLive: false,
        liveDisplay: false,
      },
      textTrackDisplay: false,
      liveTracker: false,
      errorDisplay: false,
      textTrackSettings: false,
      resizeManager: false,
      sources: [
        { type: this.element.dataset.vjsType, src: this.element.dataset.src },
      ],
    });

    return this;
  }

  /**
   * Controls duration hover
   *
   * @param {boolean} state - whether or not the duration is hovered
   * @return {Object} Video A reference to the instance of the class
   * @chainable
   */
  onDurationHover(state) {
    if (!this.PlayButton) return this;
    const className = `${this.controlsprefix}--play--hovered`;

    if (this.PlayButton.classList.contains("vjs-playing")) return this;
    this.PlayButton.classList.toggle(className, state);

    return this;
  }
}
