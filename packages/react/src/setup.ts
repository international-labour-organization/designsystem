import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { setProjectAnnotations } from "@storybook/react";
import * as globalStorybookConfig from "../.storybook/preview";

setProjectAnnotations(globalStorybookConfig);
