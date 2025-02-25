import ShopPage from '../integration/examples/BDD/ecommerce/pageObjects/ShopPage'
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

Cypress.Commands.add("addToCart", (phoneModel) => { 
    const shopPage = new ShopPage()
    shopPage.getPhoneModelName().each(($el,index,$list)=> {
        if($el.text().includes(phoneModel)){
            shopPage.getAddBtn().eq(index).click()
    
        }
    
    } )

})

Cypress.Commands.add("loginWithJWT", () => { 
cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail": "test@gmail.com", "userPassword": "test"}).
    then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })

})




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