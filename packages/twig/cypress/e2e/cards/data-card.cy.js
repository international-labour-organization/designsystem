import fixture from "../../fixtures/datacard.json";

const url = `/pattern-preview?id=datacard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Factlist card", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--card__type__data").as("card");
  });

  it("should be the right size", () => {
    cy.get("@card").should("have.class", `ilo--card__size__${fixture.size}`);
  });

  it("should have the right number of columns", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__type__data__columns__${fixture.columns}`
    );
  });

  it("should display an image if provided", () => {
    if (fixture.image) {
      cy.get("@card").find(".ilo--card--image").should("exist");
    } else {
      cy.get("@card").find(".ilo--card--image").should("not.exist");
    }
  });

  it("should display an eyebrow if provided", () => {
    if (fixture.eyebrow) {
      cy.get("@card")
        .find(".ilo--card--eyebrow")
        .should("exist")
        .and("contain", fixture.eyebrow);
    } else {
      cy.get("@card").find(".ilo--card--eyebrow").should("not.exist");
    }
  });

  it("should display the correct number of content items", () => {
    if (fixture.dataset.content) {
      cy.get("@card")
        .find(".ilo--card--area--content")
        .should("have.length", fixture.dataset.content.items.length);
    }
  });

  it("should display the correct number of file links if provided", () => {
    if (fixture.dataset.files) {
      cy.get("@card")
        .find(".ilo--card__type__data--content-files")
        .find("a")
        .should("have.length", fixture.dataset.files.items.length);
    }
  });

  it("should display the correct number of generic links if provided", () => {
    if (fixture.dataset.links) {
      cy.get("@card")
        .find(".ilo--card__type__data--content-links")
        .find("a")
        .should("have.length", fixture.dataset.links.items.length);
    }
  });

  it("should display the correct number of CTA links if provided", () => {
    if (fixture.dataset.cta) {
      cy.get("@card")
        .find(".ilo--card__type__data--content-cta")
        .find("a")
        .should("have.length", fixture.dataset.cta.items.length);
    }
  });

  it("if the card has size narrow, it should only have one column", () => {
    const narrowFixture = { ...fixture, size: "narrow" };
    const narrowUrl = `/pattern-preview?id=datacard&fields=${encodeURI(
      JSON.stringify(narrowFixture)
    )}`;
    cy.visit(narrowUrl);
    cy.get("@card").should("have.class", "ilo--card__type__data__columns__one");
  });
});
