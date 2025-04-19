import LoginPage from "../support/SauceDemobjects/LoginPage";

describe ('order product', ()=>{
    beforeEach (()=>{
       //login
       LoginPage.visit()
       LoginPage.enterUsername('standard_user')
       LoginPage.enterPassword ('secret_sauce')
       LoginPage.clickLogin()
        
    })

    it ('order product Z- A',()=>{
     
       //click on menu (name A : Z)
       cy.get('[data-test="product-sort-container"]').select('za');

       //
       cy.get('.inventory_item_name').then (($element)=>{
        const nameonscreen = [...$element].map(el => el.innerText);
        const orderarray = [...nameonscreen].sort((a, b) => b.localeCompare(a));

        expect(nameonscreen).to.deep.equal(orderarray);
       })

    })

    it('order product Price(low to high' , ()=>{
       //click on menu (name A : Z)
       cy.get('[data-test="product-sort-container"]').select('lohi'); 
        //
        cy.get('.inventory_item_price').then(($element)=>{
            const name = [...$element].map(el => el.innerText);
            const order = [...name].sort((a,b)=> b.localeCompare(a));

            cy.log (name)
            cy.log (order)

     
        })
    })

})