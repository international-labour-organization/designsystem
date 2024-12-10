describe("video", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/video");
    cy.getPreview("video").first().as("videoSection");
  });

  it("renders the video correctly", () => {
    cy.get("@videoSection").within(() => {
      cy.get(".ilo--videoplayer").should("exist");

      cy.get("video").should("have.attr", "src");

      cy.get(".vjs-play-control").should("have.attr", "title", "Play");
      cy.get(".vjs-duration").should("exist");
      cy.contains("The ILO brings together governments");
    });
  });

  it("checks for video functionality", () => {
    cy.get("@videoSection").within(() => {
      cy.get(".vjs-play-control").click();
      cy.wait(500);
      cy.get(".vjs-play-control").should("have.attr", "title", "Pause");
      cy.get(".vjs-play-control").click();
      cy.get(".vjs-play-control").should("have.attr", "title", "Play");
      cy.get(".vjs-play-control").click();
      cy.get(".vjs-volume-panel").click();
      cy.get("video").should("have.attr", "muted", "muted");
      cy.get(".vjs-volume-panel").click();

      cy.get(".vjs-fullscreen-control").should("exist");
    });
  });
});
