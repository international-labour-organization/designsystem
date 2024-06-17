import Icon from "../components/icon/icon.twig";
import IconPatterns from "../components/icon/icon.pattern.yml";

import { compose } from "../src/bridge/index";

const { root, Default } = compose(Icon, IconPatterns);

const Meta = {
  title: "Components/User Interfaces/Icon",
  tags: ["autodocs"],
  ...root,
};

export default Meta;
export { Default };
