describe("Feature card", () => {
  it("renders the feature card correctly", () => {
    cy.visit("/patterns/featurecard");
    cy.getPreview("featurecard").within(() => {
      cy.contains("Podcast");
      cy.contains("Can digital technology be an equality machine?");
      cy.contains("20 September 2022");
      cy.contains("Read more");

      cy.get("picture").within(() => {
        cy.get("source").should("have.length", 3);
        cy.get("source")
          .should("have.attr", "srcset")
          .and("include", "/images/large.jpg");
        cy.get("img")
          .should("have.attr", "src")
          .and("include", "/images/small.jpg");
      });
    });
  });
});
