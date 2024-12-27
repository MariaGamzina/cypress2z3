
Cypress.Commands.add('user', () => {
    cy.request({
        url: 'https://petstore.swagger.io/v2/user',
        method: 'POST',
        body: {
          
            "id": 2,
            "username": "Vanya",
            "firstName": "Ivan",
            "lastName": "Petrov",
            "email": "ipetrov@gmail.com",
            "password": "123456",
            "phone": "+79991231212",
            "userStatus": 0
          
        },
        }).then((response) => {
          expect(response.status).to.eq(200)        
        });
});


