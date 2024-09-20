import fixture from "../../fixtures/socialmedia.json";

const url = `/pattern-preview?id=socialmedia&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Social Media", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--social-media").as("socialMedia");
  });

  it("renders the headline if provided", () => {
    cy.fixture("socialmedia").then((data) => {
      if (data.headline) {
        cy.get("@socialMedia")
          .find("h5.ilo--social-media--headline")
          .should("contain.text", data.headline);
      } else {
        cy.get("@socialMedia")
          .find("h5.ilo--social-media--headline")
          .should("not.exist");
      }
    });
  });

  it("renders the correct number of social media icons", () => {
    cy.get("@socialMedia")
      .find("li.ilo--social-media--list--item")
      .should("have.length", fixture.icons.length);
  });

  it("should ensure each icon has a background image with a data url", () => {
    cy.visit(url);
    cy.get("@socialMedia")
      .find("ul.ilo--social-media--list li a")
      .each(($icon) => {
        cy.wrap($icon)
          .should("have.css", "background-image")
          .and("match", /url\(.+\)/);
      });
  });

  it("should ensure Twitter and X icons have the same background image", () => {
    let xIconBg, twitterIconBg;

    // Get the X icon
    cy.get("@socialMedia")
      .find('a:contains("X")')
      .then(($xIcon) => {
        xIconBg = $xIcon.css("background-image");
      });

    // Get the Twitter icon by its text content
    cy.get("@socialMedia")
      .find('a:contains("Twitter")')
      .then(($twitterIcon) => {
        twitterIconBg = $twitterIcon.css("background-image");
      })
      .then(() => {
        expect(xIconBg).to.equal(twitterIconBg);
      });
  });

  it("should ensure each icon has a title attribute", () => {
    cy.visit(url);
    cy.get("@socialMedia")
      .find("ul.ilo--social-media--list li a")
      .each(($icon) => {
        cy.wrap($icon).should("have.attr", "title");
      });
  });
});
