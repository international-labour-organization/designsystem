import fixture from "../../fixtures/featurecard.json";

const url = `/pattern-preview?id=featurecard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Feature card", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--card").as("card");
  });

  it("should have the correct theme applied", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__theme__${fixture.settings.theme}`
    );
  });

  it("should have the correct size class", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__size__${fixture.settings.size}`
    );
  });

  it("should contain a link with the correct title", () => {
    cy.get("@card")
      .find(".ilo--card--link")
      .should("have.attr", "href", fixture.link);
    cy.get("@card")
      .find(".ilo--card--link--text")
      .should("contain", fixture.title);
  });

  it("should display an image if provided", () => {
    if (fixture.image) {
      cy.get("@card").find(".ilo--card--image--wrapper").should("exist");
    } else {
      cy.get("@card").find(".ilo--card--image--wrapper").should("not.exist");
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

  it("should display a date if provided", () => {
    if (fixture.date) {
      cy.get("@card")
        .find(".ilo--card--date")
        .should("exist")
        .and("contain", fixture.date.human);
    } else {
      cy.get("@card").find(".ilo--card--date").should("not.exist");
    }
  });

  it("should display a CTA if provided", () => {
    if (fixture.cta) {
      cy.get("@card").find(".ilo--link-list").should("exist");
    } else {
      cy.get("@card").find(".ilo--link-list").should("not.exist");
    }
  });
});
