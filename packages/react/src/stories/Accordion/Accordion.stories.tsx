import { Meta, StoryFn } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/blocks";
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "../../components/Accordion";
import { AccordionProps } from "../../components/Accordion/Accordion.props";

/**
 * Accordion Story
 *
 */
const AccordionMeta: Meta<typeof Accordion> = {
  title: "Components/Content/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    allowMultipleExpanded: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
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
          <ArgsTable />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
};

export default AccordionMeta;

const args: AccordionProps = {
  onButtonClick: (e) => {
    console.log(e.target);
  },
  allowMultipleExpanded: true,
  defaultAccordionsExpanded: ["l1", "l2"],
  children: undefined,
};

const Default: StoryFn<AccordionProps> = (args) => (
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

Default.args = args;

export { Default };
