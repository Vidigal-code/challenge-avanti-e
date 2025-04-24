export type Language = 'en' | 'pt' | 'es'; // add lang here

export interface Menu {
    pt: string;
    en: string;
    es: string;
}

export interface Footer {
    institutional: string;
    aboutUs: string;
    ourStores: string;
    privacySecurity: string;
    termsConditions: string;
    helpCenter: string;
    contactUs: string;
    shippingDelivery: string;
    exchangesReturns: string;
    paymentMethods: string;
    faq: string;
    customerService: string;
    phone: string;
    email: string;
    serviceHours: string;
    weekdayHours: string;
    weekendHours: string;
    legalText: string;
}

export interface Newsletter {
    Signupforour: string;
    newsletterText: string;
    InputTextName: string;
    InputTextEmail: string;
    PolicyLinkAgreement: string;
    PolicyLink: string;
    Register: string;
}

export interface TranslationData {
    language: Language;
    menu: Menu;
    searchPlaceholder: string;
    searchPlaceholderError: string;
    searchResultMessage: string;
    noSearchHistory: string;
    discountMessage: string;
    discountMessageValue: string;
    discountMessageFinal: string;
    couponMessage: string;
    greeting: string;
    username: string;
    allCategories: string;
    department: string;
    category: string;
    searchHistory: string;
    clearButton: string;
    menuTitle: string;
    viewAll: string;
    promoText: string;
    promoHighlight: string;
    pageTitle: string;
    productDetails: string;
    price: string;
    addToCart: string;
    checkout: string;
    emptyCart: string;
    continueShopping: string;
    orderSummary: string;
    totalPrice: string;
    shipping: string;
    paymentMethod: string;
    orderConfirmation: string;
    thankYouMessage: string;
    promoBannerFirstText: string;
    promoBannerSecondText: string;
    promoBannerThirdText: string;
    promoBannerFourthText: string;
    CarouselReleases: string;
    CarouselSeemore: string;
    heropage: {
        HeroText: string;
    };
    newsletter: Newsletter;
    footer: Footer;
}



