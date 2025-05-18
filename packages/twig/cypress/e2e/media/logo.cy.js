import fixture from "../../fixtures/logo.json";

const url = `/pattern-preview?id=logo&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Logo", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--logo").as("logo");
  });

  describe("Basic Rendering", () => {
    it("renders the logo image with correct attributes", () => {
      cy.get("@logo").within(() => {
        cy.get("img")
          .should("exist")
          .and("have.attr", "src", fixture.src)
          .and("have.attr", "alt", fixture.alt)
          .and("have.class", fixture.imgClassName);
      });
    });

    it("applies the correct wrapper class", () => {
      cy.get("@logo").should("have.class", fixture.className);
    });
  });

  describe("Link Functionality", () => {
    it("wraps the logo in a link when link data is provided", () => {
      cy.get("@logo")
        .should("match", "a")
        .and("have.attr", "href", fixture.link.href)
        .and("have.attr", "aria-label", fixture.link.label)
        .and("have.class", `${fixture.className}--link`);
    });

    it("renders without a link when no link data is provided", () => {
      // Visit with modified fixture without link
      const fixtureWithoutLink = { ...fixture, link: undefined };

      cy.visit(
        `/pattern-preview?id=logo&fields=${encodeURI(
          JSON.stringify(fixtureWithoutLink)
        )}`
      );

      cy.get(".ilo--logo").should("match", "img").and("not.match", "a");
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes when wrapped in a link", () => {
      cy.get("@logo").should("have.attr", "aria-label", fixture.link.label);
    });

    it("maintains proper image alt text", () => {
      cy.get("@logo").within(() => {
        cy.get("img").should("have.attr", "alt", fixture.alt);
      });
    });
  });
});
