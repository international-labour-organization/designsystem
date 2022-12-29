import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
} from "@storybook/addon-docs";
import { Profile } from "../../components/Profile";
import { ProfileProps } from "../../components/Profile/Profile.props";
import profileArgs from "../../components/Profile/Profile.args";

const ProfileMeta: Meta<typeof Profile> = {
  title: "Components/Content/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Profile component is used to display information about a person.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgsTable></ArgsTable>
        </>
      ),
    },
  },
} as Meta<typeof Profile>;

export default ProfileMeta;

const ProfileTemplate: StoryFn<ProfileProps> = (args) => <Profile {...args} />;

export const Basic: StoryFn<ProfileProps> = ProfileTemplate.bind({});

export const HasAll: StoryFn<ProfileProps> = ProfileTemplate.bind({});

export const HasDescription: StoryFn<ProfileProps> = ProfileTemplate.bind({});

export const HasLink: StoryFn<ProfileProps> = ProfileTemplate.bind({});

export const HasRole: StoryFn<ProfileProps> = ProfileTemplate.bind({});

// enumerate the props for the variations on the Profile component
Basic.args = profileArgs.basic;
Basic.storyName = "Basic";

HasAll.args = profileArgs.hasall;
HasAll.storyName = "Detailed";

HasDescription.args = profileArgs.hasdescription;
HasDescription.storyName = "Description";

HasLink.args = profileArgs.haslink;
HasLink.storyName = "Link";

HasRole.args = profileArgs.hasrole;
HasRole.storyName = "Role";
