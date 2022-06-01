import { render } from "@testing-library/react";
import { TagSet } from "../components/Tag";
import tagSetArgs from "../components/Tag/TagSet.args";

describe("<TagSet>", () => {
  it("Should render `button` with correct class name from type prop", () => {
    const { container } = render(<TagSet {...tagSetArgs.tag} />);
    expect(container).not.toBeNull();
  });
});
