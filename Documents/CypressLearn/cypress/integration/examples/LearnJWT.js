///<reference types="cypress" />
describe('JWT Session',function()
{
    it('is logged in through local Storage',function(){

cy.loginWithJWT().then(function(){
    cy.visit(Cypress.env('url')+'client',
    {
        onBeforeLoad: function(window){
            window.localStorage.setItem('token',Cypress.env('token'))
        }
    })
})

 cy.get('.card-body button:last-of-type').eq(1).click()
 cy.get('[routerlink*="cart"]').click().wait(2000)
 cy.contains('Checkout').click()
 cy.get('[placeholder*="Country"]').type("Ind")
 cy.get('.ta-results button').each(($el,index,$list)=>
 {

    if($el.text()==" India"){
        cy.wrap($el).click()
    }

 })

 cy.get('[class*="submit"]').click()
cy.wait(3000)





    })

})