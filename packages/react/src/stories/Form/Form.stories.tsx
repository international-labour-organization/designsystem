import { Meta, StoryObj } from "@storybook/react";
import { Form, FormArgs } from "../../components/Form";

import { Fieldset } from "../../components/Fieldset";
import { TextInput } from "../../components/TextInput";
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  FileUpload,
  NumberPicker,
  Radio,
} from "../../components";
import * as DropdownArgs from "../../components/Dropdown/Dropdown.args";

const FormMeta: Meta<typeof Form> = {
  title: "Components/Forms",
  component: Form,
  parameters: {
    layout: "centered",
  },
};

export default FormMeta;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
};

export const Example: StoryObj<typeof Form> = {
  args: FormArgs.basic,

  render: (args) => (
    <Form {...args} style={{ width: "100%" }} onSubmit={handleSubmit}>
      <h3>Request to attend the International Labour Conference</h3>
      <Fieldset
        legend="Personal information"
        wrap="wrap"
        direction="row"
        style={{ width: "100%" }}
      >
        <TextInput
          label="First name"
          name="first-name"
          placeholder="Juan"
          type="text"
          style={{ flex: "1 1 30%" }}
        />
        <TextInput
          label="Last name"
          name="last-name"
          placeholder="Martinez"
          type="text"
          style={{ flex: "1 1 30%" }}
        />
        <DatePicker
          label="Date of birth"
          name="dob"
          style={{ flex: "1 1 30%" }}
        />
        <TextInput
          label="Street address"
          name="street-address"
          placeholder="Rue des Morillons 4"
          type="text"
          style={{ flex: "1 1 100%" }}
        />
        <TextInput
          label="City"
          name="city"
          placeholder="Geneva"
          type="text"
          style={{ flex: "1 1 30%" }}
        />
        <Dropdown
          label="Country"
          name="country"
          tooltip="This is not a complete list of countries."
          value="Switzerland"
          style={{ flex: "1 1 30%" }}
          options={DropdownArgs.options}
        />
        <NumberPicker
          label="Post code"
          name="post-code"
          placeholder="1201"
          style={{ flex: "1 1 30%" }}
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="juanmartinez@ilo.org"
          type="email"
          style={{ flex: "1 1 49%" }}
          required
          helper="Required"
        />
        <TextInput
          label="Telephone"
          name="post-code"
          placeholder="### ### ####"
          type="tel"
          style={{ flex: "1 1 49%" }}
          required
          helper="Required"
        />
      </Fieldset>
      <Fieldset legend="Submit a copy of your passport">
        <FileUpload
          name="passport"
          label="PDF or JPG files up to 10MB"
          labelPlacement="end"
          labelSize="small"
          placeholder="Upload document"
        />
      </Fieldset>
      <Fieldset direction="row" wrap="wrap" style={{ width: "100%" }}>
        <Fieldset
          legend="List the most important issues for your delegation"
          direction="column"
          wrap="wrap"
          style={{ flex: "1 1 auto" }}
        >
          <Checkbox name="key-issues" label="Child labour" value="workers" />
          <Checkbox
            name="key-issues"
            label="Full employment"
            value="governments"
          />
          <Checkbox
            name="key-issues"
            label="Occupational health & safety"
            value="employers"
          />
          <Checkbox
            name="key-issues"
            label="Freedom to organize"
            value="other"
          />
        </Fieldset>
        <Fieldset
          legend="Who will you be representing?"
          style={{ flex: "1 1 auto" }}
        >
          <Radio name="constituent-type" label="Workers" value="workers" />
          <Radio
            name="constituent-type"
            label="Governments"
            value="governments"
          />
          <Radio name="constituent-type" label="Employers" value="employers" />
          <Radio name="constituent-type" label="Other" value="other" />
        </Fieldset>
      </Fieldset>
      <Button label="Submit" kind="submit" />
    </Form>
  ),
};
