import { Meta, StoryFn } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
} from "@storybook/addon-docs";
import { ContextMenu } from "../../components/ContextMenu";
import { ContextMenuProps } from "../../components/ContextMenu/ContextMenu.props";
import contextMenuArgs from "../../components/ContextMenu/ContextMenu.args";

const propsDoc = `
The ContextMenu receives a list of urls with labels and an optional prop indicating if this link is at the end of a 'section.'

| Prop  |  Description  |
|----------|-------------|
| \`endsection\` | Boolean - is this at the end of a 'section'? |
| \`label\` | Label for this link. |
| \`url\` | URL for this link. |
`;

const ContextMenuMeta: Meta<typeof ContextMenu> = {
  title: "Components/Navigation/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
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
          <Subheading>ContextMenus with sections</Subheading>
          <Description>{propsDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default Props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default ContextMenuMeta;

/**
 * ContextMenu Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ContextMenuTemplate: StoryFn<ContextMenuProps> = (args) => (
  <ContextMenu {...args} />
);

export const Basic: StoryFn<ContextMenuProps> = ContextMenuTemplate.bind({});

export const WithSection: StoryFn<ContextMenuProps> = ContextMenuTemplate.bind(
  {}
);

// enumerate the props for the variations on the ContextMenu component
Basic.args = contextMenuArgs.basic;
Basic.storyName = "Basic";

WithSection.args = contextMenuArgs.withsection;
WithSection.storyName = "Sectioned";
WithSection.parameters = {
  docs: {
    description: {
      story:
        "The Context menu iteams can each be marked, via the `endsection` prop, as a *section*, which display a 100% width bottom border.",
    },
  },
};
