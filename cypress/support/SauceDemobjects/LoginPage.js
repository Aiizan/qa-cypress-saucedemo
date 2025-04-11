
//creamos una JS que sera una clase, con metdos, para ser llamado en archivo principal, 
// el codigo queda mas limpio y ordenado


class LoginPage {
    visit () {
        cy.visit('https://www.saucedemo.com/')
    }

    enterUsername(username){
        cy.get('#user-name').type(username);
    }

    enterPassword(password){
        cy.get('#password').type(password);
    }

    clickLogin(){
        cy.get('#login-button').click();
    }


    //cuando ingrese el usuario incorrecto, retorna el mensaje de error
    getErrorMessage(){
        return cy.get('[data-test="error"]');
    }


}

export default new LoginPage();