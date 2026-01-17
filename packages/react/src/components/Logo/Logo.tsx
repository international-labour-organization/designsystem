import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGlobalSettings } from "../../hooks";
import { InnerLogoProps, LogoProps } from "./Logo.props";
import classnames from "classnames";

const isOverflown = ({
  clientHeight,
  clientWidth,
  scrollHeight,
  scrollWidth,
}: HTMLElement) => scrollHeight > clientHeight || scrollWidth > clientWidth;

const getFullFontSize = (
  container: HTMLElement,
  { maxSize = 600, startingHeight = 9, step = 0.5 }
) => {
  let i = startingHeight;
  let overflow = false;

  while (!overflow && i < maxSize) {
    container.style.fontSize = `${i}px`;
    container.style.lineHeight = `${i}px`;

    overflow = isOverflown(container);
    if (!overflow) {
      i = i + step;
    }
  }

  // Reset styles to the way they were
  container.style.fontSize = "";
  container.style.lineHeight = "";

  // Return the ideal font size
  return i - step;
};

const BaseLogo: React.FC<InnerLogoProps> = ({
  baseClass,
  className,
  subbrand,
  alt,
  src,
  style: userStyles,
  size = "fluid",
  theme = "light",
  ...props
}) => {
  // The logo image element
  const imageRef = useRef<HTMLImageElement>(null);

  // The lockup container
  const lockupRef = useRef<HTMLDivElement>(null);

  // The lockup text
  const lockupTextRef = useRef<HTMLSpanElement>(null);

  // Initial height of the image when it's loaded
  const initialImageHeight = useRef<null | number>(null);

  // Track the latest image height to avoid re-render loops from sub-pixel changes
  const lastImageHeight = useRef(0);

  // Track last font size ratio to avoid redundant state updates
  const lastFontSizeRatio = useRef(0);

  // Has the image loaded or not
  const [imageLoaded, setImageLoaded] = useState(false);

  // Dynamic height of the image
  const [imageHeight, setImageHeight] = useState(0);

  // Ratio of the font size to the height of the logo image
  const [fontSizeRatio, setfontSizeRatio] = useState<number>(0);

  // Is the logo visible? Default to true if not a subbrand
  const [isLogoVisible, setIsLogoVisible] = useState(!subbrand);

  // Resize observer gets the initial height of the image when
  // it loads and updates the height when it changes in state
  const observer = useRef(
    new ResizeObserver((entries) => {
      const { height } = entries[0].contentRect;
      const nextHeight = Math.round(height * 10) / 10;
      if (!initialImageHeight.current) {
        initialImageHeight.current = nextHeight;
      }
      if (Math.abs(nextHeight - lastImageHeight.current) >= 0.1) {
        lastImageHeight.current = nextHeight;
        setImageHeight(nextHeight);
      }
    })
  );

  // Make the logo visible for subrand when everything is ready
  useEffect(() => {
    if (subbrand && imageLoaded && fontSizeRatio) {
      setIsLogoVisible(true);
    }
  }, [imageLoaded, fontSizeRatio, subbrand]);

  // Set up the Resize observer to watch the image
  useLayoutEffect(() => {
    if (imageLoaded && lockupRef.current && imageRef.current) {
      const imageEl = imageRef.current;
      observer.current.observe(imageEl);
      return () => observer.current.unobserve(imageEl);
    }
  }, [imageLoaded]);

  // Gets the font size necessary for the lockup text to fill the
  // the lockup container as much as possible without overflowing.
  // Then gets the ratio of full font size to image height which will
  // be used to calculate the font size if the image gets resized
  useLayoutEffect(() => {
    setFontSize();
  }, [imageLoaded, initialImageHeight.current]);

  // Adjust the font size if for some weird reason the subbrand changes
  // This is mostly just to illustrate how the component works on Storybook
  useLayoutEffect(() => {
    setFontSize();
  }, [subbrand]);

  function setFontSize() {
    if (
      lockupRef.current &&
      lockupTextRef.current &&
      initialImageHeight.current
    ) {
      const fullFontSize = getFullFontSize(lockupRef.current, {
        maxSize: initialImageHeight.current,
      });
      const ratio = fullFontSize / initialImageHeight.current;
      if (Math.abs(ratio - lastFontSizeRatio.current) >= 0.001) {
        lastFontSizeRatio.current = ratio;
        setfontSizeRatio(ratio);
      }
    }
  }

  // Has the image loaded or not
  function handleImageLoaded() {
    setImageLoaded(true);
  }

  // Conditions for different CSS classes
  const hasSubbrand = !!subbrand;
  const hasFluidWidth = size === "fluid";
  const hasFixedWidth = !hasFluidWidth && typeof size === "number";

  // Classes for the outer figure container
  const subBrandClass = `${baseClass}--sub-brand`;
  const fluidWidthClass = `${baseClass}--size--fluid`;
  const visibilityHidden = `${baseClass}--visibility--hidden`;

  // Outer figure classes
  const classNames = classnames(
    baseClass,
    className,
    `${baseClass}--theme--${theme}`,
    {
      [visibilityHidden]: !isLogoVisible,
      [fluidWidthClass]: hasFluidWidth,
      [subBrandClass]: hasSubbrand,
    }
  );

  // Classes for the image element
  const noSubBrandImageClass = `${baseClass}--image`;
  const subBrandImageClass = `${subBrandClass}--image`;

  // Set inline CSS including variables on the outer figure element
  const getStyle = (): React.CSSProperties => {
    const conditionalStyles: Record<string, string | number> = {};
    // Add CSS vars if this is a sub-brand
    if (hasSubbrand) {
      conditionalStyles["--logo-image-height"] = `${imageHeight}px`;
      conditionalStyles["--logo-font-size"] = `${
        fontSizeRatio * imageHeight
      }px`;
    }
    // Add fixed width if it has fixed width
    if (hasFixedWidth) {
      conditionalStyles.width = `${size}px`;
    }
    // User styles may be overriden
    return { ...userStyles, ...conditionalStyles };
  };

  const getImageSrc = () => {
    if (typeof src === "string") {
      return src;
    }
    return src[theme];
  };

  return (
    <figure className={classNames} style={getStyle()}>
      <img
        ref={imageRef}
        alt={alt}
        src={getImageSrc()}
        className={classnames({
          [subBrandImageClass]: hasSubbrand,
          [noSubBrandImageClass]: !hasSubbrand,
        })}
        onLoad={handleImageLoaded}
        {...props}
      />
      {hasSubbrand && (
        <div ref={lockupRef} className={`${subBrandClass}--lock-up`}>
          <span className={`${subBrandClass}--lock-up--separator`} />
          <span ref={lockupTextRef}>{subbrand}</span>
        </div>
      )}
    </figure>
  );
};

const Logo: React.FC<LogoProps> = ({
  className,
  url,
  target,
  style,
  size,
  ...props
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--logo`;
  const linkClass = `${baseClass}--link`;
  const fluidClass = `${baseClass}--size--fluid`;

  if (url) {
    return (
      <a
        href={url}
        target={target}
        className={classnames(linkClass, className, {
          [fluidClass]: size === "fluid",
        })}
        style={style}
      >
        <BaseLogo {...props} baseClass={baseClass} size={size} />
      </a>
    );
  }

  return (
    <BaseLogo
      baseClass={baseClass}
      className={className}
      style={style}
      size={size}
      {...props}
    />
  );
};

export default Logo;
