import Header from "./components/header/Header.tsx";
import PromotionBannerTop from "./components/main/PromotionBannerTop.tsx";
import { Produto } from "./ts/Carousel.ts";
import CarouselComponent from "./components/main/CarouselComponent.tsx";
import PromotionAvantOne from "./components/main/PromotionAvantOne.tsx";
import Footer from "./components/footer/Footer.tsx";
import PromotionAvantTwo from "./components/main/PromotionAvantTwo.tsx";
import HeroBanner from "./components/main/HeroBanner.tsx";
import NewsletterWrapper from "./components/main/NewsletterWrapper.tsx";

const Produtos: Produto[] = [
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    },
    {
        nome: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        image:"/assets/image/main-carousel/photo-carousel.png",
        precoOriginal: 89.90,
        precoAtual: 79.90,
        parcelas: 10,
        valorParcela: 7.90
    }
];

function App() {
    return (
        <>
            <Header />
            <PromotionBannerTop />
            <CarouselComponent produtos={Produtos}  index={0}/>
            <PromotionAvantOne/>
            <PromotionAvantTwo/>
            <PromotionAvantOne/>
            <CarouselComponent produtos={Produtos} index={1} />
            <HeroBanner/>
            <NewsletterWrapper/>
            <Footer/>
        </>
    );
}

export default App;
