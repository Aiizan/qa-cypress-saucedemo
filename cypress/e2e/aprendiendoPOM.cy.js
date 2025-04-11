import LoginPage from "../support/SauceDemobjects/LoginPage";


describe('Login Test - SauceDemo', ()=>{


    //visit the page before each it
    beforeEach (()=>{
        LoginPage.visit()
    })


    it('Login exitoso con credenciales validas', ()=>{
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword ('secret_sauce')
        LoginPage.clickLogin()


        //Check if the page loaded

        cy.url().should('include', '/inventory.html')
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
    })

    it('Login fallido con credeenciales invalidas', ()=>{
        LoginPage.enterUsername('invalid_user')
        LoginPage.enterPassword('wrong_password')
        LoginPage.clickLogin()

        LoginPage.getErrorMessage().should('be.visible')
        .and('contain', ' Username and password do not match')
    })





})