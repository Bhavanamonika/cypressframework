/// <reference types="cypress" />

describe('uploadDownloadExcel',function()
{
    it('uploadDownloadExcel',function()
    {
     cy.visit(Cypress.env('url')+'upload-download-test/')
    cy.get('#downloadButton').click().wait(3000) 
    const filePath = Cypress.config("fileServerFolder")+'/cypress/downloads/download.xlsx'
    cy.task('writeExcelTest',{searchText:"Mango",replaceText:330,
    update:{rowChange:0,colChange:2},filePath:filePath})

    cy.task('writeExcelTest',{searchText:"Kivi",replaceText:500,
        update:{rowChange:0,colChange:2},filePath:filePath})


    cy.task('writeExcelTest',{searchText:"Apple",replaceText:120,
        update:{rowChange:0,colChange:2},filePath:filePath})

    cy.get("#fileinput").selectFile(filePath)
    cy.contains("Kivi").parent().parent().find('#cell-4-undefined').should('have.text',500)


        cy.contains("Apple").parent().parent().find('#cell-4-undefined').should('have.text',120)

    })

})

