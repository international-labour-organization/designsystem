describe("image", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/image");
    cy.getPreview("image").first().as("imageSection");
  });

  it("renders the image correctly", () => {
    cy.get("@imageSection").within(() => {
      cy.get("picture").within(() => {
        cy.get("source").should("have.length", 3);
        cy.get("img")
          .first()
          .should("have.attr", "loading", "lazy")
          .should("have.attr", "src")
          .and("include", "/images/small.jpg");
      });

      cy.contains("Marcel Crozet");
      cy.contains("Women construction workers in Nepal");
    });
  });
});
