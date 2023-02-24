import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../../components/Footer";
import FooterArgs from "../../components/Footer/Footer.args";

const FooterMeta: Meta<typeof Footer> = {
  title: "Components/Navigation/Footer",
  component: Footer,
};

export default FooterMeta;

export const BasicFooter: StoryObj<typeof Footer> = {
  args: FooterArgs.basic,
  name: "Basic",
};
