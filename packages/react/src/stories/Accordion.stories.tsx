import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "../components/Accordion";
import { AccordionProps } from "../components/Accordion/Accordion.props";
import accordionArgs from "../components/Accordion/Accordion.args";

/**
 * Accordion Story
 *
 */
export default {
  title: "Components/Accordion",
  component: Accordion,
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
    componentSubtitle: "Component",
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
} as Meta<typeof Accordion>;

/**
 * Large Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const LargeTemplate: Story<AccordionProps> = () => (
  <Accordion {...accordionArgs.large}>
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

/**
 * Large Accordion Instance
 *
 */
export const AccordionLarge = LargeTemplate.bind({});

// enumerate the props for the large accordion.
AccordionLarge.args = accordionArgs.large;
AccordionLarge.storyName = "Accordion";
