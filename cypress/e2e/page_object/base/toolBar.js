export const selectors = {
    buttonMenuHome: '#mainnav > ul > li:nth-child(2)',
    homeSubMenu: '#mainnav > ul > li:nth-child(2) > ul',
    linkOnPage: '#mainnav > ul > li:nth-child(2) > ul > li > a'
}
class toolBar {
    get buttonMenuHome() {
        return '#mainnav > ul > li:nth-child(2)';
    }

    get homeSubMenu() {
        return '#mainnav > ul > li:nth-child(2) > ul';
    }

    pageInSectionHome(text) {
        return cy.get('#mainnav > ul > li:nth-child(2) > ul > li > a').contains(text);
    }

    openPageInSectionHome (namePage) {
        cy.get(this.buttonMenuHome).click();
        cy.get(this.homeSubMenu).invoke('show');
        this.pageInSectionHome(namePage).click();

    }
    get buttonMenuShop() {
        return '#mainnav > ul > li:nth-child(3)';
    }

    get shopSubMenu() {
        return '#mainnav > ul > li:nth-child(3) > ul';
    }
    
    pageInSectionShop(text) {
        return cy.get('#mainnav > ul > li:nth-child(3) > ul > li > a').contains(text);
    }
} module.exports = new toolBar();