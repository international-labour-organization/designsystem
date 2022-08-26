import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Form } from "../components/Form";
import { FormProps } from "../components/Form/Form.props";
import FormArgs from "../components/Form/Form.args";

/**
 * Form Story
 *
 */
export default {
  title: "Components/Form",
  component: Form,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>The Form component displays a form.</Description>
          <Primary />
          <ArgsTable />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Form>;

/**
 * Form Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const FormTemplate: Story<FormProps> = (args) => <Form {...args} />;

export const FormDefault = FormTemplate.bind({});

export const FormHasHelper = FormTemplate.bind({});

export const FormHasError = FormTemplate.bind({});

export const FormHasTooltip = FormTemplate.bind({});

// enumerate the props for the default search field
FormDefault.args = FormArgs.basic;
FormDefault.storyName = "Default Form";

FormHasHelper.args = FormArgs.hashelper;
FormHasHelper.storyName = "Default Form with Helper Text";

FormHasError.args = FormArgs.haserror;
FormHasError.storyName = "Default Form with errors";

FormHasTooltip.args = FormArgs.hastooltip;
FormHasTooltip.storyName = "Default Form with Tooltips";
