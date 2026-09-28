import fixture from "../../fixtures/hero.json";

const visitHero = (fields) =>
  cy.visit(
    `/pattern-preview?id=hero&fields=${encodeURI(JSON.stringify(fields))}`
  );

const without = (key) => {
  const fields = { ...fixture };
  delete fields[key];
  return fields;
};

const sources = [...fixture.image.url].reverse().slice(0, -1);

describe("hero", () => {
  beforeEach(() => {
    visitHero(fixture);
    cy.get(".hero").as("hero");
  });

  it("should render the layout and theme classes", () => {
    cy.get("@hero")
      .should("have.class", "hero__card-justify__start")
      .and("have.class", "hero__card-align__baseline")
      .and("have.class", "hero__card-size__small")
      .and("have.class", "hero__poster-size__large")
      .and("have.class", "hero__card-theme__dark");
  });

  it("should render the hero card", () => {
    cy.get("@hero").find(".hero--card .ilo--hero-card").should("exist");
  });

  it("should render breadcrumb when provided", () => {
    cy.get("@hero").find(".hero--breadcrumbs .ilo--breadcrumb").should("exist");
  });

  it("should not render breadcrumb when not provided", () => {
    visitHero(without("breadcrumb"));
    cy.get(".hero--breadcrumbs").should("not.exist");
  });

  it("should render caption when provided", () => {
    cy.get("@hero")
      .find(".hero--caption--wrapper .ilo--tooltip--wrapper")
      .should("exist");
  });

  it("should not render caption when not provided", () => {
    visitHero(without("caption"));
    cy.get(".hero--caption--wrapper").should("not.exist");
  });

  it("should render responsive image sources in descending breakpoint order", () => {
    cy.get("@hero")
      .find(".hero--image source")
      .then(($sources) => {
        const breakpoints = $sources
          .toArray()
          .map((source) =>
            Number(source.getAttribute("media").match(/\d+/)[0])
          );

        expect(breakpoints).to.deep.equal([1280, 1024, 768]);
      });
  });

  it("should apply correct responsive image source attributes", () => {
    cy.get("@hero")
      .find(".hero--image source")
      .should("have.length", sources.length)
      .each(($source, index) => {
        cy.wrap($source)
          .should("have.attr", "srcset", sources[index].src)
          .and(
            "have.attr",
            "media",
            `(min-width: ${sources[index].breakpoint}px)`
          );
      });
  });

  it("should render the fallback image with correct attributes", () => {
    cy.get("@hero")
      .find(".hero--image img")
      .should("have.attr", "src", fixture.image.url[0].src)
      .and("have.attr", "alt", fixture.image.alt)
      .and("have.attr", "fetchpriority", "high");
  });

  it("should not render image section when no image provided", () => {
    visitHero(without("image"));
    cy.get(".hero--image").should("not.exist");
  });

  it("should apply gap class when gap is provided", () => {
    visitHero({
      ...fixture,
      settings: { ...fixture.settings, gap: "transparent" },
    });
    cy.get(".hero").should("have.class", "hero__gap__transparent");
  });
});
