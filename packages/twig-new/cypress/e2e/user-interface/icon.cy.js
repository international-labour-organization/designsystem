describe("icon", () => {
  beforeEach(() => {
    cy.visit("/patterns/icon");
    cy.getPreview("icon").first().as("iconSection");
  });

  it("renders the icon component correctly", () => {
    cy.get("@iconSection").within(() => {
      cy.get("svg")
        .should("exist")
        .should("have.attr", "fill", "#000000")
        .should("have.attr", "width", "24")
        .should("have.attr", "height", "24");
    });
  });
});
