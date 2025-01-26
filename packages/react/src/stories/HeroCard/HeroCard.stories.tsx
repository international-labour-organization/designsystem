import { Meta, StoryObj } from "@storybook/react";
import { HeroCard, HeroCardProps } from "../../components/HeroCard";

const meta: Meta<typeof HeroCard> = {
  title: "Components/Content/HeroCard",
  component: HeroCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Hero Card includes the title, intro, date, and social links for the hero",
      },
    },
  },
};

const Default: StoryObj<HeroCardProps> = {
  args: {
    theme: "dark",
    background: "solid",
    cornercut: true,
    eyebrow: "Gender equality",
    title: "How to achieve gender equality in global garment supply chains",
    url: "https://www.example.com",
    intro:
      "Over the last three decades, global supply chains have been a key entry point for women to enter the formal workforce.",
    datecopy: "11 February 2021",
    socialmedia: {
      iconSize: "normal",
      icons: [
        {
          icon: "facebook",
          url: "https://www.facebook.com/",
          label: "Facebook",
        },
        {
          icon: "linkedin",
          url: "https://www.linkedin.com/",
          label: "Linkedin",
        },
      ],
      theme: "dark",
    },
  },
};

export default meta;
export { Default };
