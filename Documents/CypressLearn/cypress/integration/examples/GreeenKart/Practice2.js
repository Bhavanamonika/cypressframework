///<reference types="Cypress" />
describe('HandleChildWindows',function()
{
    it('Tc1:Handling ChildWindows',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('[href="https://www.qaclickacademy.com/blog"]').click()
        cy.get('.alignwide.wp-block-heading').should('contain','Mindblown: a blog about philosophy.')
   
        })
   })

})