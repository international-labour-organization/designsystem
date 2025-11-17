import EmblaCarousel from "embla-carousel";
import { StatefulComponent } from "../../utils";

/**
 * PhotoGallery component that displays a carousel of images with thumbnails and lightbox
 *
 * @extends StatefulComponent
 * @class PhotoGallery
 */
export default class PhotoGallery extends StatefulComponent {
  /**
   * PhotoGallery constructor
   *
   * @param {HTMLElement} element - The root element of the component
   */
  constructor(element) {
    const initialState = {
      currentIndex: 0,
      isLightboxOpen: false,
      withKeyboardControls: element.dataset.withKeyboardControls === "true",
      captionView: element.dataset.captionView || "visible",
    };

    super(element, initialState);

    this.prefix = element.dataset.prefix;
    this.seeAllLabel = element.dataset.seeAllLabel || "See all";

    // Constants
    this.CAROUSEL_DURATION = 30;

    // Embla instances
    this.mainCarousel = null;
    this.thumbCarousel = null;
    this.lightBoxCarousel = null;
    this.lightBoxThumbCarousel = null;

    // Event listener references for cleanup
    this.eventListeners = new Map();
    this.boundCloseLightbox = null;
    this.boundEscapeHandler = null;

    this.init();
  }

  /**
   * Initialize the component
   *
   * @returns {PhotoGallery}
   */
  init() {
    this.cacheDomReferences()
      .setupHandlers()
      .registerStateHandlers()
      .initializeCarousels()
      .enable();

    return this;
  }

  /**
   * Cache DOM element references
   *
   * @returns {PhotoGallery}
   */
  cacheDomReferences() {
    /** Main Carousel */
    this.viewport = this.element.querySelector("[data-embla-viewport]");
    this.slides = this.element.querySelectorAll("[data-index]");

    /** Controls */
    this.controls = {
      prev: this.element.querySelectorAll(`[data-action="prev"]`),
      next: this.element.querySelectorAll(`[data-action="next"]`),
      first: this.element.querySelectorAll(`[data-action="first"]`),
      last: this.element.querySelectorAll(`[data-action="last"]`),
      totals: {
        current: this.element.querySelectorAll(`[data-current]`),
        total: this.element.querySelectorAll(`[data-total]`),
      },
    };

    /** Thumbnails */
    const thumbnailContainer = this.element.querySelector(
      `.${this.prefix}--photo-gallery-thumbnails`
    );

    if (thumbnailContainer) {
      this.thumbViewport = thumbnailContainer.querySelector(
        "[data-embla-thumbnails]"
      );
      this.thumbButtons = thumbnailContainer.querySelectorAll(
        "[data-thumbnail-index]"
      );
      this.seeAllBtn = thumbnailContainer.querySelector(
        '[data-action="see-all"]'
      );
    }

    this.captionContainer = this.element.querySelector(
      `.${this.prefix}--photo-gallery__caption`
    );

    /** Lightbox */
    this.zoomBtn = this.element.querySelector('[data-action="open-lightbox"]');
    this.lightbox = this.element.querySelector("[data-lightbox]");

    if (this.lightbox) {
      this.lightboxGalleryViewport = this.lightbox.querySelector(
        "[data-embla-lightbox-viewport]"
      );
      this.lightBoxGalleryThumbsViewport = this.lightbox.querySelector(
        "[data-embla-lightbox-thumbs]"
      );
      this.lightboxThumbButtons = this.lightbox.querySelectorAll(
        "[data-lightbox-thumbnail-index]"
      );
      this.lightboxDesktopCaption = this.lightbox.querySelector(
        "[data-lightbox-caption-text]"
      );
      this.lightBoxMobileCaptionContainer = this.lightbox.querySelector(
        `.${this.prefix}--photo-gallery-expandable-caption`
      );
      this.lightboxMobileCaption = this.lightbox.querySelector(
        "[data-caption-text-mobile]"
      );
      this.lightboxMobileCaptionExpandBtn = this.lightbox.querySelector(
        "[data-action='expand-mobile-caption']"
      );
    }

    return this;
  }

