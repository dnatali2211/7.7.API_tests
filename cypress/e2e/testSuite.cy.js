describe("user API", () => {
  it("should create user", () => {
    cy.createUser();
  });

  it("should update user", () => {
    cy.createUser();
    cy.request("PUT", "https://petstore.swagger.io/v2/user/firstUser", {
      id: 657,
      username: "firstUser",
      firstName: "Andrey",
      lastName: "Ptichkin",
      email: "qw23ed@gmail.com",
      password: "bghfdjm893490",
      phone: "+79114367890",
      userStatus: 0,
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "657",
      });
    });
  });
  it("should delete user", () => {
    cy.createUser();
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/firstUser", {
      username: "firstUser",
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "firstUser",
      });
    });
  });
});
