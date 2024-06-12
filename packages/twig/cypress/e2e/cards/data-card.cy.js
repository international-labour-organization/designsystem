describe("Data card", () => {
  it("renders the data card correctly", () => {
    cy.visit("/patterns/datacard");
    cy.getPreview("datacard")
      .first()
      .within(() => {
        cy.contains("Flagship report");
        cy.contains("Date of publication");
        cy.contains("17 March 2022");
        cy.contains("Files for download");
        cy.contains("PDF 3.2 MB");

        cy.contains("Also available in");
        cy.contains("English");
        cy.contains("Español");

        cy.get("picture").within(() => {
          cy.get("source").should("have.length", 1);
          cy.get("source")
            .should("have.attr", "srcset")
            .and("include", "/images/publication.jpg");
        });
      });
  });
});
