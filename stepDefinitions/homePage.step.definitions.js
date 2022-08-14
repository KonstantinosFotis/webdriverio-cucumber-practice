import {Given, When, Then} from '@cucumber/cucumber';
import HomePage from '../pageObjects/pages/home.page';

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});
