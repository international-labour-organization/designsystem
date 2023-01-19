import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Form } from "../../components/Form";
import { FormProps } from "../../components/Form/Form.props";
import FormArgs from "../../components/Form/Form.args";

/**
 * Form Story
 *
 */
const FormMeta: Meta<typeof Form> = {
  title: "Components/Forms/Form",
  tags: ["autodocs"],
  component: Form,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>The Form component displays a form.</Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default FormMeta;

/**
 * Form Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const FormTemplate: StoryFn<FormProps> = (args) => <Form {...args} />;

export const FormDefault: StoryFn<FormProps> = FormTemplate.bind({});

export const FormHasHelper: StoryFn<FormProps> = FormTemplate.bind({});

export const FormHasError: StoryFn<FormProps> = FormTemplate.bind({});

export const FormHasTooltip: StoryFn<FormProps> = FormTemplate.bind({});

// enumerate the props for the default search field
FormDefault.args = FormArgs.basic;
FormDefault.storyName = "Default";

FormHasHelper.args = FormArgs.hashelper;
FormHasHelper.storyName = "Helper Text";

FormHasError.args = FormArgs.haserror;
FormHasError.storyName = "Errors";

FormHasTooltip.args = FormArgs.hastooltip;
FormHasTooltip.storyName = "Tooltips";
