/// <reference types="cypress" />
const neatCSV= require('neat-csv');
describe('CSV',function()
{
    it('handling CSV through Cypress', async function(){
        let productName
cy.loginWithJWT().then(function(){
    cy.visit(Cypress.env('url')+'client',
    {
        onBeforeLoad: function(window){
            window.localStorage.setItem('token',Cypress.env('token'))
        }
    })
})
cy.get('.card-body b').eq(1).then(function(el){
 productName = el.text()
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

cy.contains('Click To Download Order Details in CSV').click()

cy.log("Test")
cy.readFile(Cypress.config("fileServerFolder")+'/cypress/downloads/order-invoice_bhavana.monika23.csv').
then(async (text) =>
{
    const csv = await neatCSV(text)
    console.log(csv)
  const actualProductCSV = csv[0]["Product Name"]
  expect(productName).to.equal(actualProductCSV)

})

cy.log("Test")

    })

})