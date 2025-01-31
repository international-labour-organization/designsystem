import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { AccordionProps } from "../../components/Accordion/Accordion";
import { Accordion } from "../../components";

const meta: Meta<typeof Accordion> = {
  title: "Components/Content/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

const Template: StoryFn = (args: AccordionProps) => {
  return (
    <Accordion {...args}>
      <Accordion.Item label="Topics" value="item_1">
        <ul style={{ padding: 20 }}>
          <li>Employment Promotion and Job Creation</li>
          <li>Social Protection</li>
          <li>International Labour Standards</li>
          <li>Social Dialogue and Tripartism</li>
          <li>Occupational Safety and Health</li>
          <li>Labor Migration</li>
          <li>Child Labour and Forced Labour Elimination</li>
          <li>Gender Equality and Non-Discrimination</li>
        </ul>
      </Accordion.Item>
      <Accordion.Item label="Sectors" value="item_2">
        <ul style={{ padding: 20 }}>
          <li>Agriculture, Forestry, and Fishing Construction</li>
          <li>Manufacturing</li>
          <li>Transport and Storage</li>
          <li>Wholesale and Retail Trade</li>
          <li>Information and Communication</li>
          <li>Finance and Insurance</li>
          <li>Health and Social Work</li>
          <li>Educational Services</li>
          <li>Public Administration and Defense</li>
          <li>Other Services</li>
        </ul>
      </Accordion.Item>
    </Accordion>
  );
};

const Default: StoryObj<typeof Accordion> = {
  render: Template,
  args: {
    size: "small",
    onChange: undefined,
  },
};

const Scrollable: StoryObj<typeof Accordion> = {
  render: Template,
  args: {
    size: "small",
    scrollable: true,
    onChange: undefined,
  },
};

export default meta;
export { Default, Scrollable };
