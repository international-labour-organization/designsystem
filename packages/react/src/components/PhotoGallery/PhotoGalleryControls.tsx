import { HTMLAttributes, useCallback, useEffect } from "react";
import classNames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { UseEmblaCarouselType } from "embla-carousel-react";

type PhotoGalleryControlsProps = HTMLAttributes<HTMLDivElement> & {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  indicator: {
    current: number;
    total: number;
  };
};

type EmblaCarouselType = UseEmblaCarouselType[1];

function usePhotoGalleryControls(emblaApi: EmblaCarouselType) {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onFirstButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0);
  }, [emblaApi]);

  const onLastButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
  }, [emblaApi]);

  return {
    onFirstButtonClick,
    onLastButtonClick,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

function useKeyboardControls(
  emblaApi: EmblaCarouselType | undefined,
  enabled: boolean = true
) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!emblaApi) return;
      if (!enabled) return;

      switch (event.key) {
        case "ArrowLeft":
          emblaApi.scrollPrev();
          event.preventDefault();
          break;
        case "ArrowRight":
          emblaApi.scrollNext();
          event.preventDefault();
          break;
        default:
          break;
      }
    },
    [emblaApi, enabled]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return { onKeyDown };
}

function PhotoGalleryControls({
  onNext,
  onPrev,
  onFirst,
  onLast,
  indicator,
  ...rest
}: PhotoGalleryControlsProps) {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--photo-gallery-controls`;

  return (
    <div {...rest}>
      <div className={classNames(baseClass, rest.className)}>
        <div className={`${baseClass}__previous-set`}>
          <button
            aria-label="First Photo"
            onClick={onFirst}
            className={classNames(`${baseClass}__first`, `${baseClass}__item`)}
          />
          <button
            aria-label="Previous Photo"
            onClick={onPrev}
            className={classNames(`${baseClass}__prev`, `${baseClass}__item`)}
          />
        </div>
        <p aria-label="Current Photo" className={`${baseClass}__page`}>
          <span>{indicator.current}</span>
          <span> of </span>
          <span>{indicator.total}</span>
        </p>
        <div className={`${baseClass}__next-set`}>
          <button
            aria-label="Next Photo"
            onClick={onNext}
            className={classNames(`${baseClass}__next`, `${baseClass}__item`)}
          />
          <button
            aria-label="Last Photo"
            onClick={onLast}
            className={classNames(`${baseClass}__last`, `${baseClass}__item`)}
          />
        </div>
      </div>
    </div>
  );
}

export { PhotoGalleryControls, usePhotoGalleryControls, useKeyboardControls };
