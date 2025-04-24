import './page-main-styles/promotion-banner-top.scss'

const PromotionBannerTop: React.FC = () => {



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
                    <p className="promo-banner-primary-text" data-translate="promoBannerFirstText">
                        super <span className="promo-banner-span-text"
                                    data-translate="promoBannerSecondText"> sale </span>
                    </p>
                    <p className="promo-banner-secondary-text" data-translate="promoBannerThirdText">Itens selecionados
                        com
                        até</p>
                    <p className="promo-banner-three-text" data-translate="promoBannerFourthText">50% off</p>
                </div>
            </div>
        </section>
    );
};

export default PromotionBannerTop;