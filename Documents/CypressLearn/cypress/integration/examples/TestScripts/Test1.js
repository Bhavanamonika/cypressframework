//Cypress Code 
//Any Test case is Spec File in Cypress

// describe is like a test test suite and it is like Test case and code inside it bock are tests
//Mocha test fw is used by cypress and it is downloaded along with cypress bundles

/// <reference types="cypress" />

describe('My First Test Suite', function()
{
  it('My First Test Case',function()
  {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
   //Parent Child Chaining
   cy.get('.products').as('parentProductLocator')
    cy.get('@parentProductLocator').find('.product').should('have.length',4)
    cy.get('@parentProductLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){ 
    console.log("Test Logs in console with then")
    })

    cy.get('@parentProductLocator').find('.product').each(($el, index, $list) => {
      const testVeg = $el.find('h4.product-name').text()
 
        if (testVeg.includes('Cashews')) {
          //  $el.find('button').click() --> this is depricated

        cy.wrap($el).find('button').click() 
      
      //  $el.contains('ADD TO CART').click()---> another way

      } 
    })

    // const logo = cy.get('.brand.greenLogo')
    //  cy.log(logo.text()) this will throw a error we have to define promise then()


    // To print logs
    cy.get('.brand.greenLogo').then(function(logoElement){

          cy.log(logoElement.text())
    }
  )

// To Assert 
cy.get('.brand.greenLogo').should('have.text','GREENKART')


console.log("Test the Logs")
  }
      )
} )