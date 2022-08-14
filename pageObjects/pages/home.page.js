import BasePage from './base.page';

class HomePage extends BasePage {
    get homePageSlider() {
        return $('#homepage-slider');
    }

    async open() {
        await super.open('/');
        expect(await this.homePageSlider.isDisplayed()).to.equal(true, 'Home page slider is not displayed');
    }
}

export default new HomePage();
