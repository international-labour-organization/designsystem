/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classNames from "classnames";

import { PhotoGalleryItem } from "./PhotoGallery";
import { useGlobalSettings } from "../../hooks";
import {
  PhotoGalleryControls,
  useKeyboardControls,
  usePhotoGalleryControls,
} from "./PhotoGalleryControls";
import { ExpandableCaption } from "./ExpandableCaption";

interface LightBoxProps {
  items: PhotoGalleryItem[];
  parentIndex?: number;
  onSelect: (index: number) => void;
  isActive?: boolean;
}

function LightBoxGallery({
  items,
  parentIndex = 0,
  onSelect: parentOnSelect,
  isActive,
}: LightBoxProps) {
  const { prefix } = useGlobalSettings();
  const [currentIndex, setCurrentIndex] = useState(parentIndex);

  const [emblaRef, emblaAPI] = useEmblaCarousel({
    loop: true,
    direction: document.dir === "rtl" ? "rtl" : "ltr",
    duration: 30,
  });
  const [thumbRef, thumbAPI] = useEmblaCarousel({
    containScroll: "keepSnaps",
    direction: document.dir === "rtl" ? "rtl" : "ltr",
    dragFree: true,
    duration: 30,
  });
  const controls = usePhotoGalleryControls(emblaAPI);

  const baseClass = `${prefix}--lightbox-gallery`;
  const coreClass = `${baseClass}__core`;
  const thumbnailClass = `${baseClass}__thumbnails`;

  const onSelect = () => {
    if (!emblaAPI || !thumbAPI) return;
    const index = emblaAPI.selectedScrollSnap();
    setCurrentIndex(index);
    parentOnSelect(index);
    thumbAPI.scrollTo(index);
  };

  const onThumbnailClick = (index: number) => {
    if (!emblaAPI || !thumbAPI) return;
    emblaAPI.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaAPI) return;

    emblaAPI.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaAPI.off("select", onSelect);
    };
  }, [emblaAPI]);

  useEffect(() => {
    if (!emblaAPI) return;

    // Sync parent index on
    emblaAPI.scrollTo(parentIndex, true);
  }, [emblaAPI]);

  useKeyboardControls(emblaAPI, isActive);

  return (
    <div className={baseClass}>
      <div className={coreClass}>
        <div className={`${coreClass}__viewport`} ref={emblaRef} tabIndex={0}>
          <div className={`${coreClass}__container`}>
            {items.map((item, index) => (
              <div className={`${coreClass}__slide`} key={index}>
                <figure className={`${coreClass}__image-wrapper`}>
                  <img
                    src={
                      typeof item.src === "string"
                        ? item.src
                        : item.src.lightbox
                    }
                    alt={item.alt || item.credit || `Photo ${index + 1}`}
                  />
                  {item.credit && (
                    <figcaption
                      className={`${coreClass}__image-wrapper-credit`}
                    >
                      <span
                        className={`${coreClass}__image-wrapper-credit-text`}
                      >
                        {item.credit}
                      </span>
                      <span
                        className={`${coreClass}__image-wrapper-credit-corner`}
                      ></span>
                    </figcaption>
                  )}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${baseClass}__bar`}>
        {items[currentIndex]?.caption && isActive && (
          <ExpandableCaption
            caption={items[currentIndex].caption!}
            className={`${baseClass}__caption`}
          />
        )}
        <div className={`${baseClass}__extra`}>
          <p className={`${baseClass}__extra-text`}>
            {items[currentIndex]?.caption}
          </p>
          <PhotoGalleryControls
            onNext={controls.onNextButtonClick}
            onPrev={controls.onPrevButtonClick}
            onFirst={controls.onFirstButtonClick}
            onLast={controls.onLastButtonClick}
            indicator={{ current: currentIndex + 1, total: items.length }}
          />
        </div>
        <div className={thumbnailClass}>
          <div className={`${thumbnailClass}__carousel`} ref={thumbRef}>
            <div className={`${thumbnailClass}__container`}>
              {items.map((item, index) => (
                <div className={`${thumbnailClass}__slide`} key={index}>
                  <button
                    className={classNames(`${thumbnailClass}__image`, {
                      [`${thumbnailClass}__image--selected`]:
                        index === currentIndex,
                    })}
                    onClick={() => onThumbnailClick(index)}
                  >
                    <img
                      src={
                        typeof item.src === "string"
                          ? item.src
                          : item.src.thumbnail
                      }
                      alt={item.alt || item.credit || `Thumbnail ${index + 1}`}
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${baseClass}__controls`}>
          <PhotoGalleryControls
            onNext={controls.onNextButtonClick}
            onPrev={controls.onPrevButtonClick}
            onFirst={controls.onFirstButtonClick}
            onLast={controls.onLastButtonClick}
            indicator={{ current: currentIndex + 1, total: items.length }}
          />
        </div>
      </div>
    </div>
  );
}

export { LightBoxGallery };
