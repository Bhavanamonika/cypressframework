class PurchasePage{

    getCountryName(){
    
        return cy.get('#country')
    }
    
    getPopupSuggestion(){
        return cy.get('.suggestions')
    }

    getPurchaseBtn(){
        return cy.get('input[value="Purchase"]')
    }

    getTCCheckbx(){
        return cy.get('#checkbox2')
        }
    getAlertMsg(){
            return cy.get('div.alert')
            }
    

       


}
    export default PurchasePage