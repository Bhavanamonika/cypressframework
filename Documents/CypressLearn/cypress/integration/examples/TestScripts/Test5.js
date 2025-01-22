///<reference types="cypress" />
describe('LearnDiffOperations',function()
{
    it('WebTable',function(){

     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
        
        const colText= $el.text()
        if(colText.includes("Python")){
       
         cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            
            cy.log("PriceText", price.text())
            expect(price.text()).to.equal('25')

         })

        }

    }
    )
// cy.get('.mouse-hover-content').invoke('show')
//We can click hidden elements in cypress

cy.contains('Top').click({force: true})
cy.url().should('include','top')

})

})