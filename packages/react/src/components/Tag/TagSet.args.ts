import { TagSetProps } from "./TagSet.props";

const tag: TagSetProps = {
  allowMultipleActive: true,
  onButtonClick: (e) => {
    console.log(e.target);
  },
  children: "",
  defaultTagActive: ["tag1", "tag2"],
};

const buttonTag: TagSetProps = {
  allowMultipleActive: true,
  onButtonClick: (e) => {
    console.log(e.target);
  },
  children: "",
  defaultTagActive: [
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
    "tag8",
    "tag9",
  ],
};

/**
 * Sample prop definitions for TagSet's enumerable properties (imported in stories and tests).
 */
const TagSetArgs = {
  buttonTag,
  tag,
};

export default TagSetArgs;
