import { render, screen } from "twig-testing-library";

describe("Button", () => {
  it("Renders a button with the correct label", async () => {
    const { container } = await render(
      "./src/patterns/components/button/button.twig",
      {
        label: "This is a secondary button",
        size: "small",
        type: "secondary",
      }
    );
    // expect(container).toMatchSnapshot();
    expect(
      container.querySelectorAll(`.${prefix}--button--small`)
    ).toHaveLength(1);
  });
});
