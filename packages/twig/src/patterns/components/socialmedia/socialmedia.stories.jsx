import "./index";
import mdx from "./socialmedia.mdx";

export default {};
const patternDefinition = require("./socialmedia.wingsuit.yml");

/* eslint-disable-next-line */
export const wingsuit = {
  patternDefinition,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
