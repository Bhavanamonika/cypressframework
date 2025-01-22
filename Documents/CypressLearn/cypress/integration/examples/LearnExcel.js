/// <reference types="cypress" />

let productName
describe('Handling Excel',function()
{
    it('Read data from Excel file',function()
    {
     
        const filePath = Cypress.config("fileServerFolder")+'/cypress/downloads/order-invoice_bhavana.monika23.xlsx'
cy.log(filePath)
cy.loginWithJWT().then(function(){
    cy.visit(Cypress.env('url')+'client',
    {
        onBeforeLoad: function(window){
            window.localStorage.setItem('token',Cypress.env('token'))
        }
    })
})
cy.get(".card-body b").eq(1).then(function(ele)
      {
      productName =  ele.text();
      cy.log(productName)
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


cy.contains('Click To Download Order Details in Excel').click();
cy.wait(3000)

 cy.task('convertExcelToJson',filePath).then(function(result){
    cy.log(result)
    cy.log(result.data[1].A)
    
    expect(productName).to.equal(result.data[1].B)

})
cy.readFile(filePath).then(function(text){
    expect(text).to.include(productName)
})

    })

})