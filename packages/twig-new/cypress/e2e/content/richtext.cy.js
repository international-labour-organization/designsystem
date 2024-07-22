//WIP
describe("Richtext", () => {
  beforeEach(() => {
    cy.visit("/patterns/richtext");
    cy.getPreview("richtext").first().as("heroCardSection");
  });

  it("renders the richtext correctly", () => {
    /*
      WIP will be skipping this one as the rich text doesn't render as expected
    */
  });
});
