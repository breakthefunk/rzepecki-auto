import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.events();
    }
    events() {
        this.menuIcon.click(console.log)
    );}
    toggleTheMenu() {
        this.toggleClass("sidenav--visible");
        this.menuIcon.toggleClass("");
    }

}

export default MobileMenu