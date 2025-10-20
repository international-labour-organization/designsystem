import { useGlobalSettings } from "../../hooks";
import { PhotoGalleryItem } from "./PhotoGallery";
import { useEffect, useId, useRef, useState } from "react";

interface PhotoGalleryThumbnailsProps {
  items: PhotoGalleryItem[];
  selected: number;
  columns?: number;
  onSelect?: (index: number) => void;
  onSeeAll?: () => void;
  seeAllLabel?: string;
}

const THUMBNAIL_WIDTH_VARIABLE = "--ilo-photo_gallery-thumbnails-width";

function PhotoGalleryThumbnails({
  items,
  selected,
  columns = 1,
  onSelect,
  onSeeAll,
  seeAllLabel = "See all",
}: PhotoGalleryThumbnailsProps) {
  const { prefix } = useGlobalSettings();
  const cid = useId();
  const thumbnailWidth = useRef<number>(145);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState<number>(0);

  const baseClass = `${prefix}--photo-gallery-thumbnails`;

  useEffect(() => {
    if (!wrapperRef.current) return;

    const styles = getComputedStyle(wrapperRef.current);
    const variable = parseInt(
      styles.getPropertyValue(THUMBNAIL_WIDTH_VARIABLE).trim()
    );
    if (variable) {
      thumbnailWidth.current = variable;
    }
  }, [wrapperRef]);

  useEffect(() => {
    if (!wrapperRef.current || !thumbnailWidth.current) return;

    function updateThumbnailAmount() {
      const styles = getComputedStyle(wrapperRef.current!);
      const thumbnailWidth = parseInt(
        styles.getPropertyValue(THUMBNAIL_WIDTH_VARIABLE).trim()
      );
      if (!wrapperRef.current) return;
      const wrapperWidth = wrapperRef.current.offsetWidth;
      setAmount(Math.floor(wrapperWidth / thumbnailWidth));
    }

    updateThumbnailAmount();

    window.addEventListener("resize", updateThumbnailAmount);

    return () => {
      window.removeEventListener("resize", updateThumbnailAmount);
    };
  }, [wrapperRef, thumbnailWidth]);

  const toDisplay = items.slice(
    0,
    Math.min(amount * columns, items.length) - 1
  );

  return (
    <div className={baseClass} ref={wrapperRef} id={`${baseClass}--${cid}`}>
      {toDisplay.map((item, index) => (
        <button
          key={index}
          className={`${baseClass}__thumbnail ${
            index === selected ? `${baseClass}__thumbnail--selected` : ""
          }`}
          onClick={() => onSelect?.(index)}
        >
          <img src={item.url as string} alt={item.caption} />
        </button>
      ))}
      <button className={`${baseClass}__see-all`} onClick={() => onSeeAll?.()}>
        <span className={`${baseClass}__see-all-label`}>{seeAllLabel}</span>
      </button>
    </div>
  );
}

export { PhotoGalleryThumbnails };
