describe("List", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/list");
    cy.getPreview("list").first().as("listSection");
  });

  it("renders the list correctly", () => {
    cy.get("@listSection").within(() => {
      cy.contains("Facts about the ILO");
      cy.contains("The ILO advocates for social justice");
      cy.contains("The ILO promotes gender equality");
    });
  });

  it("checks if list is structured correctly", () => {
    cy.get("@listSection").within(() => {
      cy.get(".ilo--list").should("exist");
      cy.get(".ilo--list__unstyled").should("exist");
      cy.get(".ilo--list--title").should("exist");
      cy.get(".ilo--list--item").should("exist");
    });
  });
});
