import PhotoGallery from "../src/components/photogallery/photogallery.twig";
import PhotoGalleryPatterns from "../src/components/photogallery/photogallery.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(PhotoGallery, PhotoGalleryPatterns);

const Meta = {
  title: "Components/Media/PhotoGallery",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive",
    },
  },
  decorators: [
    (Story) => `
      <div style="max-width: 745px;">
        ${Story()}
      </div>
    `,
  ],
  ...story.meta,
};

const [Default, WithKeyboardControls, Portrait, WithoutCaption] = story.stories;

export default Meta;

const SeparateSources = {
  args: {
    items: [
      {
        src: "/gallery-small.jpg",
        sources: {
          gallery: "/gallery-small.jpg",
          thumbnail: "/gallery-small.jpg",
          lightbox: "/gallery-extra.jpg",
        },
        caption: "Photo with separate sources",
        alt: "Photo with separate sources",
        credit: "Photo by Photographer",
      },
      ...Default.args.items,
    ],
  },
};

export {
  Default,
  WithKeyboardControls,
  Portrait,
  WithoutCaption,
  SeparateSources,
};
