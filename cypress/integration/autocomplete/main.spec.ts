describe("autocomplete", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays autocomplete combobox when user visits page", () => {
    cy.get(`[role="combobox"]`);
  });

  it("opens dropdown list when user starts entering text", () => {
    cy.get("input").type("M");
    cy.get("ul#dropdown").should("be.visible");
  });

  it("dropdown is filtered and shows only relevent items in dropdown", () => {
    cy.get("input").type("M");
    cy.get("ul#dropdown").should("be.visible");
    cy.get("ul#dropdown").find("li").should("have.length", 4);
  });

  it("Selecting an item from list adds it as a chip in the autocomplete component", () => {
    cy.get("input").type("M");
    cy.get("ul#dropdown").should("be.visible");
    cy.get(".list-item").contains("Tom Marshburn").click();
    cy.get(".chip").contains("Tom Marshburn");
  });

  it("Can remove chip by clicking on cross", () => {
    cy.get(".chip").contains("Pyotr Dubrov");
    cy.get(`[aria-label="Remove Selected"]`).click();
    cy.get(".chip").should("not.exist");
  });
});
