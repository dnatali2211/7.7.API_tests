// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("createUser", () => {
  cy.request("POST", "https://petstore.swagger.io/v2/user", {
    id: 657,
    username: "firstUser",
    firstName: "Sergey",
    lastName: "Ptichkin",
    email: "qw23ed@gmail.com",
    password: "78uhj",
    phone: "+79114367890",
    userStatus: 0,
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      code: 200,
      type: "unknown",
      message: "657",
    });
  });
});
