import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import LangJSON from '../../assets/lang/Lang.json';
import { Language } from '../../ts/Lang.ts'

type Translations = typeof LangJSON['pt'];  // add Starts in Portuguese main language

interface LanguageContextType {
    language: Language;
    translations: Translations;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language') as Language;
        return saved && LangJSON[saved] ? saved : 'pt'; // Starts in Portuguese main language
    });

    const [translations, setTranslations] = useState<Translations>(LangJSON[language]);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        setTranslations(LangJSON[language]);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, setLanguage: handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
