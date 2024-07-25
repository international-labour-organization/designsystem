describe("Text card", () => {
  it("renders the text card correctly", () => {
    cy.visit("/patterns/textcard");
    cy.getPreview("textcard").within(() => {
      cy.contains("Podcast");
      cy.contains("Can digital technology be an equality machine?");
      cy.contains("20 September 2022");
    });
  });
});
