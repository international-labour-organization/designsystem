import { ImageProps } from "./Image.props";

const image: ImageProps = {
  alt: "My alt text",
  className: "image",
  caption: "my image caption",
  credit: "Photo: copyright 2022 Person S. Name",
  url: [
    {
      breakpoint: 0,
      src: "https://placekitten.com/400/300",
    },
    {
      breakpoint: 800,
      src: "https://placekitten.com/800/600",
    },
    {
      breakpoint: 1200,
      src: "https://placekitten.com/1200/900",
    },
    {
      breakpoint: 1440,
      src: "https://placekitten.com/1600/1200",
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
