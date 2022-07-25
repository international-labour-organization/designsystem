import { ProfileProps } from "./Profile.props";

const basic: ProfileProps = {
  avatar: "http://placekitten.com/128/128",
  className: "storybook",
  name: "Firstname Lastname",
};

const hasall: ProfileProps = {
  avatar: "http://placekitten.com/128/128",
  className: "storybook",
  description:
    "Firstname Lastname is the Senior Media Strategist. He has been with ILO for eight years.",
  link: {
    label: "Optional Link",
    url: "http://www.google.com",
  },
  name: "Firstname Lastname",
  role: "Senior Media Strategist",
};

const hasdescription: ProfileProps = {
  avatar: "http://placekitten.com/128/128",
  className: "storybook",
  description:
    "Firstname Lastname is the Senior Media Strategist. He has been with ILO for eight years.",
  name: "Firstname Lastname",
};

const haslink: ProfileProps = {
  avatar: "http://placekitten.com/128/128",
  className: "storybook",
  link: {
    label: "Optional Link",
    url: "http://www.google.com",
  },
  name: "Firstname Lastname",
};

const hasrole: ProfileProps = {
  avatar: "http://placekitten.com/128/128",
  className: "storybook",
  name: "Firstname Lastname",
  role: "Senior Media Strategist",
};

/**
 * Sample prop definitions for Profiles's enumerable properties (imported in stories and test)
 */
const ProfileArgs = {
  basic,
  hasall,
  hasdescription,
  haslink,
  hasrole,
};

export default ProfileArgs;
