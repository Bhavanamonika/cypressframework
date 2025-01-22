class CheckoutPage{

    getFinalChgeckOut(){
    
        return cy.get('.btn.btn-success')
    }
    

    getPricesofProducts(){
    
        return cy.get('tr td:nth-child(4) strong')
    }
    
  
    getTotalPrice(){
    
        return cy.get('h3 strong')
    }
    
    
    }
    
    export default CheckoutPage


