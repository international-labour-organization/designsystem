import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/blocks";
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "../../components/Accordion";
import { AccordionProps } from "../../components/Accordion/Accordion.props";
import { large } from "../../components/Accordion/Accordion.args";

/**
 * Accordion Story
 *
 */
const AccordionMeta: Meta<typeof Accordion> = {
  title: "Components/Content/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  subcomponents: {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The accordion component allows the user to show and hide sections of
            related content on a page. Click the accordions below to
            expand/collapse the accordion content.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default AccordionMeta;

//@TODO: We should just use the list component for this

const DefaultAccordion = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem id="l1">
      <AccordionButton>Topics</AccordionButton>
      <AccordionPanel>
        <div style={{ padding: "20px" }}>
          <ul className="ilo--list--unordered">
            <li>Employment Promotion and Job Creation</li>
            <li>Social Protection</li>
            <li>International Labour Standards</li>
            <li>Social Dialogue and Tripartism</li>
          </ul>
        </div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem id="l2">
      <AccordionButton>Sectors</AccordionButton>
      <AccordionPanel>
        <div style={{ padding: "20px" }}>
          <ul className="ilo--list--unordered">
            <li>Agriculture, Forestry, and Fishing</li>
            <li>Construction</li>
            <li>Manufacturing</li>
            <li>Transport and Storage</li>
            <li>Wholesale and Retail Trade</li>
            <li>Information and Communication</li>
          </ul>
        </div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

const Default: StoryObj<typeof DefaultAccordion> = {
  name: "Default",
  args: large,
  render: (args) => <DefaultAccordion {...args} />,
};

const Scrollable: StoryObj<typeof DefaultAccordion> = {
  name: "Scrollable",
  args: large,
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="l1">
        <AccordionButton>Topics</AccordionButton>
        <AccordionPanel scroll>
          <div style={{ padding: "20px" }}>
            <ul className="ilo--list--unordered">
              <li>Employment Promotion and Job Creation</li>
              <li>Social Protection</li>
              <li>International Labour Standards</li>
              <li>Social Dialogue and Tripartism</li>
              <li>Occupational Safety and Health</li>
              <li>Labor Migration</li>
              <li>Child Labour and Forced Labour Elimination</li>
              <li>Gender Equality and Non-Discrimination</li>
              <li>Decent Work</li>
              <li>Wages and Working Hours</li>
              <li>Social Security</li>
              <li>Green Jobs</li>
            </ul>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="l2">
        <AccordionButton>Sectors</AccordionButton>
        <AccordionPanel scroll>
          <div style={{ padding: "20px" }}>
            <ul className="ilo--list--unordered">
              <li>Agriculture, Forestry, and Fishing</li>
              <li>Construction</li>
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
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export { Default, Scrollable };
