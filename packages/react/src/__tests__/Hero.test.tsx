import { render } from "@testing-library/react";
import { Hero } from "../components/Hero";
import heroArgs from "../components/Hero/Hero.args";

describe("<Hero>", () => {
  it("Should render with correct content", () => {
    const { container } = render(<Hero {...heroArgs.homeHero} />);
    expect(container).not.toBeNull();
    expect(container.querySelector("h2")?.textContent).toEqual(
      heroArgs.homeHero.heroCard.title
    );
  });

  it("Should render Hero with intro.", () => {
    const { container } = render(<Hero {...heroArgs.articleHero} />);
    expect(container).not.toBeNull();
    const introElement = document.querySelector('[class*="--intro"]');
    expect(introElement?.textContent).toEqual(
      heroArgs?.articleHero?.heroCard?.intro
    );
  });
});
