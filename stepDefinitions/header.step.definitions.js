import {Then, When} from '@cucumber/cucumber';
import HeaderComponent from "../pageObjects/components/header.component";

Then(/^I should see the header container$/, async () => {
    await HeaderComponent.isHeaderDisplayed();
});

Then(/^I should see the header banner$/, async () => {
    await HeaderComponent.isBannerDisplayed();
});

Then(/^I should see the header navigation container$/, async () => {
    await HeaderComponent.isHeaderNavigationContainerDisplayed();
});

Then(/^I verify the text of the following fields$/, async (table) => {
   await HeaderComponent.verifyFieldsText(table.rowsHash());
});

Then(/^I should see the header logo$/, async () => {
    await HeaderComponent.isHeaderLogoDisplayed();
});

Then(/^I should see the header search box$/, async () => {
   await HeaderComponent.isHeaderSearchBoxDisplayed();
});

Then(/^I should verify that the search box text is "(.*)"$/, async (text) => {
    await HeaderComponent.verifySearchBoxText(text);
});

Then(/^I should see the header shopping cart$/, async () => {
    await HeaderComponent.isShoppingCartDisplayed();
});

Then(/^I should verify that the shopping cart text is "(.*)"$/, async (text) => {
    await HeaderComponent.verifyShoppingCartText(text);
});

When(/^I enter "(.*)" on the search box$/, async (text) => {
    await HeaderComponent.enterTextOnSearchBox(text);
});

When(/^I click the search box button$/, async () => {
    await HeaderComponent.clickSearchBoxButton();
})