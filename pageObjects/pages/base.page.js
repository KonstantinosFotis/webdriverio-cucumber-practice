import BasePage from "../components/base.component";

export default class HomePage extends BasePage {

    async open(path) {
        await browser.url(path);
    }
}
