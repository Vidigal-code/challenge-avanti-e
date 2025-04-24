import './page-main-styles/promotion-avant.scss'

const PromotionAvantOne: React.FC = () => {


    //const { translations } = useLanguage();

    return (
        <div className="product-image-background-color-two">
            <section className="container feature-section">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-1 order-2 mt-4 mt-md-0">
                        <h2 className="section-title text-center text-md-start">LOREM IPSUM</h2>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="feature-text">
                                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                    sem.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="feature-text">
                                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                    sem.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="feature-text">
                                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                    sem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1 text-center">
                        <img src="/assets/image/main-promo/page-banners/promotion-avanti-two.png" alt="AVANTI Mug"
                             className="product-image img-fluid"/>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default PromotionAvantOne;