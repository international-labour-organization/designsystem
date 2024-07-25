describe("Profile", () => {
  beforeEach(() => {
    cy.visit("/patterns/profile");
    cy.getPreview("profile").first().as("profileSection");
  });

  it("renders the profile correctly", () => {
    cy.get("@profileSection").within(() => {
      cy.contains("Gilbert F. Houngbo");
      cy.contains("ILO Director-General");
      cy.contains(
        "Gilbert F. Houngbo was elected as the ILO’s 11th Director-General"
      );
      cy.contains("Learn more");

      cy.get("figure").within(() => {
        cy.get("img").should("have.length", 1);
        cy.get("img").should("have.attr", "src").and("include", "/ilo-dg.jpg");
      });
    });
  });
});
