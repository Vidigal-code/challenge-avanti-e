import React, { useEffect, useRef } from 'react';
import { Carousel, Produto } from "../../ts/Carousel.ts";
import './page-main-styles/main-carousel.scss';
import { useLanguage } from "../context/LanguageProvider.tsx";

const CarouselComponent: React.FC<{ produtos: Produto[], index: number }> = ({ produtos, index }) => {
    const carouselInstanceOne = useRef<Carousel | null>(null);
    const carouselInstanceTwo = useRef<Carousel | null>(null);
    const { translations } = useLanguage();

    useEffect(() => {
       // console.log("Initializing carousel", index);

        if (index === 0) {
            if (
                document.getElementById('carouselContent-one') &&
                document.getElementById('carouselIndicators-one') &&
                document.getElementById('prevBtn-one') &&
                document.getElementById('nextBtn-one')
            ) {
                carouselInstanceOne.current = new Carousel(
                    produtos,
                    'carouselContent-one',
                    'carouselIndicators-one',
                    'prevBtn-one',
                    'nextBtn-one',
                    '.carousel-container-one'
                );
                //console.log("Carousel 1 initialized");

                return () => {
                    if (carouselInstanceOne.current) {
                        carouselInstanceOne.current.stopAutoScroll();
                    }
                };
            }
        }

        if (index === 1) {
            if (
                document.getElementById('carouselContent-two') &&
                document.getElementById('carouselIndicators-two') &&
                document.getElementById('prevBtn-two') &&
                document.getElementById('nextBtn-two')
            ) {
                carouselInstanceTwo.current = new Carousel(
                    produtos,
                    'carouselContent-two',
                    'carouselIndicators-two',
                    'prevBtn-two',
                    'nextBtn-two',
                    '.carousel-container-two'
                );
                //console.log("Carousel 2 initialized");

                return () => {
                    if (carouselInstanceTwo.current) {
                        carouselInstanceTwo.current.stopAutoScroll();
                    }
                };
            }
        }

    }, [produtos, index]);

    return (
        <>
            {index === 0 && (
                <div className="carousel-container-two">
                    <div className="content-carousel">
                        <div className="container my-5">
                            <div className="section-title">
                                <h2>{translations.CarouselReleases}</h2>
                                <a href="#">{translations.CarouselSeemore}</a>
                            </div>

                            <div className="carousel-container carousel-container-two">
                                <button className="carousel-button prev" id="prevBtn-two">
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                <div className="carousel-wrapper">
                                    <div className="carousel-content" id="carouselContent-two">
                                    </div>
                                </div>

                                <button className="carousel-button next" id="nextBtn-two">
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="carousel-separate">
                            <div className="carousel-indicators-bar" id="carouselIndicators-two">
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {index === 1 && (
                <div className="carousel-container-one">
                    <div className="content-carousel">
                        <div className="container my-5">
                            <div className="section-title">
                                <h2>{translations.CarouselReleases}</h2>
                                <a href="#">{translations.CarouselSeemore}</a>
                            </div>

                            <div className="carousel-container carousel-container-one">
                                <button className="carousel-button prev" id="prevBtn-one">
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                <div className="carousel-wrapper">
                                    <div className="carousel-content" id="carouselContent-one">
                                    </div>
                                </div>

                                <button className="carousel-button next" id="nextBtn-one">
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="carousel-separate">
                            <div className="carousel-indicators-bar" id="carouselIndicators-one">
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarouselComponent;
