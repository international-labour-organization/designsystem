import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { ContextMenu } from "../components/ContextMenu";
import { ContextMenuProps } from "../components/ContextMenu/ContextMenu.props";
import contextMenuArgs from "../components/ContextMenu/ContextMenu.args";

const propsDoc = `
The ContextMenu receives a list of urls with labels and an optional prop indicating if this link is at the end of a 'section.'

| Prop  |  Description  |
|----------|-------------|
| \`endsection\` | Boolean - is this at the end of a 'section'? |
| \`label\` | Label for this link. |
| \`url\` | URL for this link. |
`;

/**
 * ContextMenu Story
 *
 */
export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The ContextMenu component is used to display a list of contextual
            links.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <Description>{propsDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof ContextMenu>;

/**
 * ContextMenu Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ContextMenuTemplate: Story<ContextMenuProps> = (args) => (
  <ContextMenu {...args} />
);

export const Basic = ContextMenuTemplate.bind({});

export const WithSection = ContextMenuTemplate.bind({});

// enumerate the props for the variations on the ContextMenu component
Basic.args = contextMenuArgs.basic;
Basic.storyName = "ContextMenu - Basic";

WithSection.args = contextMenuArgs.withsection;
WithSection.storyName = "ContextMenu - With A 'Section'";
WithSection.parameters = {
  docs: {
    description: {
      story:
        "The Context menu iteams can each be marked, via the `endsection` prop, as a *section*, which display a 100% width bottom border.",
    },
  },
};
