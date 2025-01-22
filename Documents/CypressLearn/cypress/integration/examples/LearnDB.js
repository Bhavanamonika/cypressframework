///<reference types="cypress" />
describe('LearnDBperations',function()
{
    it('LearnDBOperations',function(){

  cy.sqlServer("select * from Persons").then(function(result)
  {
   console.log(result[1][3])
  })


})




})