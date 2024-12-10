describe("readmore", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/readmore");
    cy.getPreview("readmore").first().as("readMoreSection");
  });

  it("renders the readmore component correctly", () => {
    cy.get("@readMoreSection").within(() => {
      cy.contains("Underlying the ILO’s work");
      cy.contains("Read More");
    });
  });

  it("check if the read more button works as expected", () => {
    cy.get("@readMoreSection").within(() => {
      cy.get(".ilo--read-more--open").should("not.exist");
      cy.contains("Close").should("not.exist");

      cy.get("button").should("exist").click();
      cy.contains("Close").should("exist");
      cy.get(".ilo--read-more--open").should("exist");
    });
  });
});
