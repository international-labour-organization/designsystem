import fixture from "../../fixtures/callout.json";

const url = `/pattern-preview?id=callout&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Callout", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--callout").as("callout");
  });

  it("should render with the correct alert type", () => {
    cy.get("@callout").should(
      "have.class",
      `ilo--callout__${fixture.settings.alert}`
    );
  });

  it("should render the title correctly", () => {
    cy.get("@callout")
      .find(".ilo--callout--title")
      .should("exist")
      .and("contain", fixture.title);
  });

  it("should render the content correctly", () => {
    cy.get("@callout")
      .find(".ilo--callout--description")
      .should("exist")
      .and("contain", fixture.content);
  });

  it("should render the alert icon", () => {
    cy.get("@callout")
      .find(".ilo--callout--icon")
      .should("exist")
      .and(
        "have.class",
        `ilo--callout--icon__alert__${fixture.settings.alert}`
      );
  });

  it("should render the button when provided", () => {
    cy.get("@callout")
      .find(".ilo--callout--footer")
      .should("exist")
      .within(() => {
        cy.get("a")
          .should("exist")
          .and("have.attr", "href", fixture.button.url)
          .and("have.attr", "target", fixture.button.target)
          .and("contain", fixture.button.label);
      });
  });

  it("should have the correct collapsible state", () => {
    if (fixture.settings.isCollapsible) {
      cy.get("@callout").should("have.class", "ilo--callout__collapse");

      if (fixture.settings.isOpen) {
        cy.get("@callout").should("have.class", "ilo--callout__open");
      } else {
        cy.get("@callout").should("not.have.class", "ilo--callout__open");
      }
    } else {
      cy.get("@callout").should("not.have.class", "ilo--callout__collapse");
    }
  });

  it("should render the toggle button when collapsible", () => {
    if (fixture.settings.isCollapsible) {
      cy.get("@callout")
        .find(".ilo--callout--toggle")
        .should("exist")
        .and("have.attr", "data-open", fixture.toggleOpenLabel)
        .and("have.attr", "data-closed", fixture.toggleClosedLabel);

      cy.get("@callout")
        .find(".ilo--callout--button-text")
        .should("exist")
        .and(
          "contain",
          fixture.settings.isOpen
            ? fixture.toggleOpenLabel
            : fixture.toggleClosedLabel
        );
    } else {
      cy.get("@callout").find(".ilo--callout--toggle").should("not.exist");
    }
  });

  it("should toggle open/closed state when clicked", () => {
    // Create new fixture with isOpen set to false
    const closedFixture = {
      ...fixture,
      settings: {
        ...fixture.settings,
        isOpen: false,
        isCollapsible: true,
      },
    };

    // Create a new URL with the closed fixture
    const closedUrl = `/pattern-preview?id=callout&fields=${encodeURI(
      JSON.stringify(closedFixture)
    )}`;

    // Visit the closed URL
    cy.visit(closedUrl);

    // Get the callout element
    cy.get(".ilo--callout").as("callout");

    // Click the toggle button
    cy.get("@callout").find(".ilo--callout--toggle").click();

    // Check that the class has changed
    cy.get("@callout").should("have.class", "ilo--callout__open");
    cy.get("@callout")
      .find(".ilo--callout--button-text")
      .should("contain", fixture.toggleOpenLabel);

    // Click again to toggle back
    cy.get("@callout").find(".ilo--callout--toggle").click();

    // Check that it's back to the original state
    cy.get("@callout").should("not.have.class", "ilo--callout__open");
    cy.get("@callout")
      .find(".ilo--callout--button-text")
      .should("contain", fixture.toggleClosedLabel);
  });
});
