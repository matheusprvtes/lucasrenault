document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after it's visible once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Mockup Carousel Logic
    const track = document.getElementById('mockupCarousel');
    if (track) {
        const slides = track.querySelectorAll('.mockup-slide');
        const prevBtn = document.getElementById('prevMockup');
        const nextBtn = document.getElementById('nextMockup');
        const dots = document.querySelectorAll('.carousel-dots .dot');
        
        let currentIndex = 0;
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
                updateCarousel();
            });
            
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    }
});
