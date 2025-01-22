///<reference types="Cypress" />

describe('PlaceOrder',function()
{
    it('PlaceOrderTestCase',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el,index,$list)=> {
                const textOfVeg =  $el.find('h4.product-name').text()
                if(textOfVeg.includes('carrot')){
                    cy.wrap($el).contains('ADD TO CART').click()
                }
 
        } )
        cy.get('[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        // cy.get('button:contains("PROCEED TO CHECKOUT")').click()
        // cy.get('button:contains("Place Order")').click()
    
        

    })
})