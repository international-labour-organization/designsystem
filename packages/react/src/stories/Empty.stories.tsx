import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";
import { Empty } from "../components/Empty";
import { EmptyProps } from "../components/Empty/Empty.props";
import emptyArgs from "../components/Empty/Empty.args";

/**
 * Empty Story
 *
 */
export default {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Empty component receives no props. It it displayed on page load
            as a placeholder component while data loads.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Empty>;

/**
 * Empty Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const EmptyTemplate: Story<EmptyProps> = () => <Empty {...emptyArgs.empty1} />;

export const Empty1 = EmptyTemplate.bind({});
