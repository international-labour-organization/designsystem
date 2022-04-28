import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
// import listArgs from "../components/List/List.args";
import * as stories from "../stories/List.stories";

const { ListOrdered, ListUnordered, ListHorizontal } = composeStories(stories);

describe("<Heading>", () => {
  it("Should render `ol` with some items.", () => {
    render(<ListOrdered />);
  });

  it("Should render `ul` with some items.", () => {
    render(<ListUnordered />);
  });

  it("Should render `ul` horizontally with some items.", () => {
    render(<ListHorizontal />);
  });
});
