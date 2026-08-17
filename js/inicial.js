document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os carrosséis da classe .hero
    const heroSections = document.querySelectorAll('.hero');

    heroSections.forEach((section) => {
        const slides = section.querySelectorAll('.hero-slide');
        const dots = section.querySelectorAll('.dot');
        let currentSlide = 0;
        let autoRotateInterval;

        if (slides.length === 0) return;

        function goToSlide(index) {
            // Lógica de Loop Infinito
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            // Remove a classe active apenas dos elementos DESTE carrossel
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Ativa o slide e o dot correspondente
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function startAutoRotate() {
            clearInterval(autoRotateInterval);
            autoRotateInterval = setInterval(nextSlide, 5000);
        }

        // Evento de clique nos pontos (dots)
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                // Reinicia o tempo para não pular rápido após o clique
                startAutoRotate();
            });
        });

        // Inicialização imediata
        goToSlide(0);
        startAutoRotate();
    });

    // --- Smooth scroll para links de navegação ---
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Função para os carrosséis de produtos (Scroll horizontal)
function scrollCarousel(carouselId, direction) {
    const container = document.getElementById(carouselId);
    if (container) {
        const scrollAmount = 300;
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}
