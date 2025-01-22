///<reference types="cypress" />
describe('MockAPIReqRes',function()
{
    it('MockAPIReqRes',function(){

cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    //  cy.intercept({requestObjectJson},{responseObjectJson})
     
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
          //length of the response array = rows of the table
     cy.wait('@bookretrievals').then(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     cy.get('p').should('have.text','Oops only 1 Book available')
 


    })

})