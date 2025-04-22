class LanguageSelector {
    constructor() {
        this.translationManager = null;
        this.supportedLanguages = ['en', 'pt', 'es'];
        this.currentLang = localStorage.getItem('preferredLanguage');
    }

    init() {
        return import('/assets/js/header/Lang.js')
            .then(module => {
                this.translationManager = module.translationManager;
                return this.translationManager.loadTranslations()
                    .then(() => {
                        this.createLanguageSelector();
                        return this.translationManager.translations;
                    });
            })
            .catch(error => {
                console.error("Error initializing language selector:", error);
            });
    }

    createLanguageSelector() {
        const mobileSelectContainer = document.querySelector('.mobile-select-language');
        const desktopSelectContainer = document.querySelector('.desktop-select-language');

        if (!mobileSelectContainer || !desktopSelectContainer) {
            console.error('Elemento .mobile-select-language ou .desktop-select-language não encontrado no DOM.');
            return;
        }

        const selectElementMobile = document.createElement('select');
        selectElementMobile.id = 'language-selector-mobile';
        selectElementMobile.className = 'language-select';

        const selectElementDesktop = document.createElement('select');
        selectElementDesktop.id = 'language-selector-desktop';
        selectElementDesktop.className = 'language-select';

        mobileSelectContainer.appendChild(selectElementMobile);
        desktopSelectContainer.appendChild(selectElementDesktop);

        this.updateLanguageOptions(selectElementMobile);
        this.updateLanguageOptions(selectElementDesktop);

        selectElementMobile.addEventListener('change', (e) => {
            this.handleLanguageChange(e.target.value);
        });

        selectElementDesktop.addEventListener('change', (e) => {
            this.handleLanguageChange(e.target.value);
        });
    }

    updateLanguageOptions(selectElement) {
        selectElement.innerHTML = '';
        this.supportedLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            const label = this.translationManager.translations[this.currentLang]?.menu?.[lang] || lang;
            option.textContent = label;
            if (lang === this.currentLang) {
                option.selected = true;
            }

            selectElement.appendChild(option);
        });
    }

    handleLanguageChange(selectedLang) {
        this.currentLang = selectedLang;
        localStorage.setItem('preferredLanguage', selectedLang);
        this.translationManager.setLanguage(selectedLang);
        this.translationManager.updateAllTexts();

        document.querySelectorAll('.language-select').forEach(select => {
            this.updateLanguageOptions(select);
            select.value = selectedLang;
        });

        //console.warn(`Language changed to: ${this.translationManager.translations[selectedLang].menu[selectedLang]}`);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = new LanguageSelector();
    languageSelector.init();
});

export { LanguageSelector };
