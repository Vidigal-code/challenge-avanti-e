import React, {useState, useRef, useEffect} from 'react';
import {useLanguage} from "../context/LanguageProvider.tsx";

interface SearchHandlerProps {
    inputId: string;
    iconId: string;
    feedbackId: string;
    popupId: string;
    popupMessageId?: string;
    historyListId?: string;
    historyButtonId?: string;
    clearButtonId?: string;
    closeButtonId?: string;
    storageKey?: string;
}

const SearchHandler: React.FC<SearchHandlerProps> = ({
                                                         inputId,
                                                         iconId,
                                                         feedbackId,
                                                         popupId,
                                                         popupMessageId = 'popup-feedback-message',
                                                         historyListId = 'search-history-list',
                                                         historyButtonId = 'history-button',
                                                         clearButtonId = 'clear-button',
                                                         closeButtonId = 'close-button',
                                                         storageKey = 'search_history',
                                                     }) => {
    const { translations } = useLanguage();



    const [inputValue, setInputValue] = useState<string>('');
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [placeholder, setPlaceholder] = useState<string>(translations.searchPlaceholder || 'Digite aqui o que você procura');
    const [searchResult, setSearchResult] = useState<string>('');

    const popupRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const processSearch = () => {
        const value = inputValue.trim();

        if (value) {
            setSearchResult(value);
            addToHistory(value);
            setIsPopupVisible(true);
            setIsHistoryVisible(false);
        } else {
            handleEmptySearch();
        }
    };

    const handleEmptySearch = () => {
        setPlaceholder(translations.searchPlaceholderError);

        setTimeout(() => {
            setPlaceholder(translations.searchPlaceholder);
        }, 2500);
    };

    const addToHistory = (value: string) => {
        let history = [...searchHistory];
        history = history.filter(item => item.toLowerCase() !== value.toLowerCase());
        history.unshift(value);

        if (history.length > 10) history = history.slice(0, 10);

        setSearchHistory(history);
        localStorage.setItem(storageKey, JSON.stringify(history));
    };

    const toggleHistory = () => {
        setIsHistoryVisible(!isHistoryVisible);
    };

    const clearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem(storageKey);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
        setIsHistoryVisible(false);
    };


    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            processSearch();
        }
    };

    const handleHistoryItemClick = (item: string) => {
        setInputValue(item);
        setSearchResult(item);
        setIsPopupVisible(true);
        setIsHistoryVisible(false);
    };

    const isPhoneMobile = inputId.includes('mobile');
    const prefixClass = isPhoneMobile ? 'mobile-' : '';

    useEffect(() => {
        setPlaceholder(translations.searchPlaceholder || 'Digite aqui o que você procura');
    }, [translations]);



    return (
        <div className={`${prefixClass}search-input-container-wrapper`}
             id={inputId.replace('-message-input', '-container')}>
            <div className={`${prefixClass}search-bar-container`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`${prefixClass}search-input-field`}
                    id={inputId}
                    autoComplete="off"
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <i
                    onClick={processSearch}
                    className={`bi bi-search ${prefixClass}search-icon`}
                    id={iconId}
                ></i>
            </div>

            <div id={feedbackId}></div>

            <div
                id={popupId}
                className={`${prefixClass}search-popup`}
                style={{display: isPopupVisible ? 'block' : 'none'}}
                ref={popupRef}
            >
                <div className="popup-header">
                    <span id={closeButtonId} className="close-button" onClick={closePopup}>&times;</span>
                </div>
                <p id={popupMessageId} className={`${prefixClass}search-result-text`}>
                    {searchResult && (
                        <>
                            {translations.searchResultMessage.replace("{0}", "")}
                            <span id="search-result">{searchResult}</span>
                        </>
                    )}
                </p>
                <div className="popup-buttons">
                    <button id={historyButtonId} onClick={toggleHistory}>
                        {translations.searchHistory}
                    </button>
                    <button id={clearButtonId} onClick={clearHistory}>
                        {translations.clearButton}
                    </button>
                </div>
                <ul
                    id={historyListId}
                    className="clean-list"
                    style={{display: isHistoryVisible ? 'block' : 'none'}}
                >
                    {searchHistory.length === 0 ? (
                        <li>{translations.noSearchHistory}</li>
                    ) : (
                        searchHistory.map((item, index) => (
                            <li
                                key={index}
                                className="history-item"
                                onClick={() => handleHistoryItemClick(item)}
                            >
                                {item}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

interface SearchComponentProps {
    isMobile?: boolean;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
                                                             isMobile = false
                                                         }) => {
    const prefix = isMobile ? 'mobile-' : '';

    return (
        <SearchHandler
            inputId={`${prefix}search-message-input`}
            iconId={`${prefix}search-icon`}
            feedbackId={`${prefix}search-feedback-message`}
            popupId={`${prefix}search-popup`}
            popupMessageId={`${prefix}popup-feedback-message`}
            historyListId={`${prefix}search-history-list`}
            historyButtonId={`${prefix}history-button`}
            clearButtonId={`${prefix}clear-button`}
            closeButtonId={`${prefix}close-button`}
            storageKey={`${isMobile ? 'mobile' : 'desktop'}_search_history`}
        />
    );
};


export default SearchComponent;