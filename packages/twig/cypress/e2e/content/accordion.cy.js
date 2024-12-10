describe("Accordion", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/accordion");
    cy.getPreview("accordion").first().as("accordionSection");
  });

  it("renders the accordion correctly", () => {
    cy.get("@accordionSection").within(() => {
      cy.contains("Topics");
      cy.contains("Sectors");
    });
  });

  it("checks if accordion panel is opening on button click", () => {
    cy.get("@accordionSection").within(() => {
      cy.get(".ilo--accordion--panel--open").should("not.exist");
      cy.get(".ilo--accordion--button").first().click();
      cy.contains("Employment Promotion");
      cy.contains("Social Protection");
      cy.get(".ilo--accordion--panel")
        .first()
        .and("have.attr", "aria-hidden", "false");
    });
  });
});
