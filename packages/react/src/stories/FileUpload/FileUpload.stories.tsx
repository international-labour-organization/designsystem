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

const FileUploadMeta: Meta<typeof FileUpload> = {
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

export default FileUploadMeta;

export const Basic: StoryObj<typeof FileUpload> = {
  args: {
    ...fileUploadArgs.basic,
    label: "Upload your files here",
    labelPlacement: "top",
    labelSize: "medium",
  },
};

export const Helper: StoryObj<typeof FileUpload> = {
  args: {
    ...fileUploadArgs.basic,
    label: "Upload your files here",
    labelPlacement: "top",
    labelSize: "medium",
    helper: "You can upload up to 5 files",
  },
};

export const Error: StoryObj<typeof FileUpload> = {
  args: {
    ...fileUploadArgs.haserror,
    label: "Upload your files here",
    labelPlacement: "top",
    labelSize: "medium",
    errorMessage: "There was an error uploading your files",
  },
};

export const Disabled: StoryObj<typeof FileUpload> = {
  args: {
    ...fileUploadArgs.disabled,
    label: "Upload your files here",
    labelPlacement: "top",
    labelSize: "medium",
  },
};
