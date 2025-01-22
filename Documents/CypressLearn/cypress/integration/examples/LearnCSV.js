/// <reference types="cypress" />
const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv';
let productName
describe('Handling CSV', () => {
  it('Donwload and Validate CSV file', () => {

    cy.LoginAPI().then(function()
    {
        cy.visit("https://rahulshettyacademy.com/client",
        {
            onBeforeLoad :function(window)
            {
                window.localStorage.setItem('token',Cypress.env('token'))
            }

        })       

    })
    cy.get(".card-body b").eq(1).then(function(ele)
      {
      productName =  ele.text();
      })
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind")
    cy.get('.ta-results button').each(($e1, index, $list) => {

      if($e1.text()===" India")
      {
          cy.wrap($e1).click()
      }
  })
    cy.get(".action__submit").click();
    cy.wait(2000)
    cy.contains('Click To Download Order Details in Excel').click()
    cy.get(".order-summary button").click();
    


  cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_bhavana.monika23.csv")
  .then((text)=>
  {
    const csv =   neatCSV(text)
    console.log(csv)
    const actualProductCSV = csv[0]["Product Name"]
    expect(productName).to.equal(actualProductCSV)

  })

  })
  })

