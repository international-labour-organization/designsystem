import { ImageProps } from "./Image.props";

const image: ImageProps = {
  alt: "My alt text",
  className: "image",
  caption: "my image caption",
  credit: "Photo: copyright 2022 Person S. Name",
  url: [
    {
      breakpoint: 0,
      src: "https://place-hold.it/400x300?text=SmallBreakpointImage",
    },
    {
      breakpoint: 800,
      src: "https://place-hold.it/800x600?text=MediumBreakpointImage",
    },
    {
      breakpoint: 1200,
      src: "https://place-hold.it/1200x900?text=LargeBreakpointImage",
    },
    {
      breakpoint: 1440,
      src: "https://place-hold.it/1600x1200?text=LargestBreakpointImage",
    },
  ],
};

/**
 * Sample prop definitions for Image's enumerable properties (imported in stories and tests).
 */
const imageArgs = {
  image,
};

export default imageArgs;
