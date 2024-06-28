describe("logo grid", () => {
  beforeEach(() => {
    cy.visit("/patterns/logogrid");
    cy.getPreview("logogrid").first().as("logoGridSection");
  });

  it("renders the logo grid correctly", () => {
    cy.get("@logoGridSection").within(() => {
      cy.get(".ilo--logo-grid--logos").find("a").should("have.length", 6);
      cy.get(".ilo--logo-grid--item").should("exist");
    });
  });

  it("checks if logo grid functions as expected", () => {
    cy.get(".ilo--logo-grid--item")
      .should("have.attr", "href")
      .and("not.be.empty");

    cy.get(".ilo--logo-grid--item")
      .first()
      .within(() => {
        cy.get("img").should("have.attr", "src").and("not.be.empty");
      });
  });
});
