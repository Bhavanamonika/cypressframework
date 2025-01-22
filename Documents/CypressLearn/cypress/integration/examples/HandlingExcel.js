/// <reference types="cypress" />
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

describe('Handling Excel', () => {
  it('Read data from Excel file', () => { 
    let productName;

    cy.loginWithJWT().then(() => {
      cy.visit(Cypress.env('url') + 'client', {
        onBeforeLoad: (window) => {
          window.localStorage.setItem('token', Cypress.env('token'));
        }
      });
    });

    cy.get('.card-body b').eq(1).then((el) => {
      productName = el.text();
    });

    cy.get('.card-body button:last-of-type').eq(1).click();
    cy.get('[routerlink*="cart"]').click().wait(2000);
    cy.contains('Checkout').click();
    cy.get('[placeholder*="Country"]').type("Ind");
    cy.get('.ta-results button').each(($el) => {
      if ($el.text().trim() === "India") {  
        cy.wrap($el).click();
      }
    });

    cy.get('[class*="submit"]').click();
    cy.wait(3000);

    cy.contains('Click To Download Order Details in Excel').click();

    // Handle file download and processing
    cy.task('readExcelFile', Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_bhavana.monika23.xlsx")
      .then((jsonData) => {
        // Process the JSON data here
        cy.log(JSON.stringify(jsonData));
        // Add assertions based on the Excel data
      });
  });
});