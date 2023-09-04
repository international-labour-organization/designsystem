import { Meta, StoryObj } from "@storybook/react";
import { Dropdown, Fieldset } from "../../components";

import {
  ArgTypes,
  Description,
  Heading,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";
import { TextInput } from "../../components/TextInput";

const FieldsetMeta: Meta<typeof Fieldset> = {
  title: "Components/Forms/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
  argTypes: {
    helper: {
      description: "Optional helper text to display below the fieldset",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    tooltip: {
      description: "Optional text to display in a tooltip",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    errorMessage: {
      description:
        "Message to display in case of an error. This is only shown the Fieldset contains Radio or Checkbox components.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      description: "Whether the fieldset is disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    wrap: {
      description: "Whether the fieldset should wrap its children",
      control: "select",
      options: ["nowrap", "wrap"],
      table: {
        defaultValue: { summary: "nowrap" },
        type: {
          summary: "nowrap | wrap",
        },
      },
    },
    direction: {
      description: "The direction of the fieldset",
      control: "select",
      options: ["column", "row", "column-reverse", "row-reverse"],
      table: {
        defaultValue: { summary: "column" },
        type: {
          summary: "column | row | column-reverse | row-reverse",
        },
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Fieldset component is used to group related form elements. It
            can also be used to show an error state for a group of Radio or
            Checkbox components.
          </Description>
          <Primary />
          <Heading>Props</Heading>
          <ArgTypes of={FieldsetMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default FieldsetMeta;

export const Example: StoryObj<typeof Fieldset> = {
  args: {
    legend: "Enter your contact details",
    helper: "Email and telephone are required",
  },
  render: (args) => (
    <Fieldset {...args} wrap="wrap" direction="row">
      <TextInput
        label="Email"
        helper="Required"
        placeholder="info@ilo.org"
        name="email"
        style={{ flex: "1 1 49%" }}
        type="email"
        required
      />
      <TextInput
        label="Telephone"
        helper="Required"
        placeholder="### ### ####"
        name="telephone"
        style={{ flex: "1 1 49%" }}
        type="tel"
        required
      />
      <TextInput
        label="Street"
        placeholder="Route de Morillons"
        name="street"
        style={{ flex: "1 1 49%" }}
        type="text"
      />
      <TextInput
        label="City"
        name="city"
        placeholder="Geneva"
        style={{ flex: "1 1 49%" }}
        type="text"
      />
      <Dropdown
        label="Country"
        name="country"
        style={{ flex: "1 1 75%" }}
        tooltip="This is not a complete list of all the countries in the world."
        options={[
          { label: "Switzerland", value: "CH" },
          { label: "Côte d'Ivoire ", value: "CI" },
          { label: "Thailand", value: "TH" },
          { label: "United States", value: "US" },
          { label: "Zimbabwe", value: "ZW" },
          { label: "Afghanistan", value: "AF" },
          { label: "Åland Islands", value: "AX" },
          { label: "Albania", value: "AL" },
          { label: "Algeria", value: "DZ" },
          { label: "American Samoa", value: "AS" },
          { label: "AndorrA", value: "AD" },
          { label: "Angola", value: "AO" },
          { label: "Anguilla", value: "AI" },
          { label: "Antarctica", value: "AQ" },
          { label: "Antigua and Barbuda", value: "AG" },
          { label: "Argentina", value: "AR" },
          { label: "Armenia", value: "AM" },
          { label: "Aruba", value: "AW" },
          { label: "Australia", value: "AU" },
          { label: "Austria", value: "AT" },
          { label: "Azerbaijan", value: "AZ" },
        ]}
      />
    </Fieldset>
  ),
};
