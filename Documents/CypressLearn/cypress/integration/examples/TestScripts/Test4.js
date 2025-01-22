///<reference types="cypress" />
describe('LearnDiffOperations',function()
{
    it('LearnDiffOperations',function(){
//Check Boxes

     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').invoke('removeAttr','target').click()
     cy.origin('https://www.qaclickacademy.com/',()=>{
     cy.get('#navbarSupportedContent  a[href="about.html"]').click()
     cy.get('.section-title.mt-50 h2').should('contain','Welcome to QAClick Academy ')

     })


})




})