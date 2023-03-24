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

// Default

const DefaultAccordion = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem id="l1">
      <AccordionButton>Item1</AccordionButton>
      <AccordionPanel>
        <p>Content of Item 1</p>
        <p>Content of Item 1</p>
        <p>Content of Item 1</p>
        <p>Content of Item 1</p>
        <p>Content of Item 1</p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem id="l2">
      <AccordionButton>Item2</AccordionButton>
      <AccordionPanel>
        <p>Content of Item 2</p>
        <p>Content of Item 2</p>
        <p>Content of Item 2</p>
        <p>Content of Item 2</p>
        <p>Content of Item 2</p>
        <p>Content of Item 2</p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

const Default: StoryObj<typeof DefaultAccordion> = {
  name: "Primary",
  args: large,
  render: (args) => <DefaultAccordion {...args} />,
};

export { Default };
