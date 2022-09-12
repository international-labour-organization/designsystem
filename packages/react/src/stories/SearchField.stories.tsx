import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { SearchField } from "../components/SearchField";
import { Input } from "../components/Input";
import { SearchFieldProps } from "../components/SearchField/SearchField.props";
import SearchFieldArgs from "../components/SearchField/SearchField.args";

/**
 * Empty Story
 *
 */
export default {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {},
  subcomponents: {
    Input,
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The SearchField component displays a single search input and a
            button. It fires a callback function passed to it as the callback
            prop onChange of the field, and another callback function onClick of
            the button.
          </Description>
          <Primary />
          <ArgsTable />
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
const SearchFieldTemplate: Story<SearchFieldProps> = (args) => (
  <SearchField {...args} />
);

export const SearchFieldDefault = SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldDefault.args = SearchFieldArgs.searchfield;
SearchFieldDefault.storyName = "Default SearchField";

export const SearchFieldError = SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldError.args = SearchFieldArgs.searchfielderror;
SearchFieldError.storyName = "SearchField Error";

export const SearchFieldDisabled = SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldDisabled.args = SearchFieldArgs.searchfielddisabled;
SearchFieldDisabled.storyName = "Disabled SearchField";

export const SearchFieldLabel = SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldLabel.args = SearchFieldArgs.searchfieldlabel;
SearchFieldLabel.storyName = "SearchField with Label";

export const SearchFieldHelper = SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldHelper.args = SearchFieldArgs.searchfieldhelper;
SearchFieldHelper.storyName = "SearchField with Helper text";
