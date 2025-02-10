import fixture from "../../fixtures/multilinkcard.json";

const url = `/pattern-preview?id=multilinkcard&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Card Multilink", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--card").as("card");
  });

  it("should have the correct theme applied", () => {
    cy.get("@card").should(
      "have.class",
      `ilo--card__theme__${fixture.theme || "light"}`
    );
  });

  it("should have the correct size class", () => {
    cy.get("@card").should("have.class", `ilo--card__size__${fixture.size}`);
  });

  it("should contain a link with the correct title", () => {
    if (fixture.link) {
      cy.get("@card")
        .find(".ilo--card--link")
        .should("have.attr", "href", fixture.link);
      cy.get("@card")
        .find(".ilo--card--link--text")
        .should("contain", fixture.title);
    } else {
      cy.get("@card").find(".ilo--card--link").should("not.exist");
    }
  });

  it("should display an image if provided", () => {
    if (fixture.image) {
      cy.get("@card").find(".ilo--card--image--wrapper").should("exist");
    } else {
      cy.get("@card").find(".ilo--card--image--wrapper").should("not.exist");
    }
  });

  it("should display an eyebrow if provided", () => {
    if (fixture.eyebrow) {
      cy.get("@card")
        .find(".ilo--card--eyebrow")
        .should("exist")
        .and("contain", fixture.eyebrow);
    } else {
      cy.get("@card").find(".ilo--card--eyebrow").should("not.exist");
    }
  });

  it("should display an intro text if provided", () => {
    if (fixture.intro) {
      cy.get("@card")
        .find(".ilo--card--intro")
        .should("exist")
        .and("contain", fixture.intro);
    } else {
      cy.get("@card").find(".ilo--card--intro").should("not.exist");
    }
  });

  it("should display a link list if provided", () => {
    if (fixture.linklist) {
      cy.get("@card").find(".ilo--card__linklist").should("exist");
    } else {
      cy.get("@card").find(".ilo--card__linklist").should("not.exist");
    }
  });

  it("should correctly align the image and the content according to the settings provided", () => {
    const rightSettings = { ...fixture.settings, alignment: "right" };
    const rightFixture = { ...fixture, settings: rightSettings };
    const leftSettings = { ...fixture.settings, alignment: "left" };
    const leftFixture = { ...fixture, settings: leftSettings };

    cy.visit(
      `/pattern-preview?id=multilinkcard&fields=${encodeURI(JSON.stringify(rightFixture))}`
    );
    cy.get("@card")
      .get(".ilo--card--wrap")
      .should("have.css", "grid-template-areas", '"content image"');

    cy.visit(
      `/pattern-preview?id=multilinkcard&fields=${encodeURI(JSON.stringify(leftFixture))}`
    );
    cy.get("@card")
      .get(".ilo--card--wrap")
      .should("have.css", "grid-template-areas", '"image content"');
  });

  it("should display a play icon if the card points to a video", () => {
    if (fixture.settings.isvideo) {
      cy.get(".ilo--card--image--wrapper")
        .should("exist")
        .then(($el) => {
          cy.window().then((win) => {
            // We're getting the second image wrapper because the fixture
            // renders the narrow card, otherwise we'd get the first one
            const computedStyles = win.getComputedStyle($el[1], "::after");

            // Get whatever property the testing environment uses for the mask image
            const regex = /.*mask-image/;

            const maskImgProperty = Object.keys(computedStyles).find((key) =>
              regex.test(key)
            );

            if (maskImgProperty) {
              const maskImage =
                computedStyles.getPropertyValue(maskImgProperty);
              expect(maskImage).to.not.be.empty;
            }
          });
        });
    }
  });
});
