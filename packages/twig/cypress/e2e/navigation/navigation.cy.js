describe("navigation", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/navigation");
    cy.getPreview("navigation").first().as("navigationSection");
  });

  it("renders the navigation correctly", () => {
    cy.get("@navigationSection").within(() => {
      cy.get("img")
        .should("have.attr", "src")
        .and("include", "images/logo_en_horizontal_white.svg");
      cy.contains("English");
      cy.contains("Topics");
      cy.contains("Countries");
      cy.contains("About");
      cy.contains("More");
      cy.contains("Advancing social justice");
      cy.contains("ILO is a specialized agency");
    });
  });

  it("check if subnav works as expected", () => {
    cy.get("@navigationSection").within(() => {
      cy.get(".ilo--subnav--open").should("not.exist");

      cy.get(".ilo--nav--trigger").should("exist").click();
      cy.get(".ilo--subnav--open").should("exist");

      cy.get(".ilo--subnav")
        .should("exist")
        .should("have.attr", "style", "display: block;");
    });
  });

  it("check if search works as expected and check for focus when search button is clicked", () => {
    cy.get("@navigationSection").within(() => {
      cy.get(".ilo--search--open").should("not.exist");

      cy.get(".ilo--search--button").should("exist").click();
      cy.get(".ilo--search--open").should("exist");
      cy.get("input").should("be.focused");
    });
  });
});
