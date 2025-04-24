
export class Carousel {
    private produtos: Produto[];
    private carouselContent: HTMLElement;
    private indicatorsContainer: HTMLElement;
    private prevBtn: HTMLElement;
    private nextBtn: HTMLElement;
    private containerSelector: string;
    private currentPage: number;
    private itemsPerView: number;
    private totalPages: number;
    private autoScrollInterval: number | null;

    constructor(
        produtos: Produto[],
        carouselContentId: string,
        indicatorsContainerId: string,
        prevBtnId: string,
        nextBtnId: string,
        containerSelector: string
    ) {
        this.produtos = produtos;
        this.carouselContent = document.getElementById(carouselContentId) as HTMLElement;
        this.indicatorsContainer = document.getElementById(indicatorsContainerId) as HTMLElement;
        this.prevBtn = document.getElementById(prevBtnId) as HTMLElement;
        this.nextBtn = document.getElementById(nextBtnId) as HTMLElement;
        this.containerSelector = containerSelector;
        this.currentPage = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalPages = Math.ceil(this.produtos.length / this.itemsPerView);
        this.autoScrollInterval = null;

        this.init();
    }

    private init(): void {
        this.generateProducts();
        this.generateIndicators();
        this.addEventListeners();
        this.startAutoScroll();
    }

    private generateProducts(): void {
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

    private generateIndicators(): void {
        this.indicatorsContainer.innerHTML = '';

        for (let i = 0; i < this.totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.dataset.page = i.toString();
            dot.addEventListener('click', () => this.goToPage(i));
            this.indicatorsContainer.appendChild(dot);
        }
    }

    private getItemsPerView(): number {
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

    private updateProductWidths(): void {
        this.itemsPerView = this.getItemsPerView();
        this.totalPages = Math.ceil(this.produtos.length / this.itemsPerView);

        if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages - 1;
        }

        this.generateIndicators();
        this.updateCarouselPosition();
    }

    public goToPage(page: number): void {
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

    private updateCarouselPosition(): void {
        const carouselWrapper = this.carouselContent.closest('.carousel-wrapper') as HTMLElement;
        const carouselWidth = carouselWrapper.offsetWidth;
        const scrollAmount = this.currentPage * carouselWidth;
        this.carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
    }

    private addEventListeners(): void {
        this.prevBtn.addEventListener('click', () => {
            this.goToPage(this.currentPage - 1);
        });

        this.nextBtn.addEventListener('click', () => {
            this.goToPage(this.currentPage + 1);
        });

        window.addEventListener('resize', () => {
            this.updateProductWidths();
        });

        const container = document.querySelector(this.containerSelector) as HTMLElement;
        container.addEventListener('mouseenter', () => this.stopAutoScroll());
        container.addEventListener('mouseleave', () => this.startAutoScroll());
    }

    public startAutoScroll(): void {
        this.stopAutoScroll();
        this.autoScrollInterval = window.setInterval(() => {
            const nextPage = (this.currentPage + 1) % this.totalPages;
            this.goToPage(nextPage);
        }, 5000);
    }

    public stopAutoScroll(): void {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
}

export interface Produto {
    nome: string;
    image: string;
    precoOriginal: number;
    precoAtual: number;
    parcelas: number;
    valorParcela: number;
}
