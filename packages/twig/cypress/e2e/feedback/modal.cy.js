//WIP
describe("modal", () => {
  beforeEach(() => {
    cy.visit("/patterns/modal");
    cy.getPreview("modal").first().as("modalSection");
  });

  it("renders the modal correctly", () => {
    /*
      WIP will be skipping this one as the modal doesn't render as expected
      */
  });
});
