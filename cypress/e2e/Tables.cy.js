

describe('Dinamics Tables', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignora errores de scripts externos
        return false
      })

    beforeEach (()=>{
       cy.visit('https://demoqa.com/webtables') 
       cy.get('body').should('be.visible') //page load correctly

    })

    //
    it('Validate that there are 3 tables', ()=>{
        cy.get (cy.get('.rt-tbody .rt-tr-group:visible').should('have.length.at.least', 3))
    })


    it.only('Validate that each row have to name, surname and email', ()=>{
        cy.get('.rt-tr-group:visible').each(($row) => {
            cy.wrap($row).find('.rt-td').eq(0).should('not.be.empty') // First Name
            cy.wrap($row).find('.rt-td').eq(1).should('not.be.empty') // Last Name
            cy.wrap($row).find('.rt-td').eq(2).should('not.be.empty') // Age
            cy.wrap($row).find('.rt-td').eq(3).should('include.text', '@') // Email
            cy.wrap($row).find('.rt-td').eq(4).should('not.be.empty') // Salary
            cy.wrap($row).find('.rt-td').eq(5).should('not.be.empty') // Department
          })
    })
})