import datacardFixture from "../../fixtures/datacard.json";
import detailcardFixture from "../../fixtures/detailcard.json";
import factlistcardFixture from "../../fixtures/factlistcard.json";
import featurecardFixture from "../../fixtures/featurecard.json";
import multilinkcardFixture from "../../fixtures/multilinkcard.json";
import promocardFixture from "../../fixtures/promocard.json";
import scorecardFixture from "../../fixtures/scorecard.json";
import statcardFixture from "../../fixtures/statcard.json";
import textcardFixture from "../../fixtures/textcard.json";

const CARD_FIXTURES = {
  data: datacardFixture,
  detail: detailcardFixture,
  factlist: factlistcardFixture,
  feature: featurecardFixture,
  multilink: multilinkcardFixture,
  promo: promocardFixture,
  score: scorecardFixture,
  stat: statcardFixture,
  text: textcardFixture,
};

const CARD_COUNT = 3;

describe("Card group", () => {
  Object.entries(CARD_FIXTURES).forEach(([type, fixture]) => {
    it(`renders ${type} cards`, () => {
      // Omit card settings, card group setting set below
      const { settings, ...card } = fixture;

      cy.visitPreview("cardgroup", {
        group: Array(CARD_COUNT).fill(card),
        settings: {
          type,
        },
      });

      cy.get(".ilo--cardgroup--card")
        .should("have.length", CARD_COUNT)
        .each(($wrapper) => {
          cy.wrap($wrapper)
            .find(".ilo--card")
            .should("have.class", `ilo--card__type__${type}`);
        });
    });
  });
});
