/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import useEmblaCarousel from "embla-carousel-react";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { Image } from "../Image";
import { ImgHTMLAttributes, useEffect, useState } from "react";
import {
  PhotoGalleryControls,
  useKeyboardControls,
  usePhotoGalleryControls,
} from "./PhotoGalleryControls";
import { PhotoGalleryThumbnails } from "./PhotoGalleryThumbnails";
import { LightBox } from "./LightBox";
import { LightBoxGallery } from "./LightBoxGallery";
import { Icon } from "../Icon";

export type PhotoGalleryItem = ImgHTMLAttributes<HTMLImageElement> & {
  credit?: string;
  caption?: string;
  src: string;
  alt: string;
};

export interface PhotoGalleryProps {
  items: PhotoGalleryItem[];
  fit?: "cover" | "contain" | "fill";
  withKeyboardControls?: boolean;
  thubmnailRows?: 1 | 2;
  captionView?: "visible" | "hidden" | "ifExists";
}

function PhotoGallery({
  items,
  fit = "cover",
  withKeyboardControls = false,
  thubmnailRows = 1,
  captionView = "visible",
}: PhotoGalleryProps) {
  const { prefix } = useGlobalSettings();
  const [emblaRef, emblaAPI] = useEmblaCarousel({
    loop: true,
    direction: document.dir === "rtl" ? "rtl" : "ltr",
    duration: 30,
  });
  const controls = usePhotoGalleryControls(emblaAPI);
  const [index, setIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const baseClass = `${prefix}--photo-gallery`;
  const coreClass = `${baseClass}__core`;

  const onSelect = () => {
    if (!emblaAPI) return;
    setIndex(emblaAPI.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaAPI) return;

    emblaAPI.on("select", onSelect);

    return () => {
      emblaAPI.off("select", onSelect);
    };
  }, [emblaAPI]);

  useKeyboardControls(emblaAPI, withKeyboardControls && !isLightboxOpen);

  return (
    <div className={baseClass} tabIndex={0}>
      <div className={`${baseClass}__core`}>
        <button
          className={`${coreClass}__zoom`}
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="Open lightbox"
        >
          <Icon name="fullscreen" size={32} />
        </button>
        <div className={`${coreClass}__controls`}>
          <PhotoGalleryControls
            onNext={controls.onNextButtonClick}
            onPrev={controls.onPrevButtonClick}
            onFirst={controls.onFirstButtonClick}
            onLast={controls.onLastButtonClick}
            indicator={{ current: index + 1, total: items.length }}
          />
        </div>
        <div className={`${coreClass}__viewport`} ref={emblaRef}>
          <div className={`${coreClass}__container`}>
            {items.map((item, index) => (
              <div className={`${coreClass}__slide`} key={index}>
                <div
                  className={classNames(
                    `${coreClass}__image`,
                    `${coreClass}__image--${fit}`
                  )}
                >
                  <Image
                    credit={item.credit}
                    url={[
                      {
                        src: item.src,
                        breakpoint: 800,
                      },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {captionView !== "hidden" &&
        (captionView === "visible" ||
        (captionView === "ifExists" && items[index].caption) ? (
          <div className={`${baseClass}__caption`}>{items[index].caption}</div>
        ) : null)}
      <PhotoGalleryThumbnails
        columns={thubmnailRows}
        items={items}
        selected={index}
        onSelect={(index) => {
          emblaAPI?.scrollTo(index);
        }}
        onSeeAll={() => {
          setIsLightboxOpen(true);
        }}
      />
      <LightBox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      >
        <LightBoxGallery
          items={items}
          parentIndex={index}
          onSelect={(index) => {
            emblaAPI?.scrollTo(index);
          }}
          isActive={isLightboxOpen}
        />
      </LightBox>
    </div>
  );
}

export { PhotoGallery };
