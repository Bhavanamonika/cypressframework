///<reference types="cypress" />
describe('LearnDiffOperations',function()
{
    it('LearnDiffOperations',function(){


     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').then(function(el){

        const url=el.prop('href')
        cy.visit(url)
        cy.origin(url,()=>{
            cy.get('#navbarSupportedContent  a[href="about.html"]').click()
            cy.get('.section-title.mt-50 h2').should('contain','Welcome to QAClick Academy ')
       
            })
       
      })
  


})




})