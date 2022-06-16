import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";
import { SearchField } from "../components/SearchField";
import { SearchFieldProps } from "../components/SearchField/SearchField.props";
import SearchFieldArgs from "../components/SearchField/SearchField.args";

/**
 * Empty Story
 *
 */
export default {
  title: "Components/SearchField",
  component: SearchField,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The SearchField component receives no props. It it displayed on page
            load as a placeholder component while data loads.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof SearchField>;

/**
 * SearchField Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const SearchFieldTemplate: Story<SearchFieldProps> = () => (
  <SearchField {...SearchFieldArgs.searchfield} />
);

export const SearchField1 = SearchFieldTemplate.bind({});
