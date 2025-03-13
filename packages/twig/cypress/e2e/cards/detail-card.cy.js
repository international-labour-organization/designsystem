import fixture from "../../fixtures/detailcard.json";

const url = `/pattern-preview?id=detailcard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Card Detail Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(`.ilo--card`).as("card");
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

  it("should have the correct size class applied", () => {
    cy.get("@card").should("have.class", `ilo--card__size__${fixture.size}`);
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

  it("should have the correct title level", () => {
    cy.get("@card")
      .find(fixture.titleLevel)
      .should("have.class", "ilo--card--title");
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

  it("should not display date if dateExtra is provided", () => {
    if (fixture.dateExtra) {
      cy.get("@card").find(".ilo--card--date").should("not.exist");
    }
  });

  it("should show date extra if provided", () => {
    if (fixture.dateExtra) {
      cy.get("@card")
        .find(".ilo--card--date-extra")
        .should("contain.text", fixture.dateExtra);
    } else {
      cy.get("@card").find(".ilo--card--date-extra").should("not.exist");
    }
  });

  it("should show date extra if provided", () => {
    if (fixture.dateExtra) {
      cy.get("@card")
        .find(".ilo--card--date-extra")
        .should("contain.text", fixture.dateExtra);
    } else {
      cy.get("@card").find(".ilo--card--date-extra").should("not.exist");
    }
  });

  it("should display an image if provided", () => {
    if (fixture.image) {
      cy.get("@card")
        .find(".ilo--card--image--wrapper img")
        .should("have.attr", "alt", fixture.image.alt)
        .and("have.attr", "loading", fixture.image.loading);

      fixture.image.url.forEach(({ breakpoint, src }) => {
        cy.get("@card")
          .find(".ilo--card--image--wrapper img")
          .should("have.attr", "src")
          .and("contain", src);
      });
    } else {
      cy.get("@card").find(".ilo--card--image--wrapper").should("not.exist");
    }
  });

  it("should apply video class if isvideo is true", () => {
    if (fixture.isvideo) {
      cy.get("@card").should("have.class", "ilo--card__isvideo");
    } else {
      cy.get("@card").should("not.have.class", "ilo--card__isvideo");
    }
  });
});
