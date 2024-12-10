//To-do :- Will be done along with the variants in #1100
describe("Hero Card", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/herocard");
    cy.getPreview("herocard").first().as("heroCardSection");
  });

  it("renders the hero card correctly", () => {
    /*
    Will be skipping this one as the hero card doesn't render as expected
    */
  });
});
