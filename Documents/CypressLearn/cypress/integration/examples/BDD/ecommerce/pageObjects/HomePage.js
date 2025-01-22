class HomePage{

getEditBox(){

    return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBox(){
    return cy.get('h4 input[name="name"]')
}

getGender(){
    return cy.get('select')
}

getEnterprenuerRd(){
    return cy.get('#inlineRadio3')
}
   
getShopLink(){
    return cy.get('[href="/angularpractice/shop"]')
}
}

export default HomePage