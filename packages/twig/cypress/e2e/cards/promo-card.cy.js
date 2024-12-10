describe("Promo card", () => {
  it("renders the promo card correctly", () => {
    cy.visit("/admin/appearance/ui/patterns/promocard");
    cy.getPreview("promocard").within(() => {
      cy.contains("Podcast");
      cy.contains("Can digital technology be an equality machine?");
      cy.contains("A toxic combination");
      cy.contains("Read the press release");
    });
  });
});
