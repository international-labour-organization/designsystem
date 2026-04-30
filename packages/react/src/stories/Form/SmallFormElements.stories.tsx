import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../components/Dropdown";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";

const meta: Meta = {
  title: "Components/Forms/Small Form Elements",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Small variants of Dropdown, SearchField, and Button aligned at the same height.",
      },
    },
  },
};

export default meta;

export const Aligned: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      <Dropdown
        label="Language"
        name="language"
        size="small"
        theme="dark"
        options={[
          { label: "English", value: "en" },
          { label: "Français", value: "fr" },
          { label: "Español", value: "es" },
        ]}
      />
      <SearchField
        label="Search"
        name="search"
        size="small"
        theme="dark"
        placeholder="Search transcript"
      />
      <Button size="small" type="secondary" icon={{ name: "transcript" }}>
        Hide transcript
      </Button>
    </div>
  ),
};
