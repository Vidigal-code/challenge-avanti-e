import './Footer.scss'
import React, {useState} from "react";
import LangJSON from "../../assets/lang/Lang.json";
import {TranslationData} from "../../ts/Lang.ts";
import {BsChevronUp} from 'react-icons/bs';
import {BsChevronCompactDown} from 'react-icons/bs';

const Footer: React.FC = () => {


    const [translations] = useState<TranslationData['footer']>(LangJSON['pt'].footer);

    const [activePanel, setActivePanel] = useState<string | null>('institutional');

    const togglePanel = (panelName: string) => {
        setActivePanel((prev) => (prev === panelName ? null : panelName));
    };

    return (
        <footer className="site-footer">
            <div className="footer-primary">
                <div className="footer-inner">
                    <div className="footer-main-content">

                        <div className="brand-social">
                            <div className="brand-logo">
                                <img src="/assets/image/logo.png" alt="Avanti Logo" className="logo-image"/>
                            </div>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-instagram social-icon"></i></a>
                                <a href="#"><i className="fab fa-facebook-f social-icon"></i></a>
                                <a href="#"><i className="fab fa-youtube social-icon"></i></a>
                                <a href="#"><i className="fab fa-tiktok social-icon"></i></a>
                            </div>
                        </div>

                        <div className="nav-column">
                            <h4 className="column-title">{translations.institutional}</h4>
                            <h5 className="nav-item">{translations.aboutUs}</h5>
                            <h5 className="nav-item">{translations.ourStores}</h5>
                            <h5 className="nav-item">{translations.privacySecurity}</h5>
                            <h5 className="nav-item">{translations.termsConditions}</h5>
                        </div>

                        <div className="nav-column">
                            <h4 className="column-title">{translations.helpCenter}</h4>
                            <h5 className="nav-item">{translations.contactUs}</h5>
                            <h5 className="nav-item">{translations.shippingDelivery}</h5>
                            <h5 className="nav-item">{translations.exchangesReturns}</h5>
                            <h5 className="nav-item">{translations.paymentMethods}</h5>
                            <h5 className="nav-item">{translations.faq}</h5>
                        </div>

                        <div className="nav-column">
                            <h4 className="column-title">{translations.customerService}</h4>
                            <h5 className="nav-item">
                                <span className="bold-text">{translations.phone}:</span> (00) 1234-5678
                            </h5>
                            <h5 className="nav-item">
                                <span className="bold-text">{translations.email}:</span> exemplo@exemplo.com.br
                            </h5>
                            <h5 className="nav-item" style={{fontWeight: 'bold'}}>
                                {translations.serviceHours}
                            </h5>
                            <div className="hours-container">
                                <p className="hours-text">{translations.weekdayHours}</p>
                                <p className="hours-text">{translations.weekendHours}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mobile w-full text-gray-800 py-8">
                        <div className="container mx-auto px-4">
                            <div className="mb-4 border-b border-gray-300">
                                <button
                                    className="w-full flex justify-between items-center p-4 sm:p-6"
                                    onClick={() => togglePanel('institutional')}
                                >
                                    <h2 className="text-lg  sm:text-xl">
                                        {translations.institutional}
                                    </h2>
                                    <span className="text-xl sm:text-2xl">
                                        {activePanel === 'institutional' ? <BsChevronUp/> : <BsChevronCompactDown/>}
                                </span>
                                </button>
                                {activePanel === 'institutional' && (
                                    <div className="p-4 sm:p-6">
                                        <h5 className="text-sm sm:text-base mb-2">{translations.aboutUs}</h5>
                                        <h5 className="text-sm sm:text-base mb-2">{translations.ourStores}</h5>
                                        <h5 className="text-sm sm:text-base mb-2">{translations.privacySecurity}</h5>
                                        <h5 className="text-sm sm:text-base">{translations.termsConditions}</h5>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4 border-b border-gray-300">
                                <button
                                    className="w-full flex justify-between items-center p-4 sm:p-6"
                                    onClick={() => togglePanel('helpCenter')}
                                >
                                    <h2 className="text-lg  sm:text-xl">
                                        {translations.helpCenter}
                                    </h2>
                                    <span className="text-xl sm:text-2xl">
                                 </span>
                                </button>
                                {activePanel === 'helpCenter' && (
                                    <div className="p-4 sm:p-6">
                                        <h5 className="text-sm sm:text-base mb-2">{translations.contactUs}</h5>
                                        <h5 className="text-sm sm:text-base mb-2">{translations.shippingDelivery}</h5>
                                        <h5 className="text-sm sm:text-base mb-2">{translations.exchangesReturns}</h5>
                                        <h5 className="text-sm sm:text-base mb-2">{translations.paymentMethods}</h5>
                                        <h5 className="text-sm sm:text-base">{translations.faq}</h5>
                                    </div>
                                )}
                            </div>
                            <div className="border-b border-gray-300">
                                <button
                                    className="w-full flex justify-between items-center p-4 sm:p-6"
                                    onClick={() => togglePanel('customerService')}
                                >
                                    <h2 className="text-lg  sm:text-xl">
                                        {translations.customerService}
                                    </h2>
                                    <span className="text-xl sm:text-2xl">
                                  {activePanel === 'customerService' ? <BsChevronUp/> : <BsChevronCompactDown/>}
                             </span>
                                </button>
                                {activePanel === 'customerService' && (
                                    <div className="p-4 sm:p-6">
                                        <h5 className="text-sm sm:text-base mb-2">
                                            <span className="font-bold">{translations.phone}:</span> (00) 1234-5678
                                        </h5>
                                        <h5 className="text-sm sm:text-base mb-2">
                                            <span
                                                className="font-bold">{translations.email}:</span> exemplo@exemplo.com.br
                                        </h5>
                                        <h5 className="text-sm sm:text-base font-bold">{translations.serviceHours}</h5>
                                        <div className="space-y-1">
                                            <p className="text-sm sm:text-base">{translations.weekdayHours}</p>
                                            <p className="text-sm sm:text-base">{translations.weekendHours}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="payment-methods">
                        <img
                            src="/assets/image/icons-payments/icon-amex.png"
                            alt="American Express"
                            className="payment-icon"
                        />
                        <img
                            src="/assets/image/icons-payments/icon-mastercard.png"
                            alt="Mastercard"
                            className="payment-icon"
                        />
                        <img src="/assets/image/icons-payments/icon-visa.png" alt="Visa" className="payment-icon"/>
                        <img
                            src="/assets/image/icons-payments/icon-hipercard.png"
                            alt="Hipercard"
                            className="payment-icon"
                        />
                        <img src="/assets/image/icons-payments/icon-elo.png" alt="Elo" className="payment-icon"/>
                        <img
                            src="/assets/image/icons-payments/icon-diners.png"
                            alt="Diners Club"
                            className="payment-icon"
                        />
                        <img src="/assets/image/icons-payments/icon-paypal.png" alt="PayPal" className="payment-icon"/>
                        <img src="/assets/image/icons-payments/icon-pix.png" alt="Pix" className="payment-icon"/>
                        <img src="/assets/image/icons-payments/icon-code.png" alt="Boleto" className="payment-icon"/>
                    </div>
                </div>
            </div>

            <div className="footer-secondary">
                <div className="footer-bottom-wrapper">
                    <div className="footer-disclaimer">
                        <p className="legal-text">{translations.legalText}</p>
                    </div>
                    <div className="certification-container">
                        <img
                            src="/assets/image/icons-footer/partners-footer.png"
                            alt="Certification Partners"
                            className="certification-logos"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;