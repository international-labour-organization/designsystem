import { ProfileProps } from "./Profile.props";

const basic: ProfileProps = {
  avatar: "/ilo-dg.jpg",
  className: "storybook",
  name: "Gilbert F. Houngbo",
};

const hasall: ProfileProps = {
  avatar: "/ilo-dg.jpg",
  className: "storybook",
  description:
    "Gilbert F. Houngbo was elected as the ILO’s 11th Director-General by the organization’s Governing Body in March 2022",
  link: {
    label: "Learn more",
    url: "http://www.google.com",
  },
  name: "Gilbert F. Houngbo",
  role: "ILO Director-General",
};

const hasdescription: ProfileProps = {
  avatar: "/ilo-dg.jpg",
  className: "storybook",
  description:
    "Gilbert F. Houngbo was elected as the ILO’s 11th Director-General by the organization’s Governing Body in March 2022",
  name: "Gilbert F. Houngbo",
};

const haslink: ProfileProps = {
  avatar: "/ilo-dg.jpg",
  className: "storybook",
  link: {
    label: "Learn more",
    url: "http://www.google.com",
  },
  name: "Gilbert F. Houngbo",
};

const hasrole: ProfileProps = {
  avatar: "/ilo-dg.jpg",
  className: "storybook",
  name: "Gilbert F. Houngbo",
  role: "ILO Director-General",
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
