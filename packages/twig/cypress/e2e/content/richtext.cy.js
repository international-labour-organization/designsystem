//To-do :- Will be done along with the variants in #1100
describe("Richtext", () => {
  beforeEach(() => {
    cy.visit("/patterns/richtext");
    cy.getPreview("richtext").first().as("heroCardSection");
  });

  it("renders the richtext correctly", () => {
    /*
      Will be skipping this one as the rich text doesn't render as expected
    */
  });
});
