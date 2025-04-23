class MenuHandler {
    constructor() {
        this.menuDepartamentContent = document.getElementById("dropdown-content-menu");
        this.menuCategoryContentFirst = document.getElementById("categories-menu-content-one");
        this.menuCategoryContentSec = document.getElementById("categories-menu-content-two");
        this.menuCategoryContentThird = document.getElementById("categories-menu-content-three");

        this.menuContainer = document.getElementById("navbar-menu-container");
        this.categoriesTitle = document.getElementById("title-categories");
        this.departamentContainer = document.getElementById("departament-container");

        this.init();
    }

    init() {
        this.populateDepartments();
        this.populateCategories();
        this.exposeMethods();
    }

    createCategoryItem(rowIndex) {
        const category = document.createElement("li");
        category.classList.add("category-text","menu-categories", "bar-item-li-font-weight");
        category.textContent = translationManager.returnLang("category");

        if (rowIndex < 1) {
            category.style.color = "var(--color-primary)";
        }

        return category;
    }

    async createDepartmentItem(index) {
        await translationManager.init();
        const department = translationManager.returnLang("department");
        const element = document.createElement("li");
        element.classList.add("department-text","menu-departament", "bar-item-li-font-weight");
        element.innerHTML = `${department} <div style="margin-left: 80px;"><i class="bi bi-chevron-right departament-icon"></i></div>`;

       if (index === 0) {
            element.style.color = "var(--color-primary)";
        }

        return element;
    }

    async populateDepartments() {
        if (this.menuDepartamentContent) {
            for (let i = 0; i < 15; i++) {
                const departmentItem = await this.createDepartmentItem(i);
                if (departmentItem) {
                    this.menuDepartamentContent.appendChild(departmentItem);
                }
            }
        }
    }

    async populateCategories() {
        if (this.menuCategoryContentFirst && this.menuCategoryContentSec && this.menuCategoryContentThird) {
            for (let i = 0; i < 8; i++) {
                this.menuCategoryContentFirst.appendChild(this.createCategoryItem(i));
                this.menuCategoryContentSec.appendChild(this.createCategoryItem(i));
                this.menuCategoryContentThird.appendChild(this.createCategoryItem(i));
            }
        }
    }

    closeMenu() {
        if (this.menuContainer?.classList.contains("activated")) {
            this.menuContainer.classList.remove("activated");
        }
    }

    openMenu(key) {
        if (!this.menuContainer) return;

        this.menuContainer.classList.add("activated");

        if (key !== "bar-item-0") {
            this.departamentContainer?.classList.add("hidden");
            this.categoriesTitle?.classList.add("activated");
        } else {
            this.departamentContainer?.classList.remove("hidden");
            this.categoriesTitle?.classList.remove("activated");
        }
    }

    exposeMethods() {
        window.MenuListClose = this.closeMenu.bind(this);
        window.MenuOpen = this.openMenu.bind(this);
    }
}

export {MenuHandler};

document.addEventListener('DOMContentLoaded', () => {
    new MenuHandler();
});