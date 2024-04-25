import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "../../components/Logo";
import {
  Title,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgTypes,
} from "@storybook/blocks";
import {
  basic,
  withSubBrand,
  withDarkTheme,
  withLongSubbrand,
  fluidWidth,
} from "../../components/Logo/Logo.args";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";

const LogoMeta: Meta<typeof Logo> = {
  title: "Components/Media/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "object",
    },
    alt: {
      control: "text",
    },
    subbrand: {
      control: "text",
    },
    size: {
      control: "number",
    },
    style: {
      control: "object",
    },
    className: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Logo component renders an image representing an organization. It
            can be shown on a light or dark background (theme) and may include
            an sub-brand, which appears in a "lockup" next to the main logo.
          </Description>
          <Primary />
          <Subheading>Why use this component?</Subheading>
          <Description>
            The `Logo` component provides a standard interface for rendering
            brand-compliant logos in different contexts and backgrounds. It can
            be rendered at fixed or fluid sizes (widths) and offers a convenient
            way of handling `light` and `dark` themes (backgrounds).
          </Description>
          <Description>
            It's especially handy for implementing sub-brands, which can be
            added by means of a single `subbrand` prop. This takes a `string`
            (the name of the sub-brand) and renders it as a responsive lockup
            that resizes dynamically together with the logo. This allows you to
            treat a `Logo` with subbrand as if it were a single image.
          </Description>
          <Subheading>Theme</Subheading>
          <Description>
            The `theme` prop determines whether the logo should be rendered on a
            `light` or `dark` background. In order to work, the `src` prop
            should be an object with `light` and `dark` properties that point to
            the image files you want to use in either scenario. [See
            example](/story/components-brand-logo--dark-theme).
          </Description>
          <Subheading>Sub-brands</Subheading>
          <Description>
            Add a sub-brand by passing a `string` to the `subbrand` prop with
            the text to appear in the lockup space next to the logo. The
            font-size of the subbrand will resize automatically to fill the
            available space without overflowing the lockup. The lockup is
            responsive, so you can treat the component like an image. [See
            example](/story/components-brand-logo--long-subrand).
          </Description>
          <Subheading>Size</Subheading>
          <Description>
            Pass a `number` to the `size` prop to set a fixed with on the Logo
            component or use `fluid` if you want the component to fill the
            available space from its parent.
          </Description>
          <Stories title="Examples"></Stories>
          <ArgTypes of={LogoMeta} />
        </>
      ),
    },
  },
};

export default LogoMeta;

export const BasicLogo: StoryObj<typeof Logo> = {
  args: basic,
  name: "Default",
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    subbrand: {
      table: {
        disable: true,
      },
    },
  },
};

const argTypesWithTheme = {
  theme: {
    control: "select",
    options: ["light", "dark"],
  },
};

export const SubBrandLogo: StoryObj<typeof Logo> = {
  args: withSubBrand,
  name: "Sub-brand",
  argTypes: argTypesWithTheme,
};

export const LongSubrand: StoryObj<typeof Logo> = {
  args: withLongSubbrand,
  name: "Sub-brand on multiple lines",
  argTypes: argTypesWithTheme,
};

export const DarkTheme: StoryObj<typeof Logo> = {
  args: withDarkTheme,
  name: "Dark theme",
  argTypes: argTypesWithTheme,
  parameters: {
    backgrounds: {
      default: "ilo",
      values: [{ name: "ilo", value: brand["ilo-dark-blue"].value }],
    },
  },
};

export const FluidWidth: StoryObj<typeof Logo> = {
  args: fluidWidth,
  name: "Fluid width",
  parameters: {
    backgrounds: {
      default: "ilo",
      values: [{ name: "ilo", value: brand["ilo-dark-blue"].value }],
    },
  },
  argTypes: {
    size: { control: "text" },
    ...argTypesWithTheme,
  },
  render: (args) => (
    <div style={{ width: "600px", border: "1px dotted #fff" }}>
      <Logo {...args} />
    </div>
  ),
};
