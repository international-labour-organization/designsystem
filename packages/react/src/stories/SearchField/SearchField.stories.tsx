import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/blocks";
import { SearchField } from "../../components/SearchField";
import { Input } from "../../components/Input";
import { SearchFieldProps } from "../../components/SearchField/SearchField.props";
import SearchFieldArgs from "../../components/SearchField/SearchField.args";

const SearchFieldMeta: Meta<typeof SearchField> = {
  title: "Components/User Interface/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  argTypes: {},
  subcomponents: {
    Input,
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The SearchField component displays a single search input and a
            button. It fires a callback function passed to it as the callback
            prop onChange of the field, and another callback function onClick of
            the button.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default SearchFieldMeta;

/**
 * SearchField Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const SearchFieldTemplate: StoryFn<SearchFieldProps> = (args) => (
  <div style={{ width: "100%", maxWidth: "600px" }}>
    <SearchField {...args} />
  </div>
);

export const SearchFieldDefault: StoryFn<SearchFieldProps> =
  SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldDefault.args = SearchFieldArgs.searchfield;
SearchFieldDefault.storyName = "Default";

export const SearchFieldError: StoryFn<SearchFieldProps> =
  SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldError.args = SearchFieldArgs.searchfielderror;
SearchFieldError.storyName = "Error";

export const SearchFieldDisabled: StoryFn<SearchFieldProps> =
  SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldDisabled.args = SearchFieldArgs.searchfielddisabled;
SearchFieldDisabled.storyName = "Disabled";

export const SearchFieldLabel: StoryFn<SearchFieldProps> =
  SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldLabel.args = SearchFieldArgs.searchfieldlabel;
SearchFieldLabel.storyName = "Labelled";

export const SearchFieldHelper: StoryFn<SearchFieldProps> =
  SearchFieldTemplate.bind({});

// enumerate the props for the default search field
SearchFieldHelper.args = SearchFieldArgs.searchfieldhelper;
SearchFieldHelper.storyName = "Helper";
