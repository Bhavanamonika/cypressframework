class ShopPage{

    getPhoneModelName(){
    
        return cy.get('h4.card-title')
    }
    
    getAddBtn(){
        return cy.get('button.btn.btn-info')
    }
    
    getCheckOutBtn(){
        return cy.get('.nav-link.btn.btn-primary')

    }
}
    export default ShopPage