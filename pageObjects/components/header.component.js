import BaseComponent from "./base.component";

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
        return $('div[class=header_user_info]');
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

}

export default new HeaderComponent();
