import './page-main-styles/hero-banner-page.scss'
import {useLanguage} from "../context/LanguageProvider.tsx";

const HeroBanner: React.FC = () => {

    const {translations} = useLanguage();

    return (
        <section className="hero-banner">
            <img src="/assets/image/main-promo/hero-banners/hero-banner-larger-image.png"
                 className="hero-image d-none d-md-block"
                 alt="AVANTI Banner"/>
            <img src="/assets/image/main-promo/hero-banners/hero-minor-banner-image.png"
                 className="hero-image d-md-none"
                 alt="AVANTI Banner Mobile"/>
            <div className="hero-overlay-text">
                <h4 className="m-0" data-translate="heropage.HeroText">{translations.heropage.HeroText}</h4>
            </div>
        </section>

    );
};

export default HeroBanner;