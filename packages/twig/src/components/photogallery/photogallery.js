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

    // Embla instances
    this.mainCarousel = null;
    this.thumbCarousel = null;
    this.lightBoxCarousel = null;
    this.lightBoxThumbCarousel = null;

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

    /** Thubmanils */
    const thumbnailContainer = this.element.querySelector(
      `.${this.prefix}--photo-gallery-thumbnails`
    );
    this.thumbViewport = thumbnailContainer.querySelector(
      "[data-embla-thumbnails]"
    );
    this.thumbButtons = thumbnailContainer.querySelectorAll(
      "[data-thumbnail-index]"
    );
    this.seeAllBtn = thumbnailContainer.querySelector(
      '[data-action="see-all"]'
    );

    this.captionContainer = this.element.querySelector(
      `.${this.prefix}--photo-gallery__caption`
    );

    /** Lightbox */
    this.zoomBtn = this.element.querySelector('[data-action="open-lightbox"]');
    this.lightbox = this.element.querySelector("[data-lightbox]");
    this.lightboxGalleryViewport = this.lightbox.querySelector(
      "[data-embla-lightbox-viewport]"
    );
    this.lightBoxGallerryThumbsViewport = this.lightbox.querySelector(
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

    return this;
  }

  /**
   * Register state change handlers
   *
   * @returns {PhotoGallery}
   */
  registerStateHandlers() {
    this.registerStateHandler("currentIndex", (index) => {
      this.updateUI(index);
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
   * Initialize Embla carousels
   *
   * @returns {PhotoGallery}
   */
  initializeCarousels() {
    const isRTL = document.dir === "rtl";

    if (this.viewport) {
      this.mainCarousel = EmblaCarousel(this.viewport, {
        loop: true,
        direction: isRTL ? "rtl" : "ltr",
        duration: 30,
      });

      this.mainCarousel.on("select", this.onSelect);
    }

    if (this.thumbViewport) {
      this.thumbCarousel = EmblaCarousel(this.thumbViewport, {
        containScroll: "keepSnaps",
        direction: isRTL ? "rtl" : "ltr",
        dragFree: true,
        duration: 30,
      });
    }

    if (this.lightboxGalleryViewport) {
      this.lightBoxCarousel = EmblaCarousel(this.lightboxGalleryViewport, {
        loop: true,
        direction: isRTL ? "rtl" : "ltr",
        duration: 30,
      });
    }

    if (this.lightBoxGallerryThumbsViewport) {
      this.lightBoxCarouselThumb = EmblaCarousel(
        this.lightBoxGallerryThumbsViewport,
        {
          containScroll: "keepSnaps",
          direction: isRTL ? "rtl" : "ltr",
          dragFree: true,
          duration: 30,
        }
      );
    }

    if (this.controls.totals.total.length && this.slides) {
      this.controls.totals.total.forEach((el) => {
        el.textContent = this.slides.length;
      });
    }

    this.updateCaption(this.state.currentIndex);
    this.updateUI(this.state.currentIndex);

    return this;
  }

  /**
   * Enable event listeners
   *
   * @returns {PhotoGallery}
   */
  enable() {
    if (!this.mainCarousel) return;

    if (this.controls.prev.length) {
      this.controls.prev.forEach((btn) => {
        btn.addEventListener("click", this.mainCarousel.scrollPrev);
      });
    }

    if (this.controls.next.length) {
      this.controls.next.forEach((btn) => {
        btn.addEventListener("click", this.mainCarousel.scrollNext);
      });
    }

    if (this.controls.first.length) {
      this.controls.first.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.mainCarousel.scrollTo(0);
        });
      });
    }

    if (this.controls.last.length) {
      this.controls.last.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.mainCarousel.scrollTo(this.slides.length - 1);
        });
      });
    }

    if (this.thumbButtons) {
      this.thumbButtons.forEach((btn) => {
        btn.addEventListener("click", this.onThumbnailClick);
      });
    }

    if (this.lightboxThumbButtons) {
      this.lightboxThumbButtons.forEach((btn) => {
        btn.addEventListener("click", this.onThumbnailClick);
      });
    }

    if (this.seeAllBtn) {
      this.seeAllBtn.addEventListener("click", () => {
        this.state.isLightboxOpen = true;
      });
    }

    if (this.zoomBtn) {
      this.zoomBtn.addEventListener("click", () => {
        this.state.isLightboxOpen = true;
      });
    }

    if (this.lightboxMobileCaptionExpandBtn && this.lightboxMobileCaption) {
      this.lightboxMobileCaptionExpandBtn.addEventListener("click", (event) => {
        const isExpanded =
          event.currentTarget.getAttribute("aria-expanded") === "true";
        event.currentTarget.setAttribute("aria-expanded", String(!isExpanded));
        this.lightBoxMobileCaptionContainer.classList.toggle(
          `${this.prefix}--photo-gallery-expandable-caption--expanded`
        );
      });
    }
    if (this.state.withKeyboardControls) {
      document.addEventListener("keydown", this.onKeyDown);
    }

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
    const dataset = event.currentTarget.dataset;
    const index = parseInt(
      dataset.thumbnailIndex || dataset.lightboxThumbnailIndex,
      10
    );

    if (this.mainCarousel && !Number.isNaN(index)) {
      this.mainCarousel.scrollTo(index);
    }
  }

  /**
   * Handle keyboard navigation
   *
   * @param {KeyboardEvent} event
   */
  onKeyDown(event) {
    if (!this.state.withKeyboardControls || this.state.isLightboxOpen) return;

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
   * Update UI based on current index
   *
   * @param {number} index
   */
  updateUI(index) {
    if (this.controls.totals.current.length) {
      this.controls.totals.current.forEach((el) => {
        el.textContent = index + 1;
      });
    }

    // Update thumbnail selection
    if (this.thumbButtons) {
      this.thumbButtons.forEach((btn, i) => {
        const baseClass = `${this.prefix}--photo-gallery-thumbnails__thumbnail`;
        const lightboxBtnBaseClass = `${this.prefix}--lightbox-gallery__thumbnails__image`;
        const lightboxBtn = this.lightboxThumbButtons[i];
        if (index === i) {
          btn.classList.add(`${baseClass}--selected`);

          if (lightboxBtn) {
            lightboxBtn.classList.add(`${lightboxBtnBaseClass}--selected`);
          }
        } else {
          btn.classList.remove(`${baseClass}--selected`);

          if (lightboxBtn) {
            lightboxBtn.classList.remove(`${lightboxBtnBaseClass}--selected`);
          }
        }
      });

      if (this.thumbCarousel) {
        this.thumbCarousel.scrollTo(index);
      }
    }

    if (this.lightBoxCarousel) {
      this.lightBoxCarousel.scrollTo(index);
    }

    if (this.lightBoxCarouselThumb) {
      this.lightBoxCarouselThumb.scrollTo(index);
    }

    this.updateCaption(index);
  }

  /**
   * Update caption text
   *
   * @param {number} index
   */
  updateCaption(index) {
    const slide = this.slides[index];
    if (!slide) return;

    const caption = slide.querySelector(
      `.ilo--photo-gallery__core__caption-raw`
    ).textContent;

    if (this.lightboxDesktopCaption) {
      this.lightboxDesktopCaption.textContent = caption ? caption : "";
    }

    if (this.lightboxMobileCaption) {
      this.lightboxMobileCaption.textContent = caption ? caption : "";

      if (this.lightboxMobileCaptionExpandBtn) {
        const isCaptionOverflowing =
          this.lightboxMobileCaption.scrollWidth >
          this.lightboxMobileCaption.clientWidth;

        this.lightboxMobileCaptionExpandBtn.style.display = isCaptionOverflowing
          ? "block"
          : "none";
      }
    }

    if (!this.captionContainer || this.state.captionView === "hidden") return;

    if (
      this.state.captionView === "visible" ||
      (this.state.captionView === "ifExists" && caption)
    ) {
      this.captionContainer.textContent = caption ? caption : "";
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
    document.body.style.overflow = "hidden";

    const closeBtn = this.lightbox.querySelector(
      '[data-action="close-lightbox"]'
    );

    if (closeBtn) {
      closeBtn.addEventListener(
        "click",
        () => {
          this.state.isLightboxOpen = false;
        },
        { once: true }
      );
    }

    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          this.state.isLightboxOpen = false;
        }
      },
      { once: true }
    );
  }

  /**
   * Close lightbox
   */
  closeLightbox() {
    if (!this.lightbox) return;

    this.lightbox.classList.remove(`${this.prefix}--lightbox--open`);
    this.lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}
