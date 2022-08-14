import {Given, When, Then} from '@cucumber/cucumber';
import HeaderComponent from "../pageObjects/components/header.component";
import dataModel from "../utilities/dataModel";

Then(/^I should see the header container$/, async () => {
    expect(await HeaderComponent.headerContainer.isDisplayed()).to.equal(true, 'Header container is not visible');
});

Then(/^I should see the header banner$/, async () => {
    expect(await HeaderComponent.headerBanner.isDisplayed()).to.equal(true, 'Header banner is not visible');
});

Then(/^I should see the header navigation container$/, async () => {
    expect(await HeaderComponent.headerNavigationContainer.isDisplayed()).to.equal(true, 'Header navigation container is not visible');
});

Then(/^I verify the text of the following fields$/, async (table) => {
    const tableData = table.rowsHash();

    const dataToLocators = {
        'shop number': await HeaderComponent.shopPhone,
        'sing in button': await HeaderComponent.signInButton,
        'contact us button': await HeaderComponent.contactUsButton
    };

    for (const field in tableData){
        const fieldLocator = dataToLocators[field];
        expect(await fieldLocator.getText()).to.equal(tableData[field], `Text of field ${field} is incorrect`);
    }
});

Then(/^I should see the header logo$/, async () => {
    expect(await HeaderComponent.headerLogo.isDisplayed()).to.equal(true, 'Header logo is not visible');
});

Then(/^I should see the header search box$/, async () => {
    expect(await HeaderComponent.searchBox.isDisplayed()).to.equal(true, 'Header search box is not visible');
    expect(await HeaderComponent.searchBoxInputField.isDisplayed()).to.equal(true, 'Header search box input field is not visible');
    expect(await HeaderComponent.searchBoxButton.isDisplayed()).to.equal(true, 'Header search box button is not visible');

});

Then(/^I should verify the search box text$/, async () => {
    expect(await HeaderComponent.searchBoxInputField.getAttribute('placeholder'))
        .to.equal(dataModel.headerComponent.headerSearchBoxPlaceholderText, 'Header search box text is incorrect');
});

Then(/^I should see the header shopping cart$/, async () => {
    expect(await HeaderComponent.shoppingCart.isDisplayed()).to.equal(true, 'Header shopping cart is not visible');
});

Then(/^I should verify that the shopping cart text is "(.*)"$/, async (text) => {
    expect(await HeaderComponent.shoppingCart.getText()).to.equal(text, 'Header shopping cart text is incorrect');
});