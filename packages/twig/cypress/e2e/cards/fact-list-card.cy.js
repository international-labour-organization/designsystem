import fixture from "../../fixtures/factlistcard.json";

const url = `/pattern-preview?id=factlistcard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Factlist card", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--card__type__factlist").as("card");
  });

  it("renders the title and list items correctly", () => {
    cy.get(".ilo--card--title").should("contain", fixture.title);
    cy.get("ul > li").should("have.length", fixture.list.items.length);
  });

  it("applies the correct theme class", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__theme__${fixture.settings.theme}`
    );
  });

  it("ensures text and :before pseudo-elements are white in the dark theme", () => {
    cy.get("@card")
      .should("have.class", "ilo--card__theme__dark")
      .and("be.visible")
      .and("have.css", "color", "rgb(255, 255, 255)");

    cy.get("@card").then(($el) => {
      const pseudoElementColor = window.getComputedStyle(
        $el[0],
        "::before"
      ).color;
      expect(pseudoElementColor).to.eq("rgb(255, 255, 255)");
    });
  });
});
