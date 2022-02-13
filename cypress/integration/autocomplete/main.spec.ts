describe("autocomplete", () => {
  it("Displays autocomplete when user visits page", () => {
    cy.visit("http://localhost:3000");

    cy.visit("http://localhost:3000/about")

    cy.contains("About")
  });
});
