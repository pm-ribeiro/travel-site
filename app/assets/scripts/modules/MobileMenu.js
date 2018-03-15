import $ from 'jquery';

class MobileMenu {

	constructor(){
		//new way - no jquery spaghetti

		//selecting the elements with jquery
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	//new way - method
	events(){
		//listing all events that we want to watch for
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		
	}

	//new way - method
	toggleTheMenu(){
		//console.log("clicked");
		//alert(this);
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}

}

export default MobileMenu;