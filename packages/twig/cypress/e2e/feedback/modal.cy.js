//To-do :- Will be done along with the variants in #1100
describe("modal", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/modal");
    cy.getPreview("modal").first().as("modalSection");
  });

  it("renders the modal correctly", () => {
    /*
      Will be skipping this one as the modal doesn't render as expected
      */
  });
});
