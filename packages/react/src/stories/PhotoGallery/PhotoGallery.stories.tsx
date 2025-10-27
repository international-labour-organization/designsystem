import { Meta, StoryObj } from "@storybook/react/*";
import { PhotoGallery, PhotoGalleryProps } from "../../components/PhotoGallery";

const meta: Meta<PhotoGalleryProps> = {
  title: "Components/Content/PhotoGallery",
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
        url: "/medium.jpg",
        caption:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, Lorem ipsum dolor sit amet consectetur adipiscing elit, and then is some random text to make it longer. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/hero.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
      },
      {
        url: "/ilo-headquarters-portrait.png",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Alex Johnson",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/hero.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Jane Smith",
      },
      {
        url: "/ilo-headquarters-portrait.png",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by Alex Johnson",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
      },
      {
        url: "/medium.jpg",
        caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        credit: "Photo by John Doe",
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

export default meta;
export { Default, Portrait, WithKeyboardControls };
