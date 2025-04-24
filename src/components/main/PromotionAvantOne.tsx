import './page-main-styles/promotion-avant.scss'

const PromotionAvantOne: React.FC = () => {


    //const { translations } = useLanguage();

    return (
        <section className="container py-5 mt-8">
            <div className="row g-5 align-items-center">
                <div className="col-md-6 product-image-background-color-one">
                    <img src="/assets/image/main-promo/page-banners/promotion-avanti-one.png" alt="promotion-avanti.png"
                         className="product-image-info img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold mb-4">LOREM IPSUM</h2>

                    <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                        ut
                        eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia
                        pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget
                        lacinia.
                        Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit
                        a
                        libero commodo egestas efficitur id augue.</p>

                    <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                        ut
                        eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia
                        pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget
                        lacinia.
                        Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit
                        a
                        libero commodo egestas efficitur id augue.</p>
                </div>
            </div>
        </section>
    );
};

export default PromotionAvantOne;