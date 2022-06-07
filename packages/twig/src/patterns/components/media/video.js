import { EVENTS, ARIA } from '@ilo-org/utils';
import videojs from 'video.js';

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
    this.cacheDomReferences().start().setupHandlers().enable();

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
    this.VideoElement = this.element.querySelector(`.${this.prefix}--video--element`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Video A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  enable() {
    return this;
  }

  /**
   * Starts up videojs
   *
   * @return {Object} Video A reference to the instance of the class
   * @chainable
   */
  start() {
    console.log('this.VideoElement', this.VideoElement);

    this.player = videojs(this.VideoElement, {
      autoplay: false,
      controls: true,
      preload: 'auto',
      bigPlayButton: false,
      textTrackDisplay: false,
      liveTracker: false,
      errorDisplay: false,
      textTrackSettings: false,
      resizeManager: false,
    });

    this.player.controlBar.descriptionsButton.dispose();
    this.player.controlBar.playbackRateMenuButton.dispose();
    this.player.controlBar.chaptersButton.dispose();
    this.player.controlBar.audioTrackButton.dispose();
    this.player.controlBar.pictureInPictureToggle.dispose();
    this.player.controlBar.subsCapsButton.dispose();
    this.player.controlBar.seekToLive.dispose();
    this.player.controlBar.liveDisplay.dispose();

    console.log(videojs.players);
    console.log(this.player);

    // this.DurationDisplay.innerHTML = this.player.duration();

    return this;
  }
}
