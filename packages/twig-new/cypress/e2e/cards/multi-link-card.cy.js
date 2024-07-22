describe("Multilink card", () => {
  it("renders the feature card correctly", () => {
    cy.visit("/patterns/multilinkcard");
    cy.getPreview("multilinkcard").within(() => {
      cy.contains("Podcast");
      cy.contains("Advancing social justice");
      cy.contains("As the United Nations agency");
      cy.contains("Read the press release");
      cy.contains("See the statement");
      cy.contains("Remarks to G7 Openening Session");

      cy.get("picture")
        .first()
        .within(() => {
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
