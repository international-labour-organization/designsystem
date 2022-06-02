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
    this.cacheDomReferences().setupHandlers().enable().start();

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
    this.VideoElement = this.element.querySelector(`.${this.controlsprefix}--video--element`);
    this.PlayPauseButton = this.element.querySelector(`.${this.controlsprefix}--play`);
    this.DurationDisplay = this.element.querySelector(`.${this.controlsprefix}--duration`);
    this.VolumeButton = this.element.querySelector(`.${this.controlsprefix}--showvolume`);
    this.SetVolumeSlider = this.element.querySelector(`.${this.controlsprefix}--setvolume`);
    this.PlayheadSlider = this.element.querySelector(`.${this.controlsprefix}--progress-playhead`);
    this.ProgressDisplay = this.element.querySelector(`.${this.controlsprefix}--progress-current`);
    this.LoadedDisplay = this.element.querySelector(`.${this.controlsprefix}--progress-loaded`);
    this.FullScreenButton = this.element.querySelector(`.${this.controlsprefix}--fullscreen`);
    this.PlayedDisplay = this.element.querySelector(`.${this.controlsprefix}--progress-played`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} ReadMore A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.PlayPauseButtonClick = this.PlayPauseButtonClick.bind(this);
    this.FullScreenButtonClick = this.FullScreenButtonClick.bind(this);
    this.VolumeButtonClick = this.VolumeButtonClick.bind(this);
    this.VolumeButtonHover = this.VolumeButtonHover.bind(this);
    this.VolumeButtonUnHover = this.VolumeButtonUnHover.bind(this);
    this.VolumeSliderChange = this.VolumeSliderChange.bind(this);
    this.PlayheadSliderSliderChange = this.PlayheadSliderChange.bind(this);

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.PlayPauseButton.addEventListener(EVENTS.CLICK, () => this.PlayPauseButtonClick());
    this.SetVolumeSlider.addEventListener(EVENTS.CHANGE, () => this.VolumeSliderChange());
    this.PlayheadSlider.addEventListener(EVENTS.CHANGE, () => this.PlayheadSliderChange());
    this.FullScreenButton.addEventListener(EVENTS.CLICK, () => this.FullScreenButtonClick());
    this.VolumeButton.addEventListener(EVENTS.CLICK, () => this.VolumeButtonClick());
    this.VolumeButton.addEventListener(EVENTS.MOUSEOVER, () => this.VolumeButtonHover());
    this.VolumeButton.addEventListener(EVENTS.MOUSEOUT, () => this.VolumeButtonUnHover());

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
      preload: 'auto',
    });

    return this;
  }
}
