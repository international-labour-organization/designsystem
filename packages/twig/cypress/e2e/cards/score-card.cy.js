import fixture from "../../fixtures/scorecard.json";

const url = `/pattern-preview?id=scorecard&fields=${encodeURI(JSON.stringify(fixture))}`;

describe("Scorecard Component", () => {
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

  it("should have the correct size applied", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__size__${fixture.settings.size}`
    );
  });

  it("should render with an image if provided", () => {
    if (fixture.image) {
      cy.get("@card")
        .find(".ilo--card--image--wrapper img")
        .should("have.attr", "src", fixture.image.url[0].src);
    } else {
      cy.get("@card").find(".ilo--card--image--wrapper").should("not.exist");
    }
  });

  it("should contain the correct title and title level", () => {
    cy.get("@card")
      .find(`${fixture.settings.titleLevel}.ilo--card--title`)
      .should("contain", fixture.title);
  });

  it("should contain the correct eyebrow text", () => {
    if (fixture.eyebrow) {
      cy.get("@card")
        .find(".ilo--card--eyebrow")
        .should("contain", fixture.eyebrow);
    } else {
      cy.get("@card").find(".ilo--card--eyebrow").should("not.exist");
    }
  });

  it("should contain the correct status content", () => {
    if (fixture.status) {
      cy.get("@card")
        .find(".ilo--status")
        .should("contain", fixture.status.content);
    } else {
      cy.get("@card").find(".ilo--status").should("not.exist");
    }
  });

  it("should have a working link with the correct href", () => {
    if (fixture.link) {
      cy.get("@card")
        .find(".ilo--card--link")
        .should("have.attr", "href", fixture.link);
    } else {
      cy.get("@card").find(".ilo--card--link").should("not.exist");
    }
  });

  it("should contain dataset content if available", () => {
    if (fixture.dataset && fixture.dataset.content) {
      fixture.dataset.content.items.forEach((item) => {
        cy.get("@card")
          .find(".ilo--card--content--item")
          .should("contain", item.label);
      });
    } else {
      cy.get("@card").find(".ilo--card--content--item").should("not.exist");
    }
  });

  it("should render CTA buttons if available", () => {
    if (fixture.dataset && fixture.dataset.cta) {
      fixture.dataset.cta.items.forEach((item) => {
        cy.get("@card").find(".ilo--card--cta").should("contain", item.label);
      });
    } else {
      cy.get("@card").find(".ilo--card--cta").should("not.exist");
    }
  });

  // New test: Should apply the correct class when a custom className is provided
  it("should apply the custom class when className is provided", () => {
    if (fixture.className) {
      cy.get("@card").should("have.class", fixture.className);
    }
  });

  it("should not have a video class if isvideo is false", () => {
    if (!fixture.settings.isvideo) {
      cy.get("@card").should("not.have.class", "ilo--card__isvideo");
    }
  });
});
