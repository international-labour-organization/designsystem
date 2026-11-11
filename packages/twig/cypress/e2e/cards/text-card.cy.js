import fixture from "../../fixtures/textcard.json";

describe("Text card", () => {
  it("renders correctly", () => {
    cy.visitPreview("textcard", fixture);
    cy.get(".ilo--card__type__text").within(($card) => {
      cy.wrap($card)
        .should("have.class", `ilo--card__theme__${fixture.settings.theme}`)
        .and("have.class", `ilo--card__size__${fixture.settings.size}`);

      cy.get(".ilo--card--link")
        .should("have.attr", "href", fixture.link)
        .find(".ilo--card--link--text")
        .should("contain.text", fixture.title);
      cy.get(`${fixture.settings.titleLevel}.ilo--card--title`).should(
        "contain.text",
        fixture.title
      );
      cy.get(".ilo--card--eyebrow").should("contain.text", fixture.eyebrow);
      cy.get(".ilo--card--date")
        .should("have.attr", "datetime", `${fixture.date.unix}`)
        .and("contain.text", fixture.date.human);
      cy.get(".ilo--profile--name").should(
        "contain.text",
        fixture.profile.name
      );
      cy.get(".ilo--profile--avatar").should(
        "have.attr",
        "src",
        fixture.profile.avatar
      );
    });
  });
});
