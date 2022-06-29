import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Callout.stories";
import { Callout } from "../components/Callout";
import calloutArgs from "../components/Callout/Callout.args";

const { InfoCallout, ErrorCallout, SuccessCallout, WarningCallout } =
  composeStories(stories);

describe("<Callout>", () => {
  it("Expect InfoCallout class to be based on type", () => {
    const { container } = render(<InfoCallout />);
    expect(container).not.toBeNull();
    const infoCallout = document.querySelector('div[class*="--callout--info"]');
    expect(infoCallout).not.toBeNull();
  });

  it("Expect ErrorCallout class to be based on type", () => {
    const { container } = render(<ErrorCallout />);
    expect(container).not.toBeNull();
    const errorCallout = document.querySelector(
      'div[class*="--callout--error"]'
    );
    expect(errorCallout).not.toBeNull();
  });

  it("Expect SuccessCallout class to be based on type", () => {
    const { container } = render(<SuccessCallout />);
    expect(container).not.toBeNull();
    const successCallout = document.querySelector(
      'div[class*="--callout--success"]'
    );
    expect(successCallout).not.toBeNull();
  });

  it("Expect WarningCallout class to be based on type", () => {
    const { container } = render(<WarningCallout />);
    expect(container).not.toBeNull();
    const warningCallout = document.querySelector(
      'div[class*="--callout--warning"]'
    );
    expect(warningCallout).not.toBeNull();
  });
});
