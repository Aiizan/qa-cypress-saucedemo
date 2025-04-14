import LoginPage from "../support/SauceDemobjects/LoginPage"


describe ('Verify that items are loaded ', ()=> {

    it ('image, name and price view correctly', ()=>{
        //login 
        LoginPage.visit()
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()

        //verify if body load correctly

        cy.get('body').should('be.visible')
        cy.url().should('contain', '/inventory.html')



        //verify if all element contains image, name and price

        cy.get('.inventory_item').each($element => {
            //verify name 
            cy.wrap($element).find('.inventory_item_name').should('be.visible')
            // verify image
            cy.wrap($element).find('.inventory_item_img').should('be.visible')
            //verify price
            cy.wrap($element).find('.inventory_item_price').should('be.visible')

        });
    })




})