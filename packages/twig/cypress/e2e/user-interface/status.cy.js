import fixture from "../../fixtures/status.json";

const url = `/pattern-preview?id=status&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Status Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(`#${fixture.elementId}`).as("status");
  });

  it("should render the status component with correct content", () => {
    cy.get("@status").should("exist").and("contain", fixture.content);
  });

  it("should have the correct status type class", () => {
    cy.get("@status").should(
      "have.class",
      `ilo--status__type__${fixture.statusType}`
    );
  });

  it("should change background color based on statusType", () => {
    const statusTypes = ["active", "info", "alert", "subtle", "inactive"];

    statusTypes.forEach((type) => {
      cy.visit(
        `/pattern-preview?id=status&fields=${encodeURI(JSON.stringify({ ...fixture, statusType: type }))}`
      );
      cy.get(`#${fixture.elementId}`).should(
        "have.class",
        `ilo--status__type__${type}`
      );
      cy.get(`#${fixture.elementId}`)
        .invoke("css", "background-color")
        .then((bgColor) => {
          expect(bgColor).to.not.be.empty;
        });
    });
  });
});
