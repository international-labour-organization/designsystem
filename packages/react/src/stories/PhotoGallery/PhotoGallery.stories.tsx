import { Meta, StoryObj } from "@storybook/react/*";
import { PhotoGallery, PhotoGalleryProps } from "../../components/PhotoGallery";

const meta: Meta<PhotoGalleryProps> = {
  title: "Components/Media/PhotoGallery",
  component: PhotoGallery,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The PhotoGallery component displays a gallery of photos.`,
      },
    },
  },
};

const Default: StoryObj<PhotoGalleryProps> = {
  args: {
    items: [
      {
        src: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/hero.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/ilo-headquarters.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/16x9.jpg",
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/media-file-poster.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/ilo-headquarters-portrait.png",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Alex Johnson",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/hero.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/ilo-headquarters.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/16x9.jpg",
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        credit: "Photo by John Doe",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/media-file-poster.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
        alt: "Lorem ipsum dolor sit amet",
      },
      {
        src: "/ilo-headquarters-portrait.png",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Alex Johnson",
        alt: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "745px" }}>
        <Story />
      </div>
    ),
  ],
};

const WithKeyboardControls: StoryObj<PhotoGalleryProps> = Object.assign(
  {},
  Default,
  {
    args: {
      ...Default.args,
      withKeyboardControls: true,
    },
  }
);

const Portrait: StoryObj<PhotoGalleryProps> = Object.assign({}, Default, {
  args: {
    ...Default.args,
    fit: "contain",
  },
});

const WithoutCaption: StoryObj<PhotoGalleryProps> = Object.assign({}, Default, {
  args: {
    ...Default.args,
    captionView: "hidden",
  },
});

const SeparateSources: StoryObj<PhotoGalleryProps> = Object.assign(
  {},
  Default,
  {
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
        },
        ...Default.args?.items!,
      ],
    },
  }
);

export default meta;
export {
  Default,
  Portrait,
  WithKeyboardControls,
  WithoutCaption,
  SeparateSources,
};
