import fixture from "../../fixtures/languagetoggle.json";

const url = `/pattern-preview?id=languagetoggle&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Language Toggle", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--language-toggle").as("languageToggle");
    cy.get("@languageToggle")
      .find("button.ilo--language-toggle--container")
      .as("toggleButton");
    cy.get("@languageToggle")
      .find(".ilo--language-toggle--context-menu")
      .as("contextMenu");
  });

  it("renders the language label correctly", () => {
    cy.get("@languageToggle")
      .find("button")
      .should("contain.text", fixture.language);
  });

  it("renders the icon when hideicon is false", () => {
    if (!fixture.hideicon) {
      cy.get("@languageToggle")
        .find(".ilo--language-toggle--icon")
        .should("exist");
    } else {
      cy.get("@languageToggle")
        .find(".ilo--language-toggle--icon")
        .should("not.exist");
    }
  });

  it("has the correct theme applied", () => {
    cy.get("@languageToggle").should(
      "have.class",
      `ilo--language-toggle--${fixture.settings.theme}`
    );
  });

  it("menu is hidden by default", () => {
    cy.get("@languageToggle")
      .find(".ilo--language-toggle--context-menu")
      .should("be.hidden");
  });

  it("menu opens when button is clicked", () => {
    cy.get("@languageToggle")
      .find("button.ilo--language-toggle--container")
      .click();
    cy.get("@languageToggle")
      .find(".ilo--language-toggle--context-menu")
      .should("be.visible");
  });

  it("menu closes when button is clicked again", () => {
    cy.get("@languageToggle")
      .find("button.ilo--language-toggle--container")
      .click();
    cy.get("@languageToggle")
      .find("button.ilo--language-toggle--container")
      .click();
    cy.get("@languageToggle")
      .find(".ilo--language-toggle--context-menu")
      .should("be.hidden");
  });

  it("renders the correct number of language options", () => {
    if (fixture.links) {
      cy.get("@languageToggle")
        .find(".ilo--language-toggle--context-menu a")
        .should("have.length", fixture.links.length);
    }
  });

  it("ensures each language option has a valid href", () => {
    if (fixture.links) {
      cy.get("@languageToggle")
        .find(".ilo--language-toggle--context-menu a")
        .each(($link) => {
          cy.wrap($link).should("have.attr", "href").and("not.be.empty");
        });
    }
  });

  it("has correct accessibility attributes (aria-expanded & hidden)", () => {
    // By default, aria-expanded should be false and hidden should be present
    cy.get("@toggleButton").should("have.attr", "aria-expanded", "false");
    cy.get("@contextMenu").should("have.attr", "hidden");

    // After clicking, aria-expanded should be true and hidden should be removed
    cy.get("@toggleButton").click();
    cy.get("@toggleButton").should("have.attr", "aria-expanded", "true");
    cy.get("@contextMenu").should("not.have.attr", "hidden");

    // After clicking again, it should revert to default state
    cy.get("@toggleButton").click();
    cy.get("@toggleButton").should("have.attr", "aria-expanded", "false");
    cy.get("@contextMenu").should("have.attr", "hidden");
  });
});
