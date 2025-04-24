import './page-main-styles/newsletter-section.scss'
import {useLanguage} from "../context/LanguageProvider.tsx";

const NewsletterWrapper: React.FC = () => {

    const {translations} = useLanguage();

    return (
        <section className="newsletter-wrapper">
            <div className="newsletter-inner">
                <div className="heading-container">
                    <p className="heading-bold">
                        {translations.newsletter.Signupforour}
                        <span className="heading-accent" >{translations.newsletter.newsletterText}</span>
                    </p>
                </div>
                <div className="form-outer-container">
                    <div className="inputs-container">
                        <input
                            id="input-text-name"
                            type="text"
                            className="form-input-name"
                            placeholder={translations.newsletter.InputTextName}
                        />
                        <input
                            id="input-text-email"
                            type="email"
                            className="form-input-email"
                            placeholder={translations.newsletter.InputTextEmail}
                        />
                    </div>
                    <div className="consent-container">
                        <input type="checkbox"/>
                        <p className="consent-text">
                            {translations.newsletter.PolicyLinkAgreement}
                            <span className="policy-link">{translations.newsletter.PolicyLinkAgreement}</span>
                        </p>
                    </div>
                    <button type="button" className="submit-button">
                        {translations.newsletter.Register}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterWrapper;