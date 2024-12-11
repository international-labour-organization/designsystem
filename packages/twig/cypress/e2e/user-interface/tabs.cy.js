describe("tabs", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/tabs");
    cy.getPreview("tabs").first().as("tabsSection");
  });

  it("renders the tabs component correctly", () => {
    cy.get("@tabsSection").within(() => {
      cy.contains("Tab Label With A Really");
      cy.contains("Tab Label 2");
      cy.contains("Women construction workers in Nepal");

      cy.get("picture").within(() => {
        cy.get("source").should("have.length", 3);
        cy.get("source")
          .should("have.attr", "srcset")
          .and("include", "/images/large.jpg");
        cy.get("img")
          .should("have.attr", "src")
          .and("include", "/images/small.jpg");
      });
    });
  });

  it("checks if tab switch works as expected", () => {
    cy.get("@tabsSection").within(() => {
      // Check if first tab is selected

      cy.get(".ilo--tabs--selection--button")
        .first()
        .should("have.attr", "aria-selected", "true");

      // Fetch second tab and click it

      cy.get(".ilo--tabs--selection--button")
        .should("exist")
        .eq(1)
        .should("have.attr", "aria-selected", "false")
        .click();

      // Check if second tab is selected after click

      cy.get(".ilo--tabs--selection--button")
        .eq(1)
        .should("have.attr", "aria-selected", "true");
    });
  });
});
