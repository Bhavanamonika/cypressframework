///<reference types="cypress" />
import HomePage from '../pageObjects/HomePage'
import ShopPage from '../pageObjects/ShopPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import PurchasePage from '../pageObjects/PurchasePage'


describe('Hooks',function()
{
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data

        })
    })

    it('LearnHooks',function(){

        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()
        const purchasePage = new PurchasePage()

     cy.visit(Cypress.env('url')+'angularpractice/')
     
     homePage.getEditBox().type(this.data.name)
     homePage.getGender().select(this.data.gender)
     //Assertions
     homePage.getEditBox().should('have.value',this.data.name)
     homePage.getEditBox().should('have.attr','minlength','2')
     homePage.getEnterprenuerRd().should('be.disabled')
     homePage.getShopLink().click()

     this.data.phoneModel.forEach(function(element){
        cy.addToCart(element)
        
       
     })
     shopPage.getCheckOutBtn().click()
     var sum = 0
     checkoutPage.getPricesofProducts().each(($el,index,$list)=> {
        const tprice = $el.text()
        var price = tprice.split(" ")
        price = price[1].trim()
         cy.log(price)
        
        sum = Number(sum)+ Number(price)      

     }).then(function(){
        cy.log(sum)
     })

checkoutPage.getTotalPrice().then(function(element){
    const amount= element.text()
    var totalPrice = amount.split(" ")
    totalPrice = totalPrice[1].trim()
    expect(Number(totalPrice)).to.equal(sum)                                                                                                                                                                                                                 

})


     checkoutPage.getFinalChgeckOut().click()
     Cypress.config('defaultCommandTimeOut',8000)
     purchasePage.getCountryName().type("India").wait(5000)
     purchasePage.getPopupSuggestion().click().wait(2000)
     purchasePage.getTCCheckbx().check({force:true})
     purchasePage.getPurchaseBtn().click()
     //text had space so we use includes
    //  purchasePage.getAlertMsg().should('have.text'," Thank you! Your order will be delivered in next few weeks :-).")

    purchasePage.getAlertMsg().then(function(alertMsg){

        expect(alertMsg.text().includes("Thank you!")).to.be.true
        // expect(alertMsg.text().includes("iuihjhjhjk")).to.be.true
        
    })
})

})