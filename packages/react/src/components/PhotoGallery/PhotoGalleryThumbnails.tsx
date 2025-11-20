import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useId, useRef } from "react";
import classNames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { PhotoGalleryItem } from "./PhotoGallery";

interface PhotoGalleryThumbnailsProps {
  items: PhotoGalleryItem[];
  selected: number;
  onSelect?: (index: number) => void;
  onSeeAll?: () => void;
  seeAllLabel?: string;
}

function PhotoGalleryThumbnails({
  items,
  selected,
  onSelect,
  onSeeAll,
  seeAllLabel = "See all",
}: PhotoGalleryThumbnailsProps) {
  const { prefix } = useGlobalSettings();
  const cid = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [thumbRef, thumbAPI] = useEmblaCarousel({
    containScroll: "keepSnaps",
    direction: document.dir === "rtl" ? "rtl" : "ltr",
    dragFree: true,
    duration: 30,
  });

  useEffect(() => {
    if (!thumbAPI) return;

    thumbAPI.scrollTo(selected);
  }, [thumbAPI, selected]);

  const baseClass = `${prefix}--photo-gallery-thumbnails`;

  return (
    <div className={baseClass} ref={wrapperRef} id={`${baseClass}--${cid}`}>
      <div className={`${baseClass}__carousel`} ref={thumbRef}>
        <div className={`${baseClass}__container`}>
          {items.map((item, index) => (
            <div className={`${baseClass}__slide`} key={index}>
              <button
                type="button"
                className={classNames(`${baseClass}__thumbnail`, {
                  [`${baseClass}__thumbnail--selected`]: index === selected,
                })}
                onClick={() => onSelect?.(index)}
              >
                <img
                  src={
                    typeof item.src === "string" ? item.src : item.src.thumbnail
                  }
                  alt={item.credit || `Thumbnail ${index + 1}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className={`${baseClass}__see-all`} onClick={() => onSeeAll?.()}>
        <span className={`${baseClass}__see-all-label`}>{seeAllLabel}</span>
      </button>
    </div>
  );
}

export { PhotoGalleryThumbnails };
