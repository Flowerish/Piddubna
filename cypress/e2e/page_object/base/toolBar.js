export const selectors = {
    buttonMenuHome: '#mainnav > ul > li:nth-child(2)',
    homeSubMenu: '#mainnav > ul > li:nth-child(2) > ul',
    linkOnPage: '#mainnav > ul > li:nth-child(2) > ul > li > a',
    burgerMenuLink: 'app-left-menu .sidebar-bar',
    burgerMenuSubLink: '.sidebar-menu > li > a >.sub-arrow:nth-child(1)'
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
/**
 * не уверена применится ли оно ко всем линкам, наверное да
 */
    
    
    /*
    Comments:
    1) создать новый класс в отдельном файле
    2) Классы должны называться уникально они могут находитьсся в одном файле
    3) По возможности заранить
    4) cy.get(this.burgerMenuSubLink).invoke('show'); тут обрати внимание, что тебе возвращат список, а нужен элемент один восользуйся - eq().
    */
    get burgerMenuLink() {
        return 'app-left-menu .sidebar-bar'
    }

    get burgerMenuSubLink () {
        return '.sidebar-menu > li > a >.sub-arrow:nth-child(1)'
    }

    linkInBurgerMenu(text) {
        return '.sidebar-menu > li > a >.sub-arrow:nth-child(1)'.contains(text);
    }

    openLinkInBurgerMenu (burgerPage) {
        cy.get(this.burgerMenuLink).click();
        cy.get(this.burgerMenuSubLink).invoke('show');
        this.openLinkInBurgerMenu(burgerPage).click();
    }
  
} module.exports = new toolBar();
