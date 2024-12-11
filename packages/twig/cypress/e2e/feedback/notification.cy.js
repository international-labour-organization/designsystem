describe("notification", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/notification");
    cy.getPreview("notification").first().as("notificationSection");
  });

  it("renders the notification correctly", () => {
    cy.get("@notificationSection").within(() => {
      cy.contains("With CTA");
      cy.contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
      cy.contains("Dec 7, 2022");
      cy.contains("Optional CTA");
      cy.get(".ilo--notification--close").should("exist");
    });
  });

  it("should close the notifiction when the close button is clicked", () => {
    cy.get("@notificationSection").within(() => {
      cy.get(".ilo--notification").should("exist");
      cy.get(".ilo--notification--close").click();
      cy.get(".ilo--notification").should("not.exist");
    });
  });
});
