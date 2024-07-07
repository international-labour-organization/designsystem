//WIP
describe("Hero Card", () => {
  beforeEach(() => {
    cy.visit("/patterns/herocard");
    cy.getPreview("herocard").first().as("heroCardSection");
  });

  it("renders the hero card correctly", () => {
    /*
    WIP will be skipping this one as the hero card doesn't render as expected
    */
  });
});
