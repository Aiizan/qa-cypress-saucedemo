import LoginPage from "../support/SauceDemobjects/LoginPage";

describe ('Login Test -All user',()=>{

    //CALL DE FIXTURE as Alias
    


    it('login all user',()=>{
        cy.fixture('userSauceDemo').then((users) => {
            Object.entries(users).forEach(([key, element]) => {
                LoginPage.visit()
                LoginPage.enterUsername(element.username)
                LoginPage.enterPassword(element.password)
                LoginPage.clickLogin()


                ///


                if (element.username === 'locked_out_user'){
                    LoginPage.getErrorMessage().should('contain', 'Epic sadface: Sorry, this user has been locked out.')
                
                }else if (element.username === "invalid_user"){
                    LoginPage.getErrorMessage().should('contain', 'do not match')

                }else {
                    cy.url().should('include', "/inventory.html")
                }

            });
        })
    })
})