  /**
   * Bind event handlers
   *
   * @returns {PhotoGallery}
   */
  setupHandlers() {
    this.onSelect = this.onSelect.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMobileCaptionToggle = this.onMobileCaptionToggle.bind(this);
    this.onOpenLightbox = this.onOpenLightbox.bind(this);

    return this;
  }

  /**
   * Register state change handlers
   *
   * @returns {PhotoGallery}
   */
  registerStateHandlers() {
    this.registerStateHandler("currentIndex", (index) => {
      this.sync(index);
    });

    this.registerStateHandler("isLightboxOpen", (isOpen) => {
      if (isOpen) {
        this.openLightbox();
      } else {
        this.closeLightbox();
      }
    });

    return this;
  }

  /**
   * Get carousel options
   *
   * @param {string} type - Carousel type ('main', 'thumb', 'lightbox', 'lightboxThumb')
   * @returns {Object}
   * @private
   */
  getCarouselOptions(type) {
    const isRTL = document.dir === "rtl";
    const baseOptions = {
      direction: isRTL ? "rtl" : "ltr",
      duration: this.CAROUSEL_DURATION,
    };

    const typeOptions = {
      main: { loop: true },
      thumb: { containScroll: "keepSnaps", dragFree: true },
      lightbox: { loop: true },
      lightboxThumb: { containScroll: "keepSnaps", dragFree: true },
    };

    return { ...baseOptions, ...typeOptions[type] };
  }

  /**
   * Initialize Embla carousels
   *
   * @returns {PhotoGallery}
   */
  initializeCarousels() {
    try {
      if (this.viewport) {
        this.mainCarousel = EmblaCarousel(
          this.viewport,
          this.getCarouselOptions("main")
        );
        this.mainCarousel.on("select", this.onSelect);
      }

      if (this.thumbViewport) {
        this.thumbCarousel = EmblaCarousel(
          this.thumbViewport,
          this.getCarouselOptions("thumb")
        );
      }

      if (this.lightboxGalleryViewport) {
        this.lightBoxCarousel = EmblaCarousel(
          this.lightboxGalleryViewport,
          this.getCarouselOptions("lightbox")
        );
      }

      if (this.lightBoxGalleryThumbsViewport) {
        this.lightBoxThumbCarousel = EmblaCarousel(
          this.lightBoxGalleryThumbsViewport,
          this.getCarouselOptions("lightboxThumb")
        );
      }

      if (this.controls.totals.total.length && this.slides) {
        this.controls.totals.total.forEach((el) => {
          el.textContent = this.slides.length;
        });
      }

      this.syncCaption(this.state.currentIndex);
      this.sync(this.state.currentIndex);
    } catch (error) {
      console.error("Carousel initialization failed:", error);
    }

    return this;
  }

  /**
   * Add event listener and store reference for cleanup
   *
   * @param {Element|Document} element
   * @param {string} event
   * @param {Function} handler
   * @param {Object} options
   * @private
   */
  addTrackedListener(element, event, handler, options = {}) {
    if (!element) return;

    element.addEventListener(event, handler, options);

    if (!this.eventListeners.has(element)) {
      this.eventListeners.set(element, []);
    }

    this.eventListeners.get(element).push({ event, handler, options });
  }

