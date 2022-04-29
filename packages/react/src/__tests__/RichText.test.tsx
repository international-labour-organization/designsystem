import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/RichText.stories";
import { RichText } from "../components/RichText";
import richTextArgs from "../components/RichText/richText.args";

describe("<RichText>", () => {
  it("Should render `div` with content.", () => {
    const richTextElement = render(<RichText {...richTextArgs} />);
    expect(richTextElement).not.toBeNull();
    expect(richTextElement.textContent).toEqual(richTextArgs.content);
  });
});
