import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
} from "@storybook/addon-docs";
import { FileUpload } from "../../components";
import fileUploadArgs from "../../components/FileUpload/FileUpload.args";
import { FormControl, FormControlProps } from "../../components/FormControl";
import { FileUploadProps } from "../../components/FileUpload/FileUpload.props";

const DropdownMeta: Meta<typeof FileUpload> = {
  title: "Components/Forms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The FileUpload component allows users to select and upload files
            from their device to a web application. It displays a list of the
            files to upload once they've been selected.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <ArgsTable />
          <Stories title="Examples" />
        </>
      ),
    },
  },
};

export default DropdownMeta;

const formControlProps: Omit<FormControlProps, "children"> = {
  label: "Upload your files here",
  labelPlacement: "top",
  labelSize: "medium",
  style: { width: "100%" },
  errorMessage: "There was an error uploading your files",
};

const formControlPropsWithHelper: Omit<FormControlProps, "children"> = {
  ...formControlProps,
  helper: "You can upload up to 5 files",
};

const Template = (args: FileUploadProps) => (
  <FormControl {...formControlProps}>
    <FileUpload {...args} />
  </FormControl>
);

const TemplateWithHelper = (args: FileUploadProps) => (
  <FormControl {...formControlPropsWithHelper}>
    <FileUpload {...args} />
  </FormControl>
);

export const Basic: StoryObj<typeof FileUpload> = {
  args: fileUploadArgs.basic,
};

export const WithLabel: StoryObj<typeof FileUpload> = {
  args: fileUploadArgs.basic,
  render: Template,
};

export const Helper: StoryObj<typeof FileUpload> = {
  args: fileUploadArgs.basic,
  render: TemplateWithHelper,
};

export const Error: StoryObj<typeof FileUpload> = {
  args: fileUploadArgs.haserror,
  render: Template,
};

export const Disabled: StoryObj<typeof FileUpload> = {
  args: fileUploadArgs.disabled,
  render: Template,
};
