describe("Stat card", () => {
  it("renders the text card correctly", () => {
    cy.visit("/patterns/statcard");
    cy.getPreview("statcard").within(() => {
      cy.contains("Global employment growth down by half in 2023");
      cy.contains("The current global economic slowdown");
      cy.contains("World Employment and Social Outlook: Trends 2023");
    });
  });
});
