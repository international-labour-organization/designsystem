import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { List, ListProps } from "../../components/List";

const meta: Meta<typeof List> = {
  title: "Components/Content/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      options: ["default", "horizontal"],
      control: { type: "select" },
    },
    ordered: {
      options: ["ordered", "unordered", "unstyled"],
      control: { type: "select" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template: StoryFn<ListProps> = (args: ListProps) => {
  return (
    <List {...args}>
      <List.Item>
        The International Labour Organization (ILO) was founded in 1919 as part
        of the League of Nations to promote workers' rights, encourage decent
        employment opportunities, and enhance social protection.
      </List.Item>
      <List.Item>
        The ILO aims to promote rights at work, encourage decent job
        opportunities, enhance social protection, and strengthen dialogue on
        work-related issues.
      </List.Item>
      <List.Item>
        The ILO advocates for social justice and internationally recognized
        human and labor rights.
      </List.Item>
      <List.Item>
        The ILO develops international labor standards in the form of
        conventions and recommendations to improve working conditions and labor
        rights.
      </List.Item>
      <List.Item>
        The ILO is unique in its tripartite structure that includes
        representatives from government, employer, and worker organizations.
      </List.Item>
      <List.Item>
        The ILO works to eradicate child labor, targeting the worst forms of
        child labor through conventions and action programs.
      </List.Item>
      <List.Item>
        The ILO promotes gender equality and empowers women through targeted
        policies and programs.
      </List.Item>
      <List.Item>
        The ILO’s Decent Work agenda aims to secure fair income, safety at work,
        social protection, and respect for workers' rights.
      </List.Item>
      <List.Item>
        The ILO provides research and data on global employment trends and labor
        market issues to inform policy development.
      </List.Item>
      <List.Item>
        The ILO offers training and education programs to improve occupational
        skills and competencies.
      </List.Item>
      <List.Item>
        The annual International Labor Conference is where ILO members convene
        to discuss and create labor standards.
      </List.Item>
    </List>
  );
};

const Default: StoryObj<ListProps> = {
  render: Template,
  args: {
    title: "Facts about the ILO",
    ordered: "unstyled",
    alignment: "default",
    theme: "light",
  },
};

export default meta;
export { Default };
