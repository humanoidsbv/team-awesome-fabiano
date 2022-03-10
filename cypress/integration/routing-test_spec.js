/* eslint-disable no-undef */
describe("Routing", () => {
  it("Navigates to the Team members page, adds a new Team Member and submits the form", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(414, 896);

    cy.get("select").select(4).should("have.value", "Drentse Aa Zuivel");

    cy.get("[data-cy=toggle]").click();

    cy.get("[data-cy=menulist]").contains("Team members").click();

    cy.url().should("include", "/team-members");

    cy.get("select").select(4).should("have.value", "client");

    cy.get("[data-cy=new-button]").click();
    cy.get("[name=firstName]").type("Ursula");
    cy.get("[name=lastName]").type("Le Guin");
    cy.get("[name=emailAddress]").type("ursula@leguin.com");
    cy.get("[name=label]").type("Sci-fi and fantasy writer");
    cy.get("[name=client]").type("ASN Bank");
    cy.get("[name=role]").type("Navigator");
    cy.get("[name=startingDate]").type("2022-03-14");

    cy.get("[data-cy=new-button]").contains("Add Humanoid").click();

    cy.intercept(
      {
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_DB_HOST}/team-members`,
      },
      [],
    ).as("postNewMember");
  });
});
