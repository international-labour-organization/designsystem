describe("pagination", () => {
  beforeEach(() => {
    cy.visit("/patterns/pagination");
    cy.getPreview("pagination").first().as("paginationSection");
  });

  it("renders the pagination correctly", () => {
    cy.get("@paginationSection").within(() => {
      cy.contains("1 of 8");
      cy.get(".ilo--pagination--first-page").should("exist");
      cy.get(".ilo--pagination--prev-page").should("exist");
      cy.get(".ilo--pagination--next-page").should("exist");
      cy.get(".ilo--pagination--last-page").should("exist");
    });
  });
});
