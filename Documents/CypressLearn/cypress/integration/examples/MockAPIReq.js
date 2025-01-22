///<reference types="cypress" />
describe('MockAPIReqRes',function()
{
    it('MockAPIReqRes',function(){

cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    //  cy.intercept({requestObjectJson},{responseObjectJson})
     
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
   (req)=>{
    req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Monika'
req.continue((res)=>{
    // expect(res.statusCode).to.equal(403)

})

}
).as("mockURL")
cy.get("button[class='btn btn-primary']").click()
    
 cy.wait('@mockURL')


    })

})