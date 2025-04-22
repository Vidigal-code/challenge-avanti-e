class SearchHandler {
    constructor(config) {

        this.input = document.getElementById(config.inputId);
        this.icon = document.getElementById(config.iconId);
        this.feedback = document.getElementById(config.feedbackId);
        this.popup = document.getElementById(config.popupId);
        this.popupMessage = document.getElementById(config.popupMessageId || 'popup-feedback-message');
        this.historyList = document.getElementById(config.historyListId || 'search-history-list');
        this.historyButton = document.getElementById(config.historyButtonId || 'history-button');
        this.clearButton = document.getElementById(config.clearButtonId || 'clear-button');
        this.closeButton = document.getElementById(config.closeButtonId || 'close-button');

        this.searchKey = config.storageKey || 'search_history';
        this.originalPlaceholder = this.input?.placeholder || '';
        this.translationManager = window.translationManager || null;

        if (this.input && this.icon && this.feedback && this.popup) {
            this.init();
        }

        document.addEventListener('languageChanged', (event) => this.updateTranslations(event.detail.language));
    }

    init() {
        this.input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') this.processSearch();
        });

        this.icon.addEventListener('click', () => this.processSearch());
        this.historyButton.addEventListener('click', () => this.toggleHistory());
        this.clearButton.addEventListener('click', () => this.clearHistory());
        this.closeButton.addEventListener('click', () => this.closePopup());

        document.addEventListener('click', (e) => {
            if (!this.popup.contains(e.target) && e.target !== this.icon && e.target !== this.input) {
                this.closePopup();
            }
        });
    }

    processSearch() {
        const value = this.input.value.trim();

        if (value) {
            this.displaySearchResult(value);
            this.addToHistory(value);
            this.togglePopupVisibility(true);
        } else {
            this.handleEmptySearch();
        }
    }

    displaySearchResult(value) {
        const searchTemplate = this.getTranslation("searchResultMessage", "Você procurou por: {0}");
        this.popupMessage.innerHTML = searchTemplate.replace('{0}', `<span id="search-result">${value}</span>`);
    }

    handleEmptySearch() {
        this.input.placeholder = this.getTranslation("searchPlaceholderError", "Digite algo para buscar");

        setTimeout(() => {
            this.input.placeholder = this.getTranslation("searchPlaceholder", "Digite aqui o que você procura");
            this.input.style.color = '';
        }, 2500);
    }

    togglePopupVisibility(show) {
        this.popup.style.display = show ? 'block' : 'none';
        this.historyList.style.display = show ? 'none' : 'block';
    }

    addToHistory(value) {
        let history = JSON.parse(localStorage.getItem(this.searchKey)) || [];
        history = history.filter(item => item.toLowerCase() !== value.toLowerCase());
        history.unshift(value);

        if (history.length > 10) history = history.slice(0, 10);

        localStorage.setItem(this.searchKey, JSON.stringify(history));
    }

    toggleHistory() {
        const history = JSON.parse(localStorage.getItem(this.searchKey)) || [];

        if (this.historyList.style.display === 'block') {
            this.historyList.style.display = 'none';
            return;
        }

        if (history.length === 0) {
            this.displayNoHistoryMessage();
        } else {
            this.displayHistoryItems(history);
        }

        this.historyList.style.display = 'block';
    }

    displayNoHistoryMessage() {
        const noHistoryMessage = this.getTranslation("noSearchHistory", "Sem buscas recentes.");
        this.historyList.innerHTML = `<li>${noHistoryMessage}</li>`;
    }

    displayHistoryItems(history) {
        this.historyList.innerHTML = history.map(item =>
            `<li class="history-item">${item}</li>`
        ).join('');

        setTimeout(() => {
            const items = document.querySelectorAll('.history-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    this.input.value = item.textContent;
                    this.processSearch();
                });
            });
        }, 0);
    }

    clearHistory() {
        localStorage.removeItem(this.searchKey);
        this.displayNoHistoryMessage();
    }

    closePopup() {
        this.popup.style.display = 'none';
    }

    getTranslation(key, fallback) {
        return this.translationManager ? this.translationManager.returnLang(key) : fallback;
    }

    updateTranslations() {
        if (this.input.placeholder === this.originalPlaceholder) {
            this.originalPlaceholder = this.getTranslation("searchPlaceholder", "Digite aqui o que você procura");
            this.input.placeholder = this.originalPlaceholder;
        }

        if (this.historyList.style.display === 'block') {
            this.toggleHistory();
            this.toggleHistory();
        }

        if (this.popup.style.display === 'block') {
            const searchValue = document.getElementById('search-result')?.textContent || '';
            if (searchValue) {
                const searchTemplate = this.getTranslation("searchResultMessage", "Você procurou por: {0}");
                this.popupMessage.innerHTML = searchTemplate.replace('{0}', `<span id="search-result">${searchValue}</span>`);
            }
        }
    }
}

export { SearchHandler };

document.addEventListener('DOMContentLoaded', () => {

    window.desktopSearchHandler = new SearchHandler({
        inputId: 'search-message-input',
        iconId: 'search-icon',
        feedbackId: 'search-feedback-message',
        popupId: 'search-popup',
        popupMessageId: 'popup-feedback-message',
        historyListId: 'search-history-list',
        historyButtonId: 'history-button',
        clearButtonId: 'clear-button',
        closeButtonId: 'close-button',
        storageKey: 'desktop_search_history'
    });

    window.mobileSearchHandler = new SearchHandler({
        inputId: 'mobile-search-message-input',
        iconId: 'mobile-search-icon',
        feedbackId: 'mobile-search-feedback-message',
        popupId: 'mobile-search-popup',
        popupMessageId: 'mobile-popup-feedback-message',
        historyListId: 'mobile-search-history-list',
        historyButtonId: 'mobile-history-button',
        clearButtonId: 'mobile-clear-button',
        closeButtonId: 'mobile-close-button',
        storageKey: 'mobile_search_history'
    });
});