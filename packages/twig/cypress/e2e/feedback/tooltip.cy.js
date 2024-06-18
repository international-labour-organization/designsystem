describe("tooltip", () => {
  beforeEach(() => {
    cy.visit("/patterns/tooltip");
    cy.getPreview("tooltip").first().as("tooltipSection");
  });

  it("renders the tooltip correctly and checks if popover works on hover", () => {
    cy.get("@tooltipSection").within(() => {
      cy.get(".ilo--tooltip").should("not.be.visible");
      cy.get(".ilo--tooltip--wrapper")
        .should("exist")
        .invoke("show")
        .trigger("mouseover", { force: true });
      cy.contains("Tooltip text");
      cy.get(".ilo--tooltip").should("be.visible");
    });
  });
});
