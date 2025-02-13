import fixture from "../../fixtures/blockquote.json";

const url = `/pattern-preview?id=blockquote&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Blockquote", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--blockquote").as("blockquote");
  });

  it("should render the correct quote and citation", () => {
    cy.get("@blockquote")
      .find("p")
      .should("exist")
      .and("contain", fixture.quote);

    cy.get("@blockquote")
      .find("cite")
      .should("exist")
      .and("contain", fixture.cite);
  });

  it("should show opening quote marks", () => {
    cy.get("@blockquote").then(($el) => {
      const before = window.getComputedStyle($el[0], "::before");
      expect(before.getPropertyValue("mask-image")).to.not.eq("none");
    });
  });

  it("should show closing quote marks", () => {
    cy.get("@blockquote")
      .find("p")
      .then(($el) => {
        const after = window.getComputedStyle($el[0], "::after");
        expect(after.getPropertyValue("mask-image")).to.not.eq("none");
      });
  });
});
