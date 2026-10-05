import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import {
  PhotoGallery,
  PhotoGalleryItem,
  PhotoGalleryProps,
} from "../src/components/PhotoGallery";

const SLIDE_SIZE = 100;

const items: PhotoGalleryItem[] = [
  { src: "/one.jpg", alt: "Photo one", caption: "Caption one" },
  { src: "/two.jpg", alt: "Photo two", caption: "Caption two" },
  { src: "/three.jpg", alt: "Photo three" },
  { src: "/four.jpg", alt: "Photo four", caption: "Caption four" },
  { src: "/five.jpg", alt: "Photo five", caption: "Caption five" },
];

beforeAll(() => {
  // jsdom doesn't do layout, so every element measures 0x0 and Embla collapses
  // all slides into a single snap. Give the slides a crude layout so that the
  // real carousel can be used to check navigation.
  const isSlide = (element: HTMLElement) => /__slide$/.test(element.className);

  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(
    SLIDE_SIZE
  );
  vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(
    SLIDE_SIZE
  );
  vi.spyOn(HTMLElement.prototype, "offsetTop", "get").mockReturnValue(0);
  vi.spyOn(HTMLElement.prototype, "offsetLeft", "get").mockImplementation(
    function (this: HTMLElement) {
      if (!isSlide(this) || !this.parentElement) return 0;
      return Array.from(this.parentElement.children).indexOf(this) * SLIDE_SIZE;
    }
  );

  // Embla reads the margins of the slides, which jsdom leaves empty
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const getPropertyValue = CSSStyleDeclaration.prototype.getPropertyValue;
  vi.spyOn(
    CSSStyleDeclaration.prototype,
    "getPropertyValue"
  ).mockImplementation(function (this: CSSStyleDeclaration, property) {
    const value = getPropertyValue.call(this, property);
    return value || (property.startsWith("margin-") ? "0px" : value);
  });

  // Embla relies on these observers which are not implemented in jsdom
  const ObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
  vi.stubGlobal("IntersectionObserver", ObserverMock);
  vi.stubGlobal("ResizeObserver", ObserverMock);
});

