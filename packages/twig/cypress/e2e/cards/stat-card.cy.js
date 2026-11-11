import fixture from "../../fixtures/statcard.json";

describe("Stat card", () => {
  it("renders correctly", () => {
    cy.visitPreview("statcard", fixture);
    cy.get(".ilo--card__type__stat").within(($card) => {
      cy.wrap($card)
        .should("have.class", `ilo--card__color__${fixture.color}`)
        .and("have.class", `ilo--card__size__${fixture.settings.size}`);

      cy.get(`${fixture.settings.titleLevel}.ilo--card--title`).should(
        "contain.text",
        fixture.title
      );
      cy.get(".ilo--card--intro").should("contain.text", fixture.intro);
      cy.get(".ilo--card--source a")
        .should("have.attr", "href", fixture.source.url)
        .and("contain.text", fixture.source.label);
    });
  });
});
