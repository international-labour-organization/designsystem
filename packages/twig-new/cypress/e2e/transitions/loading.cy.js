//WIP
describe("loading", () => {
  beforeEach(() => {
    cy.visit("/patterns/loading");
    cy.getPreview("loading").first().as("loadingSection");
  });

  it("renders the loading component correctly", () => {
    cy.get(".ilo--loading").should("exist");
    /*
      Will require variant url to add more testing
    */
  });
});
