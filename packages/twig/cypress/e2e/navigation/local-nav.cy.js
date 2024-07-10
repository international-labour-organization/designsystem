describe("local nav", () => {
  beforeEach(() => {
    cy.visit("/patterns/localnav");
    cy.getPreview("localnav").first().as("localNavSection");
  });

  it("renders the local nav correctly", () => {
    cy.get("@localNavSection").within(() => {
      cy.get("img")
        .should("have.attr", "src")
        .and("include", "/brand-assets/logo_en_horizontal_white.svg");

      cy.contains("Menu Item 1");
      cy.contains("Menu Item 2");
      cy.contains("Menu Item 3");
      cy.contains("Menu Item 4");
      cy.contains("Go to main website");
      cy.contains("English");
    });
  });

  it("checks for links in buttons", () => {
    // Logo
    cy.get(".ilo--nav--local--logo-wrapper")
      .should("exist")
      .find("a")
      .should("have.attr", "href", "https://www.ilo.org/");

    // Main menu
    cy.get(".ilo--language-switcher--link--wrap")
      .should("exist")
      .find("a")
      .should("have.attr", "href", "https://www.ilo.org/");
  });

  it("check if context menu works as expected", () => {
    // Logo
    cy.get(".ilo--nav--local--logo-wrapper")
      .should("exist")
      .find("a")
      .should("have.attr", "href", "https://www.ilo.org/");

    // Main menu
    cy.get(".ilo--language-switcher--button")
      .click()
      .then(() => {
        cy.get(".ilo--context-menu").should("exist");
      });
  });
});
