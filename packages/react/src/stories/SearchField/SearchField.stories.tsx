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
import SearchFieldArgs from "../../components/SearchField/SearchField.args";

const SearchFieldMeta: Meta<typeof SearchField> = {
  title: "Components/User Interface/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  argTypes: {},
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
};

export default SearchFieldMeta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: SearchFieldArgs.searchfield,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: SearchFieldArgs.searchfielderror,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: SearchFieldArgs.searchfielddisabled,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const Labelled: Story = {
  args: SearchFieldArgs.searchfieldlabel,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const Helper: Story = {
  args: SearchFieldArgs.searchfieldhelper,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: SearchFieldArgs.searchfieldsmall,
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField {...args} />
    </div>
  ),
};

export const DynamicSearch: Story = {
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
