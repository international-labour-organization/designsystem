import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../components/Breadcrumb";
import BreadcrumbArgs from "../../components/Breadcrumb/Breadcrumb.args";

const BreadcrumbMeta: Meta<typeof Breadcrumb> = {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
};

export default BreadcrumbMeta;

export const BasicBreadcrumb: StoryObj<typeof Breadcrumb> = {
  args: BreadcrumbArgs.basic,
  name: "Basic",
};
