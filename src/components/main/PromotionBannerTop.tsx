import './page-main-styles/promotion-banner-top.scss'
import {useLanguage} from "../context/LanguageProvider.tsx";

const PromotionBannerTop: React.FC = () => {

    const { translations } = useLanguage();


    return (
        <section className="promo-banner-container">
            <div className="promo-banner-content">
                <img
                    src="/assets/image/main-promo/top-banners/promotion-top-banner.jpg"
                    alt="banner-image"
                    className="promo-banner-image"
                />
                <img
                    src="/assets/image/main-promo/top-banners/promotion-top-banner-mobile.png"
                    alt="banner-image"
                    className="mobile-promo-banner-image"
                />
                <div className="promo-banner-text">
                    <p className="promo-banner-primary-text">
                        {translations.promoBannerFirstText} <span className="promo-banner-span-text"
                                    >    {translations.promoBannerSecondText}  </span>
                    </p>
                    <p className="promo-banner-secondary-text">
                        {translations.promoBannerThirdText}
                    </p>
                    <p className="promo-banner-three-text">{translations.promoBannerFourthText}</p>
                </div>
            </div>
        </section>
    );
};

export default PromotionBannerTop;