  /**
   * Enable event listeners
   *
   * @returns {PhotoGallery}
   */
  enable() {
    if (!this.mainCarousel) {
      console.warn("Main carousel not initialized");
      return this;
    }

    // Control buttons
    if (this.controls.prev.length) {
      this.controls.prev.forEach((btn) => {
        this.addTrackedListener(btn, "click", () =>
          this.mainCarousel.scrollPrev()
        );
      });
    }

    if (this.controls.next.length) {
      this.controls.next.forEach((btn) => {
        this.addTrackedListener(btn, "click", () =>
          this.mainCarousel.scrollNext()
        );
      });
    }

    if (this.controls.first.length) {
      this.controls.first.forEach((btn) => {
        this.addTrackedListener(btn, "click", () => {
          this.mainCarousel.scrollTo(0);
        });
      });
    }

    if (this.controls.last.length) {
      this.controls.last.forEach((btn) => {
        this.addTrackedListener(btn, "click", () => {
          this.mainCarousel.scrollTo(this.slides.length - 1);
        });
      });
    }

    // Thumbnail buttons
    if (this.thumbButtons) {
      this.thumbButtons.forEach((btn) => {
        this.addTrackedListener(btn, "click", this.onThumbnailClick);
      });
    }

    if (this.lightboxThumbButtons) {
      this.lightboxThumbButtons.forEach((btn) => {
        this.addTrackedListener(btn, "click", this.onThumbnailClick);
      });
    }

    // Lightbox triggers
    if (this.seeAllBtn) {
      this.addTrackedListener(this.seeAllBtn, "click", this.onOpenLightbox);
    }

    if (this.zoomBtn) {
      this.addTrackedListener(this.zoomBtn, "click", this.onOpenLightbox);
    }

    // Mobile caption expand
    if (this.lightboxMobileCaptionExpandBtn && this.lightboxMobileCaption) {
      this.addTrackedListener(
        this.lightboxMobileCaptionExpandBtn,
        "click",
        this.onMobileCaptionToggle
      );
    }

    // Keyboard navigation
    this.addTrackedListener(document, "keydown", this.onKeyDown);

    return this;
  }

  /**
   * Handle carousel selection change
   */
  onSelect() {
    if (!this.mainCarousel) return;
    const index = this.mainCarousel.selectedScrollSnap();
    this.state.currentIndex = index;
  }

  /**
   * Handle thumbnail click
   *
   * @param {Event} event
   */
  onThumbnailClick(event) {
    if (!this.mainCarousel) return;

    const dataset = event.currentTarget.dataset;
    const index = parseInt(
      dataset.thumbnailIndex || dataset.lightboxThumbnailIndex,
      10
    );

    if (!Number.isNaN(index)) {
      this.mainCarousel.scrollTo(index);
    }
  }

  /**
   * Handle lightbox open
   */
  onOpenLightbox() {
    this.state.isLightboxOpen = true;
  }

