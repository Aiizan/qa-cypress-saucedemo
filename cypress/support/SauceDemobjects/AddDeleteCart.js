class AddDeleteProduct {


    add(){
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }   
    

    RemoveOnPage(){
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('contain.text', 'Add to cart')
        
    }



    RemoveOnCart(){
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.cart_item').should('have.length', 0)
    }
}

export default new AddDeleteProduct()