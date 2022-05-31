import { TagSetProps } from "./TagSet.props";

const tag: TagSetProps = {
  allowMultipleActive: true,
  onButtonClick: (e) => {
    console.log(e.target);
  },
  children: "",
  defaultTagActive: ["tag1", "tag2"],
};

/**
 * Sample prop definitions for TagSet's enumerable properties (imported in stories and tests).
 */
const TagSetArgs = {
  tag,
};

export default TagSetArgs;
