class Carousel {
    constructor(produtos, carouselContentId, indicatorsContainerId, prevBtnId, nextBtnId, containerSelector) {
        this.produtos = produtos;
        this.carouselContent = document.getElementById(carouselContentId);
        this.indicatorsContainer = document.getElementById(indicatorsContainerId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.containerSelector = containerSelector;
        this.currentPage = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalPages = Math.ceil(this.produtos.length / this.itemsPerView);
        this.autoScrollInterval = null;

        this.init();
    }

    init() {
        this.generateProducts();
        this.generateIndicators();
        this.addEventListeners();
        this.startAutoScroll();
    }

    generateProducts() {
        this.carouselContent.innerHTML = '';

        this.produtos.forEach((produto) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <div class="product-badge">NOVO</div>
                <img src=${produto.image} class="product-image" alt=${produto.nome}>
                <div class="product-info">
                    <h3 class="product-title">${produto.nome}</h3>
                    <div class="product-old-price">R$ ${produto.precoOriginal.toFixed(2).replace('.', ',')}</div>
                    <div class="product-price-container">
                        <span class="product-price">R$ ${produto.precoAtual.toFixed(2).replace('.', ',')}</span>
                        <span class="product-discount">10% OFF</span>
                    </div>
                    <div class="product-installment">Ou em até ${produto.parcelas}x de R$ ${produto.valorParcela.toFixed(2).replace('.', ',')}</div>
                    <button class="buy-button">Comprar</button>
                </div>
            `;

            this.carouselContent.appendChild(productCard);
        });

        this.updateProductWidths();
    }

    generateIndicators() {
        this.indicatorsContainer.innerHTML = '';

        for (let i = 0; i < this.totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.dataset.page = i;
            dot.addEventListener('click', () => this.goToPage(i));
            this.indicatorsContainer.appendChild(dot);
        }
    }

    getItemsPerView() {
        if (window.innerWidth >= 1200) {
            return 5;
        } else if (window.innerWidth >= 992) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 3;
        } else if (window.innerWidth >= 576) {
            return 2;
        } else {
            return 1;
        }
    }

    updateProductWidths() {
        this.itemsPerView = this.getItemsPerView();
        this.totalPages = Math.ceil(this.produtos.length / this.itemsPerView);

        if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages - 1;
        }

        this.generateIndicators();
        this.updateCarouselPosition();
    }

    goToPage(page) {
        if (page < 0) page = this.totalPages - 1;
        if (page >= this.totalPages) page = 0;

        this.currentPage = page;
        this.updateCarouselPosition();

        const dots = this.indicatorsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === this.currentPage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    updateCarouselPosition() {

        const carouselWrapper = this.carouselContent.closest('.carousel-wrapper');
        const carouselWidth = carouselWrapper.offsetWidth;
        const scrollAmount = this.currentPage * carouselWidth;
        this.carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.goToPage(this.currentPage - 1);
        });

        this.nextBtn.addEventListener('click', () => {
            this.goToPage(this.currentPage + 1);
        });

        window.addEventListener('resize', () => {
            this.updateProductWidths();
        });

        const container = document.querySelector(this.containerSelector);
        container.addEventListener('mouseenter', () => this.stopAutoScroll());
        container.addEventListener('mouseleave', () => this.startAutoScroll());
    }

    startAutoScroll() {
        this.stopAutoScroll();
        this.autoScrollInterval = setInterval(() => {
            const nextPage = (this.currentPage + 1) % this.totalPages;
            this.goToPage(nextPage);
        }, 5000);
    }

    stopAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const produtos = [
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

    const carouselOne = new Carousel(
        produtos,
        'carouselContent-one',
        'carouselIndicators-one',
        'prevBtn-one',
        'nextBtn-one',
        '.carousel-container-one'
    );

    const carouselTwo = new Carousel(
        produtos,
        'carouselContent-two',
        'carouselIndicators-two',
        'prevBtn-two',
        'nextBtn-two',
        '.carousel-container-two'
    );
});