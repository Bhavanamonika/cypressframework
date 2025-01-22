///<reference types="cypress" />
describe('LearnDiffOperations',function()
{
    it('LearnDiffOperations',function(){
//Check Boxes

     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#alertbtn').click()
     cy.get('[value="Confirm"]').click()
     //Window:alert
     cy.on('window:alert',(str)=>{

        //Mocha to compare strings
        expect(str).to.equal("Hello , share this practice page and share your knowledge")

     })

     cy.on('window:confirm',(str)=>{

        //Mocha to compare strings
        expect(str).to.equal("Hello , Are you sure you want to confirm?")

     })


})




})