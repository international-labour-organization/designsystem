import fixture from "../../fixtures/promocard.json";

const url = `/pattern-preview?id=promocard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Promo Card Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(`.ilo--card`).as("card");
  });

  it("should have the correct theme applied", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__theme__${fixture.settings.theme}`
    );
  });

  it("should have the correct size class applied", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__size__${fixture.settings.size}`
    );
  });

  it("should use 'standard' as the default size when size is not specified", () => {
    // Create a modified fixture without the size property
    const modifiedFixture = { ...fixture };
    delete modifiedFixture.settings.size;

    const modifiedUrl = `/pattern-preview?id=promocard&fields=${encodeURI(
      JSON.stringify(modifiedFixture)
    )}`;

    cy.visit(modifiedUrl);
    cy.get(`.ilo--card`).should("have.class", "ilo--card__size__standard");
  });

  it("should have the correct title level", () => {
    cy.get("@card")
      .find(fixture.settings.titleLevel)
      .should("have.class", "ilo--card--title");
  });

  it("should render with the correct title", () => {
    cy.get("@card")
      .find(".ilo--card--title")
      .should("contain.text", fixture.title);
  });

  it("should have a valid link", () => {
    cy.get("@card")
      .find(".ilo--card--link")
      .should("have.attr", "href", fixture.link);
  });

  it("should display an eyebrow if provided", () => {
    if (fixture.eyebrow) {
      cy.get("@card")
        .find(".ilo--card--eyebrow")
        .should("contain.text", fixture.eyebrow);
    } else {
      cy.get("@card").find(".ilo--card--eyebrow").should("not.exist");
    }
  });

  it("should display an intro text if provided", () => {
    if (fixture.intro) {
      cy.get("@card")
        .find(".ilo--card--intro")
        .should("contain.text", fixture.intro);
    } else {
      cy.get("@card").find(".ilo--card--intro").should("not.exist");
    }
  });

  it("should display a CTA if provided", () => {
    if (fixture.cta) {
      cy.get("@card")
        .find(".ilo--card--cta")
        .find("a")
        .should("have.attr", "href", fixture.cta.url)
        .and("contain.text", fixture.cta.label);
    } else {
      cy.get("@card").find(".ilo--card--cta").should("not.exist");
    }
  });

  it("should apply cornercut class when specified", () => {
    if (fixture.settings.cornercut) {
      cy.get("@card").should("have.class", "ilo--card__cornercut");
    } else {
      cy.get("@card").should("not.have.class", "ilo--card__cornercut");
    }
  });
});
