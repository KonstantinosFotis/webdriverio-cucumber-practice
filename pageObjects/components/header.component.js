import BaseComponent from "./base.component";
import dataModel from "../../utilities/dataModel";

class HeaderComponent extends BaseComponent {
    get headerContainer() {
        return $('div[class=header-container]');
    };

    get headerBanner() {
        return this.headerContainer.$('div[class=banner]');
    };

    get headerNavigationContainer() {
        return this.headerContainer.$('div[class=container]');
    };

    get shopPhone() {
        return $('span[class=shop-phone]');
    };

    get signInButton() {
        return $('a[class=login]');
    };

    get contactUsButton() {
        return $('#contact-link');
    };

    get headerLogo() {
        return $('#header_logo');
    };

    get searchBox() {
        return $('#searchbox');
    };

    get searchBoxInputField() {
        return this.searchBox.$('#search_query_top');
    };

    get searchBoxButton() {
        return this.searchBox.$('button[name=submit_search]');
    };

    get shoppingCart() {
        return $('div[class=shopping_cart]')
    };

    async isHeaderDisplayed(shouldOrShouldNot) {
        expect(await this.headerContainer.isDisplayed()).to.equal(true, 'Header container is not visible');
    }

    async isBannerDisplayed() {
        expect(await this.headerBanner.isDisplayed()).to.equal(true, 'Header banner is not visible');
    }

    async isHeaderNavigationContainerDisplayed(){
       expect(await this.headerNavigationContainer.isDisplayed()).to.equal(true, 'Header navigation container is not visible');
    }

    async verifyFieldsText(tableData) {
        const dataToLocators = {
            'shop number': await this.shopPhone,
            'sing in button': await this.signInButton,
            'contact us button': await this.contactUsButton
        };

        for (const field in tableData){
            const fieldLocator = dataToLocators[field];
            expect(await fieldLocator.getText()).to.equal(tableData[field], `Text of field ${field} is incorrect`);
        }
    }

    async isHeaderLogoDisplayed() {
        expect(await this.headerLogo.isDisplayed()).to.equal(true, 'Header logo is not visible');
    }

    async isHeaderSearchBoxDisplayed() {
        expect(await this.searchBox.isDisplayed()).to.equal(true, 'Header search box is not visible');
        expect(await this.searchBoxInputField.isDisplayed()).to.equal(true, 'Header search box input field is not visible');
        expect(await this.searchBoxButton.isDisplayed()).to.equal(true, 'Header search box button is not visible');
    }

    async verifySearchBoxText(text) {
        expect(await this.searchBoxInputField.getAttribute('placeholder'))
            .to.equal(text, 'Header search box text is incorrect');
    }

    async isShoppingCartDisplayed() {
        expect(await this.shoppingCart.isDisplayed()).to.equal(true, 'Header shopping cart is not visible');
    }

    async verifyShoppingCartText(text) {
        expect(await this.shoppingCart.getText()).to.equal(text, 'Header shopping cart text is incorrect');
    }

    async enterTextOnSearchBox(text) {
        await this.searchBoxInputField.click();
        await this.searchBoxInputField.setValue(text);
    }

    async clickSearchBoxButton() {
        await this.searchBoxButton.click();
    }
}

export default new HeaderComponent();
