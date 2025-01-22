///<reference types="cypress" />
describe('LearnDiffOperations',function()
{
    it('LearnDiffOperations',function(){
//Check Boxes

     cy.visit(Cypress.env('url')+'AutomationPractice/')
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value',"option1")
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
     cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static Dropdowns
   cy.get('select').select('Option3').should('have.value','option3')
// Dynamic Dropdowns
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($el, index, $list) => {
   if($el.text() == "India")
 {
       cy.wrap($el).click() 
    

    } 
  })

  cy.get('#autocomplete').should('have.value','India')
//Visible and Invisible elements

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//Radio Buttons

cy.get('[value="radio3"]').check().should('be.checked')

})




})