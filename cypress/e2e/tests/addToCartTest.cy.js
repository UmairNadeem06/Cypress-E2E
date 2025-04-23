import { homePage } from '../../pages/homePage';
const homePageObj = new homePage();
import addToCartData from '../../fixtures/addToCartData.json';

describe('Add to Cart Test', () => {
    before(() => {
        cy.login(addToCartData.login.email, addToCartData.login.password);
    });

    it('should add a product to the cart', () => {
        homePageObj.searchProduct(addToCartData.product.name)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', 'Success: You have added MacBook to your shopping cart!')
    })
})