afterAll(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

/**
 * The lightbox is rendered in a portal, so queries scoped to the render
 * container only see the gallery itself and queries scoped to the dialog
 * only see the lightbox.
 */
function setup(props: Partial<PhotoGalleryProps> = {}) {
  const { container } = render(<PhotoGallery items={items} {...props} />);
  const gallery = within(container);
  const dialog = screen.getByRole("dialog");
  const lightbox = within(dialog);

  return {
    container,
    gallery,
    dialog,
    lightbox,
    indicator: () => gallery.getByLabelText("Current Photo"),
    thumbnail: (n: number) =>
      gallery.getByRole("button", { name: `Thumbnail ${n}` }),
    // The lightbox renders two sets of controls, one per breakpoint
    lightboxIndicator: () => lightbox.getAllByLabelText("Current Photo")[0],
    lightboxButton: (name: string) =>
      lightbox.getAllByRole("button", { name })[0],
    openLightbox: () =>
      userEvent.click(gallery.getByRole("button", { name: "Open lightbox" })),
  };
}

describe("PhotoGallery", () => {
  describe("carousel navigation", () => {
    it("should start on the first photo", () => {
      const { indicator } = setup();
      expect(indicator()).toHaveTextContent("1 of 5");
    });

    it("should go to the next and previous photo", async () => {
      const { gallery, indicator } = setup();

      await userEvent.click(
        gallery.getByRole("button", { name: "Next Photo" })
      );
      expect(indicator()).toHaveTextContent("2 of 5");

      await userEvent.click(
        gallery.getByRole("button", { name: "Next Photo" })
      );
      expect(indicator()).toHaveTextContent("3 of 5");

      await userEvent.click(
        gallery.getByRole("button", { name: "Previous Photo" })
      );
      expect(indicator()).toHaveTextContent("2 of 5");
    });

    it("should go to the last and first photo", async () => {
      const { gallery, indicator } = setup();

      await userEvent.click(
        gallery.getByRole("button", { name: "Last Photo" })
      );
      expect(indicator()).toHaveTextContent("5 of 5");

      await userEvent.click(
        gallery.getByRole("button", { name: "First Photo" })
      );
      expect(indicator()).toHaveTextContent("1 of 5");
    });

    it("should loop around at both ends", async () => {
      const { gallery, indicator } = setup();

      await userEvent.click(
        gallery.getByRole("button", { name: "Previous Photo" })
      );
      expect(indicator()).toHaveTextContent("5 of 5");

      await userEvent.click(
        gallery.getByRole("button", { name: "Next Photo" })
      );
      expect(indicator()).toHaveTextContent("1 of 5");
    });

    it("should show the caption of the current photo", async () => {
      const { gallery } = setup();
      expect(gallery.getByText("Caption one")).toBeInTheDocument();

      await userEvent.click(
        gallery.getByRole("button", { name: "Next Photo" })
      );
      expect(gallery.queryByText("Caption one")).toBeNull();
      expect(gallery.getByText("Caption two")).toBeInTheDocument();
    });
  });

  describe("syncing with thumbnails", () => {
    const selectedClass = "ilo--photo-gallery-thumbnails__thumbnail--selected";

    it("should render a thumbnail for each photo with the first one selected", () => {
      const { thumbnail } = setup();

      items.forEach((_, index) => {
        expect(thumbnail(index + 1)).toBeInTheDocument();
      });
      expect(thumbnail(1)).toHaveClass(selectedClass);
      expect(thumbnail(2)).not.toHaveClass(selectedClass);
    });

    it("should go to the photo of the clicked thumbnail", async () => {
      const { gallery, indicator, thumbnail } = setup();

      await userEvent.click(thumbnail(4));

      expect(indicator()).toHaveTextContent("4 of 5");
      expect(gallery.getByText("Caption four")).toBeInTheDocument();
      expect(thumbnail(4)).toHaveClass(selectedClass);
      expect(thumbnail(1)).not.toHaveClass(selectedClass);
    });

    it("should select the matching thumbnail when navigating with the controls", async () => {
      const { gallery, thumbnail } = setup();

      await userEvent.click(
        gallery.getByRole("button", { name: "Next Photo" })
      );
      expect(thumbnail(2)).toHaveClass(selectedClass);
      expect(thumbnail(1)).not.toHaveClass(selectedClass);

      await userEvent.click(
        gallery.getByRole("button", { name: "Last Photo" })
      );
      expect(thumbnail(5)).toHaveClass(selectedClass);
      expect(thumbnail(2)).not.toHaveClass(selectedClass);
    });
  });

  describe("props", () => {
    describe("items", () => {
      it("should use the same source everywhere when src is a string", async () => {
        const { container, thumbnail, lightbox, openLightbox } = setup();

        expect(
          container.querySelector(".ilo--photo-gallery__core__slide img")
        ).toHaveAttribute("src", "/one.jpg");
        expect(within(thumbnail(1)).getByRole("img")).toHaveAttribute(
          "src",
          "/one.jpg"
        );

        await openLightbox();
        lightbox.getAllByAltText("Photo one").forEach((image) => {
          expect(image).toHaveAttribute("src", "/one.jpg");
        });
      });

      it("should use the gallery, thumbnail and lightbox sources when src is an object", async () => {
        const { container, thumbnail, dialog, openLightbox } = setup({
          items: [
            {
              src: {
                gallery: "/gallery.jpg",
                thumbnail: "/thumbnail.jpg",
                lightbox: "/lightbox.jpg",
              },
              alt: "Separate sources",
            },
            ...items,
          ],
        });

        expect(
          container.querySelector(".ilo--photo-gallery__core__slide img")
        ).toHaveAttribute("src", "/gallery.jpg");
        expect(within(thumbnail(1)).getByRole("img")).toHaveAttribute(
          "src",
          "/thumbnail.jpg"
        );

        await openLightbox();
        expect(
          dialog.querySelector(".ilo--lightbox-gallery__core__slide img")
        ).toHaveAttribute("src", "/lightbox.jpg");
        expect(
          dialog.querySelector(".ilo--lightbox-gallery__thumbnails__slide img")
        ).toHaveAttribute("src", "/thumbnail.jpg");
      });

      it("should show the credit of a photo", async () => {
        const { container, dialog, openLightbox } = setup({
          items: [{ ...items[0], credit: "Photo by Jane" }, ...items.slice(1)],
        });

        expect(container.querySelector(".ilo--image--label")).toHaveTextContent(
          "Photo by Jane"
        );

        await openLightbox();
        expect(dialog.querySelector("figcaption")).toHaveTextContent(
          "Photo by Jane"
        );
      });
    });

    describe("fit", () => {
      const imageClass = "ilo--photo-gallery__core__image";

      it("should default to cover", () => {
        const { container } = setup();
        expect(container.querySelector(`.${imageClass}`)).toHaveClass(
          `${imageClass}--cover`
        );
      });

      it.each(["cover", "contain", "fill"] as const)(
        "should apply the %s modifier to every photo",
        (fit) => {
          const { container } = setup({ fit });
          const images = container.querySelectorAll(`.${imageClass}`);

          expect(images).toHaveLength(items.length);
          images.forEach((image) => {
            expect(image).toHaveClass(`${imageClass}--${fit}`);
          });
        }
      );
    });

    describe("captionView", () => {
      const captionSelector = ".ilo--photo-gallery__caption";

      it("should always render the caption area by default", async () => {
        const { container, thumbnail } = setup();
        expect(container.querySelector(captionSelector)).toHaveTextContent(
          "Caption one"
        );

        // Third photo has no caption
        await userEvent.click(thumbnail(3));
        expect(container.querySelector(captionSelector)).toBeInTheDocument();
        expect(container.querySelector(captionSelector)).toBeEmptyDOMElement();
      });

      it("should never render the caption when hidden", async () => {
        const { container, gallery, thumbnail } = setup({
          captionView: "hidden",
        });
        expect(container.querySelector(captionSelector)).toBeNull();
        expect(gallery.queryByText("Caption one")).toBeNull();

        await userEvent.click(thumbnail(2));
        expect(container.querySelector(captionSelector)).toBeNull();
      });

      it("should only render the caption area for photos with a caption when ifExists", async () => {
        const { container, thumbnail } = setup({ captionView: "ifExists" });
        expect(container.querySelector(captionSelector)).toHaveTextContent(
          "Caption one"
        );

        // Third photo has no caption
        await userEvent.click(thumbnail(3));
        expect(container.querySelector(captionSelector)).toBeNull();

        await userEvent.click(thumbnail(4));
        expect(container.querySelector(captionSelector)).toHaveTextContent(
          "Caption four"
        );
      });
    });

    describe("withKeyboardControls", () => {
      it("should not navigate with the arrow keys by default", async () => {
        const { indicator } = setup();

        await userEvent.keyboard("{ArrowRight}");
        expect(indicator()).toHaveTextContent("1 of 5");

        await userEvent.keyboard("{ArrowLeft}");
        expect(indicator()).toHaveTextContent("1 of 5");
      });

      it("should navigate with the arrow keys when enabled", async () => {
        const { indicator } = setup({ withKeyboardControls: true });

        await userEvent.keyboard("{ArrowRight}");
        expect(indicator()).toHaveTextContent("2 of 5");

        await userEvent.keyboard("{ArrowRight}");
        expect(indicator()).toHaveTextContent("3 of 5");

        await userEvent.keyboard("{ArrowLeft}");
        expect(indicator()).toHaveTextContent("2 of 5");
      });
    });
  });

  describe("lightbox", () => {
    const openClass = "ilo--lightbox--open";

    it("should be closed by default", () => {
      const { dialog, lightbox } = setup();

      expect(dialog).not.toHaveClass(openClass);
      expect(lightbox.queryByLabelText("Current Photo")).toBeNull();
      expect(lightbox.queryByRole("img")).toBeNull();
    });

    it("should open from the zoom button", async () => {
      const { dialog, lightbox, openLightbox } = setup();

      await openLightbox();

      expect(dialog).toHaveClass(openClass);
      expect(dialog).toHaveAttribute("aria-modal", "true");
      // Once in the carousel and once in the thumbnails
      items.forEach((item) => {
        expect(lightbox.getAllByAltText(item.alt)).toHaveLength(2);
      });
    });

    it("should open from the see all button", async () => {
      const { gallery, dialog } = setup();

      await userEvent.click(gallery.getByRole("button", { name: "See all" }));

      expect(dialog).toHaveClass(openClass);
    });

    it("should prevent the page from scrolling while open", async () => {
      const { lightbox, openLightbox } = setup();

      await openLightbox();
      expect(document.body.style.overflow).toBe("hidden");

      await userEvent.click(
        lightbox.getByRole("button", { name: "Close lightbox" })
      );
      expect(document.body.style.overflow).toBe("auto");
    });

    it("should close from the close button", async () => {
      const { dialog, lightbox, openLightbox } = setup();
      await openLightbox();

      await userEvent.click(
        lightbox.getByRole("button", { name: "Close lightbox" })
      );

      expect(dialog).not.toHaveClass(openClass);
      expect(lightbox.queryByRole("img")).toBeNull();
    });

    it("should close with the escape key", async () => {
      const { dialog, openLightbox } = setup();
      await openLightbox();

      await userEvent.keyboard("{Escape}");

      expect(dialog).not.toHaveClass(openClass);
    });

    it("should close when clicking outside of its content", async () => {
      const { dialog, lightbox, openLightbox } = setup();
      await openLightbox();

      // Clicks inside the content don't close it
      fireEvent.click(lightbox.getAllByAltText("Photo one")[0]);
      expect(dialog).toHaveClass(openClass);

      fireEvent.click(dialog);
      expect(dialog).not.toHaveClass(openClass);
    });

    it("should move focus into the lightbox when opened", async () => {
      const { lightbox, openLightbox } = setup();
      await openLightbox();

      expect(
        lightbox.getByRole("button", { name: "Close lightbox" })
      ).toHaveFocus();
    });

    it("should open on the photo that is current in the gallery", async () => {
      const { dialog, lightbox, thumbnail, lightboxIndicator, openLightbox } =
        setup();
      await userEvent.click(thumbnail(4));

      await openLightbox();

      expect(lightboxIndicator()).toHaveTextContent("4 of 5");
      expect(
        dialog.querySelector(".ilo--lightbox-gallery__extra-text")
      ).toHaveTextContent("Caption four");
      expect(lightbox.getByRole("button", { name: "Photo four" })).toHaveClass(
        "ilo--lightbox-gallery__thumbnails__image--selected"
      );
    });

    it("should navigate with its own controls", async () => {
      const { lightboxIndicator, lightboxButton, openLightbox } = setup();
      await openLightbox();

      await userEvent.click(lightboxButton("Next Photo"));
      expect(lightboxIndicator()).toHaveTextContent("2 of 5");

      await userEvent.click(lightboxButton("Last Photo"));
      expect(lightboxIndicator()).toHaveTextContent("5 of 5");

      await userEvent.click(lightboxButton("Previous Photo"));
      expect(lightboxIndicator()).toHaveTextContent("4 of 5");

      await userEvent.click(lightboxButton("First Photo"));
      expect(lightboxIndicator()).toHaveTextContent("1 of 5");
    });

    it("should navigate with its own thumbnails", async () => {
      const { dialog, lightbox, lightboxIndicator, openLightbox } = setup();
      const selectedClass =
        "ilo--lightbox-gallery__thumbnails__image--selected";
      await openLightbox();

      const thumbnail = lightbox.getByRole("button", { name: "Photo two" });
      await userEvent.click(thumbnail);

      expect(lightboxIndicator()).toHaveTextContent("2 of 5");
      expect(thumbnail).toHaveClass(selectedClass);
      expect(
        lightbox.getByRole("button", { name: "Photo one" })
      ).not.toHaveClass(selectedClass);
      expect(
        dialog.querySelector(".ilo--lightbox-gallery__extra-text")
      ).toHaveTextContent("Caption two");
    });

    it("should always navigate with the arrow keys", async () => {
      const { lightboxIndicator, openLightbox } = setup();
      await openLightbox();

      await userEvent.keyboard("{ArrowRight}");
      expect(lightboxIndicator()).toHaveTextContent("2 of 5");

      await userEvent.keyboard("{ArrowLeft}");
      expect(lightboxIndicator()).toHaveTextContent("1 of 5");
    });

    it("should keep the gallery in sync with the lightbox", async () => {
      const {
        gallery,
        lightbox,
        indicator,
        thumbnail,
        lightboxButton,
        openLightbox,
      } = setup();
      await openLightbox();

      await userEvent.click(lightboxButton("Next Photo"));
      await userEvent.click(lightboxButton("Next Photo"));
      expect(indicator()).toHaveTextContent("3 of 5");

      await userEvent.click(
        lightbox.getByRole("button", { name: "Photo five" })
      );
      await userEvent.click(
        lightbox.getByRole("button", { name: "Close lightbox" })
      );

      expect(indicator()).toHaveTextContent("5 of 5");
      expect(gallery.getByText("Caption five")).toBeInTheDocument();
      expect(thumbnail(5)).toHaveClass(
        "ilo--photo-gallery-thumbnails__thumbnail--selected"
      );
    });
  });
});
