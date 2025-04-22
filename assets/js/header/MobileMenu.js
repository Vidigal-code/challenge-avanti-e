class MobileMenu {
    constructor() {
        this.toggleButton = document.getElementById('mobile-menu-toggle');
        this.toggleClose = document.getElementById('mobile-menu-toggle-close');
        this.menuContainer = document.querySelector('.mobile-menu-container');
        this.categoryLists = [
            document.getElementById('mobile-category-list-1'),
            document.getElementById('mobile-category-list-2'),
            document.getElementById('mobile-category-list-3')
        ];
        this.categories = [
            ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
            ['Item 9', 'Item 10', 'Item 11', 'Item 12']
        ];
    }

    init() {
        if (this.toggleButton && this.menuContainer) {
            this.setupToggle();
        }
        this.populateCategories();
        this.setupDepartmentClicks();
    }

    setupToggle() {
        if (this.toggleButton && this.menuContainer) {
            this.toggleButton.addEventListener('click', () => {
                if (this.menuContainer) {
                    this.menuContainer.classList.toggle('active');
                }

                /* const icon = this.toggleButton.querySelector('i');
                 if (icon) {
                     if (this.menuContainer.classList.contains('active')) {
                         icon.classList.remove('bi-list');
                         icon.classList.add('bi-x-lg');
                     } else {
                         icon.classList.remove('bi-x-lg');
                         icon.classList.add('bi-list');
                     }
                 }*/
            });
        }

        if (this.toggleClose && this.menuContainer) {
            this.toggleClose.addEventListener('click', () => {
                if (this.menuContainer) {
                    this.menuContainer.classList.remove('active');
                }
                /*
                                const icon = this.toggleButton.querySelector('i');
                                if (icon) {
                                    icon.classList.remove('bi-x-lg');
                                    icon.classList.add('bi-list');
                                }*/
            });
        }
    }

    populateCategories() {
        this.categories.forEach((items, index) => {
            const ul = this.categoryLists[index];
            if (ul) {
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
            }
        });
    }

    setupDepartmentClicks() {
        const departmentItems = document.querySelectorAll('.mobile-dropdown-item');
        departmentItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = document.querySelector('.mobile-categories-title');
                if (title) title.textContent = item.textContent;
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = new MobileMenu();
    if (mobileMenu.toggleButton && mobileMenu.menuContainer) {
        mobileMenu.init();
    }
});
