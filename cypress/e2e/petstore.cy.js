

describe('Create user', () => {
  it('Create new user', () => {    
    cy.user();

    cy.request('https://petstore.swagger.io/v2/user/' + 'Vanya').then(({status, body}) => {
        expect(status).to.eq(200);        
        expect(body.email).to.eq('ipetrov@gmail.com');
        expect(body.username).to.eq('Vanya');
        expect(body.lastName).to.eq('Petrov');
      })
    })
  });

  describe('Update user', () => {
    it('Update user', () => {  
      cy.user();

      cy.request({
        url: `https://petstore.swagger.io/v2/user/login?username=Vanya&password=123456`,
        method: 'GET'
        
        }).then((response) => {
          expect(response.status).to.eq(200)        
        });

        cy.request({
          url: 'https://petstore.swagger.io/v2/user/Vanya',
          method: 'PUT',
          body: {
            "id": 3,
            "username": "Van",  
            "email": "ivanpetrov@gmail.com"
            
          }

        }).then((response) => {
          expect(response.status).to.eq(200)
        });
  
        cy.request({
          url: 'https://petstore.swagger.io/v2/user/Van',
          
        }).then(({status, body}) => {
          expect(status).to.eq(200);        
          expect(body.id).to.eq(3);          
          expect(body.email).to.eq('ivanpetrov@gmail.com');
        })
      })
    });

    describe('Delete user', () => {
      it('Delete user', () => { 
        cy.user();

        cy.request({
          url: `https://petstore.swagger.io/v2/user/login?username=Vanya&password=123456`,
          method: 'GET'
          
          }).then((response) => {
            expect(response.status).to.eq(200)        
          });
  
          cy.request({
            url: 'https://petstore.swagger.io/v2/user/Vanya',
            method: 'DELETE'
              
          }).then((response) => {
            expect(response.status).to.eq(200)
          });
    
          cy.request({
            url: 'https://petstore.swagger.io/v2/user/Vanya', 
            failOnStatusCode: false
          }).then(({status, body}) => {
            expect(status).to.eq(404);        
           
          })
        })
      });
