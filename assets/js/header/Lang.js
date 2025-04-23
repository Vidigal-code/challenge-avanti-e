class TranslationManager {
    constructor() {
        this.translations = {};
        this.defaultLang = 'pt'; // language default
        this.elements = {
            'search-message-input': 'placeholder:searchPlaceholder',
            'input-text-name': 'placeholder:newsletter.InputTextName',
            'input-text-email': 'placeholder:newsletter.InputTextEmail',
            'discount-message': 'discountMessage',
            'discount-message-value': 'discountMessageValue',
            'discount-message-final': 'discountMessageFinal',
            'coupon-message': 'couponMessage',
            'user-greeting': 'html:greeting<br/>username',
            'all-categories-text': 'allCategories',
            'mobile-all-categories-text': 'allCategories',
            'title-categories': 'department',
            'mobile-categories-title': 'department',
            'history-button': 'searchHistory',
            'clear-button': 'clearButton',
            'mobile-menu-title': 'menuTitle',
            'view-all-button': 'viewAll',
            'mobile-view-all-button': 'viewAll',
            'promo-text': 'html:promoText<br/><b id="promo-highlight">promoHighlight</b>',
            'mobile-promo-text': 'html:promoText<br/><b id="mobile-promo-highlight">promoHighlight</b>',
            'titulo': 'pageTitle'
        };

        this.availablelanguages = ['pt', 'en', 'es']; //add more language here
    }

    loadTranslations() {
        return fetch('/assets/lang/Lang.json')
            .then(response => {
                if (!response.ok) {
                    console.error("Error loading Lang.json");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    this.translations = data;
                    this.updateAllTexts();
                    this.updateLanguageSelects();
                    return data;
                }
            })
            .catch(error => {
                console.error("Error loading translations:", error);
            });
    }

    returnLang(key, lang = this.defaultLang) {
        if (key === 'br') return '<br/>';

        if (key.includes('.')) {
            const parts = key.split('.');
            let translation = this.translations[lang];

            for (const part of parts) {
                if (translation && translation[part] !== undefined) {
                    translation = translation[part];
                } else {
                    translation = null;
                    break;
                }
            }

            if (translation !== null) return translation;

            if (lang !== 'pt') {
                let ptTranslation = this.translations['pt'];
                for (const part of parts) {
                    if (ptTranslation && ptTranslation[part] !== undefined) {
                        ptTranslation = ptTranslation[part];
                    } else {
                        ptTranslation = null;
                        break;
                    }
                }

                if (ptTranslation !== null) return ptTranslation;
            }
        } else {
            const translation = this.translations[lang]?.[key] ?? this.translations['pt']?.[key];
            if (translation) return translation;
        }

        console.warn(`Translation not found for [${lang}][${key}]`);
        return key;
    }

    updateDynamicTextElements() {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const isHtml = element.hasAttribute('data-translate-html');
            const translation = this.returnLang(key);

            if (isHtml) {
                this.updateHtmlContent(element, `html:${key}`);
            } else {
                this.replaceOnlyTextNodes(element, translation);
            }
        });
    }

    replaceOnlyTextNodes(parent, translationText) {
        parent.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                node.textContent = translationText;
            }
        });
    }

    updateElement(element, translationKey) {
        if (!element) return;

        if (translationKey.startsWith('placeholder:')) {
            this.updatePlaceholder(element, translationKey);
        } else if (translationKey.startsWith('html:')) {
            this.updateHtmlContent(element, translationKey);
        } else {
            element.textContent = this.returnLang(translationKey);
        }
    }

    updatePlaceholder(element, translationKey) {
        const key = translationKey.replace('placeholder:', '');
        element.setAttribute('placeholder', this.returnLang(key));
    }

    updateHtmlContent(element, translationKey) {
        const pattern = translationKey.replace('html:', '');
        let html = pattern;
        const keys = this.extractKeysFromPattern(pattern);

        keys.forEach(key => {
            const translation = this.returnLang(key);
            html = html.replace(key, translation);
        });

        element.innerHTML = html;
    }

    extractKeysFromPattern(pattern) {
        const keys = [];
        const regex = /(?:<[^>]*>)?(\b[\w.]+\b)(?:<\/[^>]*>)?/g;
        let match;
        while ((match = regex.exec(pattern)) !== null) {
            const key = match[1];
            if (key && key !== 'br') keys.push(key);
        }
        return keys;
    }

    updateAllTexts() {
        Object.entries(this.elements).forEach(([id, translationKey]) => {
            const element = document.getElementById(id);
            this.updateElement(element, translationKey);
        });

        this.updateDepartmentItems('.department-text', 'department');
        this.updateDepartmentItems('.mobile-dropdown-item', 'department');
        this.updateDynamicTextElements();
    }

    updateDepartmentItems(selector, translationKey) {
        const departmentItems = document.querySelectorAll(selector);
        departmentItems.forEach(item => {
            this.updateElement(item, translationKey);
        });
    }

    updateLanguageSelects() {
        const languageSelects = document.querySelectorAll('.language-select');

        languageSelects.forEach(select => {

            select.value = this.defaultLang;

            Array.from(select.options).forEach(option => {
                const langCode = option.value;
                const translatedName = this.returnLang(`menu.${langCode}`);
                option.text = translatedName;
            });

            select.addEventListener('change', (event) => {
                const selectedLang = event.target.value;
                this.setLanguage(selectedLang);
            });
        });
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.defaultLang = lang;
            this.updateAllTexts();
            this.updateLanguageSelects();
            localStorage.setItem('preferredLanguage', lang);
            this.dispatchLanguageChangedEvent(lang);
            this.updateActiveLanguageButton();
            return true;
        }
        return false;
    }

    dispatchLanguageChangedEvent(lang) {
        const event = new CustomEvent('languageChanged', {detail: {language: lang}});
        document.dispatchEvent(event);
    }

    init() {
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang && this.availablelanguages.includes(storedLang)) {
            this.defaultLang = storedLang;
        }

        return this.loadTranslations().then(() => {
            this.addLanguageSwitcherListeners();
            this.updateActiveLanguageButton();
            this.updateLanguageSelects();
            return this;
        });
    }

    addLanguageSwitcherListeners() {
        const langSwitchers = document.querySelectorAll('[data-lang]');
        langSwitchers.forEach(switcher => {
            switcher.addEventListener('click', () => {
                const lang = switcher.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }

    updateActiveLanguageButton() {
        const buttons = document.querySelectorAll('.lang-button');
        buttons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-lang') === this.defaultLang);
        });
    }
}

const translationManager = new TranslationManager();

document.addEventListener('DOMContentLoaded', () => {
    translationManager.init();
});

window.translationManager = translationManager;

export {translationManager};