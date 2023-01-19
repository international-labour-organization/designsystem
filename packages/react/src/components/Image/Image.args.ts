import { ImageProps } from "./Image.props";

const imageArgs: ImageProps = {
  alt: "Two women wearing yellow hard hats and neon safety jackets look directly at the viewer",
  className: "image",
  caption:
    "Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO.",
  credit: "© Marcel Crozet/ILO",
  url: [
    {
      breakpoint: 0,
      src: "/small.jpg",
    },
    {
      breakpoint: 800,
      src: "/medium.jpg",
    },
    {
      breakpoint: 1200,
      src: "/medium.jpg",
    },
    {
      breakpoint: 1440,
      src: "/large.jpg",
    },
  ],
};

export default imageArgs;
