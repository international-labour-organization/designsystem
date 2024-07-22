describe("Table", () => {
  beforeEach(() => {
    cy.visit("/patterns/table");
    cy.getPreview("table").first().as("tableSection");
  });

  it("renders the table correctly", () => {
    cy.get("@tableSection").within(() => {
      cy.contains("Headline");
      cy.contains("This is my descriptive copy");
      cy.contains("Plain Text One");
      cy.contains("Plain Text With Links");
      cy.contains("table cell text one");
    });
  });

  it("checks if table gets sorted by clicking column header", () => {
    cy.get("@tableSection").within(() => {
      cy.get(".ilo--table--head--cell.sortable").should("exist");
      cy.get(".ilo--table--head--cell.sortable").first().click();
      cy.get(".ilo--table--head--cell.sortable")
        .first()
        .should("exist")
        .and("have.attr", "aria-sort", "descending");
    });
    cy.get(".ilo--table--head--cell.sortable").first().click();
    cy.get(".ilo--table--head--cell.sortable")
      .first()
      .should("exist")
      .and("have.attr", "aria-sort", "ascending");
  });
});
