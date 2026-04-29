import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/blocks";
import { SearchField } from "../../components/SearchField";
import { Input } from "../../components/Input";
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
      description: {
        component:
          "The SearchField component displays a single search input and a button. It fires a callback function passed to it as the callback prop onChange of the field, and another callback function onClick of the button.",
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title="Examples"></Stories>
          <ArgTypes />
        </>
      ),
    },
  },
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export default SearchFieldMeta;

type Story = StoryObj<typeof SearchField>;

export const SearchFieldDefault: Story = {
  name: "Default",
  args: SearchFieldArgs.searchfield,
};

export const SearchFieldError: Story = {
  name: "Error",
  args: SearchFieldArgs.searchfielderror,
};

export const SearchFieldDisabled: Story = {
  name: "Disabled",
  args: SearchFieldArgs.searchfielddisabled,
};

export const SearchFieldLabel: Story = {
  name: "Labelled",
  args: SearchFieldArgs.searchfieldlabel,
};

export const SearchFieldHelper: Story = {
  name: "Helper",
  args: SearchFieldArgs.searchfieldhelper,
};

export const SearchFieldDynamic: Story = {
  name: "Dynamic Search",
  args: SearchFieldArgs.searchfielddynamic,
  render: (args) => {
    const [searchResults, setSearchResults] = useState<string>("");

    const handleInputChange = (value: string) => {
      setSearchResults(value ? `Searching for: "${value}"` : "");
    };

    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <SearchField {...args} onInputChange={handleInputChange} />
        {searchResults && (
          <p style={{ marginTop: "1rem", color: "#666" }}>{searchResults}</p>
        )}
      </div>
    );
  },
};
