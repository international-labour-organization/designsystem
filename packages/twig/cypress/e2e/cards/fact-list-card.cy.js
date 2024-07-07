describe("Factlist card", () => {
  it("renders the text card correctly", () => {
    cy.visit("/patterns/factlistcard");
    cy.getPreview("factlistcard").within(() => {
      cy.contains("Global employment growth");
      cy.contains("The current slowdown");
    });
  });
});