  /**
   * Handle mobile caption toggle
   *
   * @param {Event} event
   */
  onMobileCaptionToggle(event) {
    const isExpanded =
      event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!isExpanded));
    this.lightBoxMobileCaptionContainer.classList.toggle(
      `${this.prefix}--photo-gallery-expandable-caption--expanded`
    );
  }

  /**
   * Handle keyboard navigation
   *
   * @param {KeyboardEvent} event
   */
  onKeyDown(event) {
    if (!this.mainCarousel) return;
    if (!this.state.withKeyboardControls && !this.state.isLightboxOpen) return;

    switch (event.key) {
      case "ArrowLeft":
        this.mainCarousel.scrollPrev();
        event.preventDefault();
        break;
      case "ArrowRight":
        this.mainCarousel.scrollNext();
        event.preventDefault();
        break;
    }
  }

  /**
   * Update selected state for thumbnail buttons
   *
   * @param {number} index
   * @param {NodeList} buttons
   * @param {string} baseClass
   * @private
   */
  updateThumbnailSelection(index, buttons, baseClass) {
    if (!buttons) return;

    buttons.forEach((btn, i) => {
      if (index === i) {
        btn.classList.add(`${baseClass}--selected`);
      } else {
        btn.classList.remove(`${baseClass}--selected`);
      }
    });
  }

  /**
   * Sync the rest of UI based on current index
   *
   * @param {number} index
   */
  sync(index) {
    // Update current index display
    if (this.controls.totals.current.length) {
      this.controls.totals.current.forEach((el) => {
        el.textContent = index + 1;
      });
    }

    // Update thumbnail selection
    if (this.thumbButtons) {
      this.updateThumbnailSelection(
        index,
        this.thumbButtons,
        `${this.prefix}--photo-gallery-thumbnails__thumbnail`
      );

      if (this.thumbCarousel) {
        this.thumbCarousel.scrollTo(index);
      }
    }

    // Update lightbox thumbnail selection
    if (this.lightboxThumbButtons) {
      this.updateThumbnailSelection(
        index,
        this.lightboxThumbButtons,
        `${this.prefix}--lightbox-gallery__thumbnails__image`
      );
    }

    // Sync lightbox carousels
    if (this.lightBoxCarousel) {
      this.lightBoxCarousel.scrollTo(index);
    }

    if (this.lightBoxThumbCarousel) {
      this.lightBoxThumbCarousel.scrollTo(index);
    }

    this.syncCaption(index);
  }

  /**
   * Update captions
   *
   * @param {number} index
   */
  syncCaption(index) {
    const slide = this.slides[index];
    if (!slide) return;

    const captionElement = slide.querySelector(
      `.${this.prefix}--photo-gallery__core__caption-raw`
    );
    const caption = captionElement ? captionElement.textContent : "";

    // Update lightbox captions
    if (this.lightboxDesktopCaption) {
      this.lightboxDesktopCaption.textContent = caption;
    }

    if (this.lightboxMobileCaption) {
      this.lightboxMobileCaption.textContent = caption;

      if (this.lightboxMobileCaptionExpandBtn) {
        const isCaptionOverflowing =
          this.lightboxMobileCaption.scrollWidth >
          this.lightboxMobileCaption.clientWidth;

        this.lightboxMobileCaptionExpandBtn.style.display = isCaptionOverflowing
          ? "block"
          : "none";
      }
    }

    // Update main caption container
    if (!this.captionContainer || this.state.captionView === "hidden") return;

    if (
      this.state.captionView === "visible" ||
      (this.state.captionView === "ifExists" && caption)
    ) {
      this.captionContainer.textContent = caption;
      this.captionContainer.style.display = caption ? "block" : "none";
    } else {
      this.captionContainer.style.display = "none";
    }
  }

  /**
   * Open lightbox
   */
  openLightbox() {
    if (!this.lightbox) return;

    this.lightbox.classList.add(`${this.prefix}--lightbox--open`);
    this.lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeBtn = this.lightbox.querySelector(
      '[data-action="close-lightbox"]'
    );

    // Create bound handlers for cleanup
    this.boundCloseLightbox = () => {
      this.state.isLightboxOpen = false;
    };

    this.boundEscapeHandler = (event) => {
      if (event.key === "Escape") {
        this.state.isLightboxOpen = false;
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", this.boundCloseLightbox);
    }

    document.addEventListener("keydown", this.boundEscapeHandler);

    // Focus management - focus the lightbox
    this.lightbox.focus();
  }

  /**
   * Close lightbox
   */
  closeLightbox() {
    if (!this.lightbox) return;

    this.lightbox.classList.remove(`${this.prefix}--lightbox--open`);
    this.lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Clean up event listeners
    const closeBtn = this.lightbox.querySelector(
      '[data-action="close-lightbox"]'
    );

    if (closeBtn && this.boundCloseLightbox) {
      closeBtn.removeEventListener("click", this.boundCloseLightbox);
    }

    if (this.boundEscapeHandler) {
      document.removeEventListener("keydown", this.boundEscapeHandler);
    }

    this.boundCloseLightbox = null;
    this.boundEscapeHandler = null;

    // Return focus to trigger element
    if (this.zoomBtn) {
      this.zoomBtn.focus();
    }
  }

  /**
   * Destroy the component and clean up resources
   *
   * @returns {PhotoGallery}
   */
  destroy() {
    // Remove all tracked event listeners
    this.eventListeners.forEach((listeners, element) => {
      listeners.forEach(({ event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
    });
    this.eventListeners.clear();

    // Clean up lightbox listeners
    if (this.boundCloseLightbox || this.boundEscapeHandler) {
      this.closeLightbox();
    }

    // Destroy carousels
    if (this.mainCarousel) {
      this.mainCarousel.off("select", this.onSelect);
      this.mainCarousel.destroy();
      this.mainCarousel = null;
    }

    if (this.thumbCarousel) {
      this.thumbCarousel.destroy();
      this.thumbCarousel = null;
    }

    if (this.lightBoxCarousel) {
      this.lightBoxCarousel.destroy();
      this.lightBoxCarousel = null;
    }

    if (this.lightBoxThumbCarousel) {
      this.lightBoxThumbCarousel.destroy();
      this.lightBoxThumbCarousel = null;
    }

    // Reset body overflow in case lightbox was open
    document.body.style.overflow = "";

    return this;
  }
}
