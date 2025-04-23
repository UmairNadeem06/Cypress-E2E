export class homePage {
    weblocatores = {
        myAccount: 'a[title="My Account"]',
        searchBar: "input[name='search']",
        searchBtn: "i[class='fa fa-search']",
        itemCartTotal: "[id='cart-total']",
        product: "img[title='MacBook']",
        addToCart: 'Add to Cart',
        successMessage: 'div.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName) {
        cy.get(this.weblocatores.searchBar).type(productName)
        cy.get(this.weblocatores.searchBtn).click()
    }

    addToCart(){
        cy.contains(this.weblocatores.addToCart).first().click()
    }

    verifySuccessMessage(){
       return cy.get(this.weblocatores.successMessage)
    }
}