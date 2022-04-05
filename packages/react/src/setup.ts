import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { setGlobalConfig } from "@storybook/testing-react";
import * as globalStorybookConfig from "../.storybook/preview"; // path of your preview.js file

setGlobalConfig(globalStorybookConfig);
