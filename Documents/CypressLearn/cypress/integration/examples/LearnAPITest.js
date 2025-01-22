///<reference types="cypress" />
describe('MockAPIReqRes',function()
{
    it('MockAPIReqRes',function(){

cy.request('POST','http://216.10.245.166/Library/Addbook.php ',
 {
    "name":"Learn Appium Automation with Java",
    "isbn":"mon",
    "aisle":"88",
    "author":"Monika foe"
    }).then(function(response)
    {
expect(response.body).to.have.property("Msg","successfully added")
expect(response.status).to.eq(200)
})


    })

    })