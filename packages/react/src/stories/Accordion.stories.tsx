import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Subheading} from '@storybook/addon-docs';
import { Accordion, AccordionButton, AccordionPanel, AccordionItem }  from '../components/Accordion';
import { AccordionProps } from '../components/Accordion/Accordion.props';
import accordionArgs from '../components/Accordion/Accordion.args';

const sizeDoc = `
By changing the \`size\` prop you can use different sizes of the accordion. The default size of an accordion if not specified is \`small\`.

| size   |  Description  |
|----------|-------------|
| \`small\` | secondary content of a page/section. |
| \`large\` | primary content of a page/section.   |
`;

/**
 * Accordion Story
 *
 */
export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
  subcomponents: {
    AccordionItem,
    AccordionButton,
    AccordionPanel
  },
  parameters: {
    componentSubtitle: 'Component',
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
          The accordion component allows the user to show and hide sections of related content on a page. Click the accordions below to expand/collapse the accordion content.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>Size Prop</Subheading>
          <Description>
            {sizeDoc}
          </Description>
          <Stories title="Examples">
          </Stories>
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
const LargeTemplate: Story<AccordionProps> = (args) => (
  <Accordion {...accordionArgs.large}>
    <AccordionItem id="l1">
      <AccordionButton>Item1</AccordionButton>
      <AccordionPanel timeout={300}>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem id="l2">
      <AccordionButton>Item2</AccordionButton>
      <AccordionPanel timeout={300}>
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
 * Small Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
 const SmallTemplate: Story<AccordionProps> = (args) => (
  <Accordion {...accordionArgs.small}>
    <AccordionItem id="s1">
      <AccordionButton>Item1</AccordionButton>
      <AccordionPanel timeout={300}>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
          <p>Content of Item 1</p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem id="s2">
      <AccordionButton>Item2</AccordionButton>
      <AccordionPanel timeout={300}>
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

/**
 * Small Accordion Instance
 *
 */
export const AccordionSmall = SmallTemplate.bind({});

// enumerate the props for the large accordion.
AccordionLarge.args = accordionArgs.large;
AccordionLarge.storyName = 'Large Accordion';

// enumerate the props
AccordionSmall.args = accordionArgs.small;
AccordionSmall.storyName = 'Small Accordion';