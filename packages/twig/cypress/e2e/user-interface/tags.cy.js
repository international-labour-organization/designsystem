describe("tags", () => {
  beforeEach(() => {
    cy.visit("/patterns/tags");
    cy.getPreview("tags").first().as("tagsSection");
  });

  it("renders the tags component correctly", () => {
    cy.get("@tagsSection").within(() => {
      cy.contains("content 1");
      cy.contains("content 2");
      cy.contains("content 3");

      cy.get(".ilo--tags").should("exist").children("li");
    });
  });
});
