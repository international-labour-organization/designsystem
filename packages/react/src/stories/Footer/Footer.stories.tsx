import { Meta, StoryObj } from "@storybook/react";
import { Footer, FooterArgs } from "../../components/Footer";

const FooterMeta: Meta<typeof Footer> = {
  title: "Components/Navigation/Footer",
  component: Footer,
};

export default FooterMeta;

export const BasicFooter: StoryObj<typeof Footer> = {
  args: FooterArgs.basic,
  name: "Basic",
};
