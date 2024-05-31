class MobileBottomNavigation extends HTMLElement {
    constructor() {
        super();
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        this.attachScrollEventListener();
    }

    attachScrollEventListener() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }
    
    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > this.lastScrollTop) {
            this.classList.remove('animate');
        } else {
            this.classList.add('animate');
        }
        this.lastScrollTop = currentScrollTop;
    }
}
customElements.define('mobile-bottom-navigation', MobileBottomNavigation);

class MobileNavigationSearch extends HTMLElement {
    constructor() {
        super();
        this.mobNavSearch = document.querySelector('mob-nav-search');
        this.headerSearchModal = document.querySelector('details-modal.header__search');
       
        this.attachEventListener();
    }

    attachEventListener () {
        this.mobNavSearch.addEventListener('click', e => {
            e.stopPropagation();
            this.toggleSearch();
        });
    }

    toggleSearch() {
        if (!this.headerSearchModal) return;

        this.headerSearchModal.querySelector('details').setAttribute('open','true');
    }
}
customElements.define('mob-nav-search', MobileNavigationSearch);