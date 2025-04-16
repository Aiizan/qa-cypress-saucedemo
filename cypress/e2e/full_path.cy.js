import LoginPage from "../support/SauceDemobjects/LoginPage"
import AddDeleteCart from "../support/SauceDemobjects/AddDeleteCart"
//login 

describe ('full path e-commerce', ()=>{


    it ('login to checkout pad', ()=>{ 
        //login 
        LoginPage.visit()
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLogin()
        //add item
        AddDeleteCart.add()
        //checkout
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('#checkout').click()
        //complete form 
        cy.get('#first-name').type('luan')
        cy.get('#last-name').type('AcLuan') 
        cy.get('#postal-code').type('cc03401')
        cy.get('#continue').click()
        //Check the total account price 
        cy.get('[data-test="total-label"]').should('be.visible')
        //Checkout
        cy.get('[data-test="finish"]').click()
        //verify if the purchase was made
        cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!')
    })

})