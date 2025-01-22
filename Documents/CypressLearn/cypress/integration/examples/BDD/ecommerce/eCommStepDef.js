import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../ecommerce/pageObjects/HomePage'
import ShopPage from '../ecommerce/pageObjects/ShopPage'
import CheckoutPage from '../ecommerce/pageObjects/CheckoutPage'
import PurchasePage from '../ecommerce/pageObjects/PurchasePage'
import '../ecommerce/beforeEach'

let name

Given('I visit the Ecommerce Page',()=>{
    cy.visit(Cypress.env('url')+'angularpractice/')
})


When ('I add phones to the cart',function(){
    const homePage = new HomePage()
 homePage.getShopLink().click()

 this.data.phoneModel.forEach(function(element){
    cy.addToCart(element)})

})


When ('I validate the total price',()=>{
    const shopPage = new ShopPage()
    const checkoutPage = new CheckoutPage()
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

})


Then ('I select the country, submit, and verify the success message',()=>{
    //  purchasePage.getAlertMsg().should('have.text'," Thank you! Your order will be delivered in next few weeks :-).")
    const purchasePage = new PurchasePage()
    const checkoutPage = new CheckoutPage()
    checkoutPage.getFinalChgeckOut().click()
    Cypress.config('defaultCommandTimeOut',8000)
    purchasePage.getCountryName().type("India").wait(5000)
    purchasePage.getPopupSuggestion().click().wait(2000)
    purchasePage.getTCCheckbx().check({force:true})
    purchasePage.getPurchaseBtn().click()
    purchasePage.getAlertMsg().then(function(alertMsg){

    expect(alertMsg.text().includes("Thank you!")).to.be.true
  
        
    })
})


When ('I fill the details on the page',function(dataTable) {
    const homePage = new HomePage()
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
  
    //Assertions
   

})

Then ('I validate the form behavior',()=>{
    const homePage = new HomePage()
    homePage.getEditBox().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEnterprenuerRd().should('be.disabled')

})

Then ('I go to the shopping page',()=>{
    const homePage = new HomePage()
    homePage.getShopLink().click()


})