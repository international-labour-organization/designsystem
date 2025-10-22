import useEmblaCarousel from "embla-carousel-react";
import { PictureProps } from "../Picture";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { Image } from "../Image";
import { useEffect, useState } from "react";
import {
  PhotoGalleryControls,
  usePhotoGalleryControls,
} from "./PhotoGalleryControls";
import { PhotoGalleryThumbnails } from "./PhotoGalleryThumbnails";
import { LightBox } from "./LightBox";
import { LightBoxGallery } from "./LightBoxGallery";

export type PhotoGalleryItem = PictureProps & {
  credit?: string;
  caption?: string;
};

export interface PhotoGalleryProps {
  items: PhotoGalleryItem[];
  fit?: "cover" | "contain" | "fill";
}

function PhotoGallery({ items, fit = "cover" }: PhotoGalleryProps) {
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

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__core`}>
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
                <Image
                  caption={item.caption}
                  credit={item.credit}
                  url={[
                    {
                      src: item.url as string,
                      breakpoint: 800,
                    },
                  ]}
                  className={classNames(
                    `${coreClass}__image`,
                    `${coreClass}__image--${fit}`
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhotoGalleryThumbnails
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
          initialIndex={index}
          onSelect={(index) => {
            emblaAPI?.scrollTo(index);
          }}
        />
      </LightBox>
    </div>
  );
}

export { PhotoGallery };
