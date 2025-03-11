import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";

export type PictureURl = {
  src: string;
  breakpoint: number;
};

export type PictureProps = {
  /**
   * Image object containing URLs for different breakpoints.
   */
  url: PictureURl[] | string;
  alt?: string;
  loading?: "eager" | "lazy";

  /**
   * Optional class name to be applied to the picture element.
   */
  className?: string;
};

const Picture = forwardRef<HTMLPictureElement, PictureProps>(
  ({ className, url, loading, alt }, ref) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--picture`;
    const pictureClasses = classNames(baseClass, className);

    return (
      <picture className={pictureClasses} ref={ref}>
        {Array.isArray(url)
          ? [...url]
              .reverse()
              .map((img, index, arr) =>
                index < arr.length - 1 ? (
                  <source
                    key={index}
                    srcSet={img.src}
                    media={
                      img.breakpoint
                        ? /^\d+$/.test(img.breakpoint.toString())
                          ? `(min-width: ${img.breakpoint}px)`
                          : img.breakpoint.toString()
                        : undefined
                    }
                  />
                ) : null
              )
          : null}
        <img
          className={`${baseClass}--img`}
          src={Array.isArray(url) ? url.reverse()[0].src : url}
          alt={alt}
          loading={loading}
        />
      </picture>
    );
  }
);

export { Picture };
