import Button from "../components/button/button.twig";
import ButtonPatterns from "../components/button/button.pattern.yml";

import { compose } from "../src/bridge/index";

const { root, Default } = compose(Button, ButtonPatterns);

const Meta = {
  title: "Components/User Interfaces/Button",
  tags: ["autodocs"],
  ...root,
};

export default Meta;
export { Default };
