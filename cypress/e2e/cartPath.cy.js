import LoginPage from "../support/SauceDemobjects/LoginPage"
import AddDeleteCart from "../support/SauceDemobjects/AddDeleteCart"


// add to delete element of cart

describe ('pad for cart' , ()=>{
    it('Login on Saucedemo add element on the cart  ', ()=> {

        //login in the page
            LoginPage.visit()
            LoginPage.enterUsername('standard_user')
            LoginPage.enterPassword('secret_sauce')
            LoginPage.clickLogin()

        //add 3 element to cart , use POM adddeletecart.js
    
        AddDeleteCart.add()

        //remove 1 element to cart

        AddDeleteCart.RemoveOnPage()

        //Go to cart, check that items are visible 

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('.cart_item').should('have.length', 2)

        AddDeleteCart.RemoveOnCart()



    })


    
    
})