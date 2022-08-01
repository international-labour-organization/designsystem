import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Profile } from "../components/Profile";
import { ProfileProps } from "../components/Profile/Profile.props";
import profileArgs from "../components/Profile/Profile.args";

const propsDoc = `
The Profile has several optional elements: description, link, and role. Note that while \`avatar\` can display a placeholder image, this should be delivered via the API, so that it can be curated via the CMS, so it is required.

| Prop  |  Description  |
|----------|-------------|
| \`description\` | A short plain-text description (e.g. a short bio) |
| \`link\` | Label and URL for an optional link. |
| \`role\` | A short plain-text phrase labelling the person's role. |
`;

/**
 * Profile Story
 *
 */
export default {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Profile component is used to display information about a person.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <Description>{propsDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Profile>;

/**
 * Profile Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ProfileTemplate: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Basic = ProfileTemplate.bind({});

export const HasAll = ProfileTemplate.bind({});

export const HasDescription = ProfileTemplate.bind({});

export const HasLink = ProfileTemplate.bind({});

export const HasRole = ProfileTemplate.bind({});

// enumerate the props for the variations on the Profile component
Basic.args = profileArgs.basic;
Basic.storyName = "Profile - Basic";

HasAll.args = profileArgs.hasall;
HasAll.storyName = "Profile - All Optional Props";

HasDescription.args = profileArgs.hasdescription;
HasDescription.storyName = "Profile - With Descriptoon";

HasLink.args = profileArgs.haslink;
HasLink.storyName = "Profile - With Link";

HasRole.args = profileArgs.hasrole;
HasRole.storyName = "Profile - With Role";
