document.addEventListener('DOMContentLoaded', function() {
    const highlightCards = document.querySelectorAll('.highlight-card');
    const timelinePhases = document.querySelectorAll('.timeline-phase');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    highlightCards.forEach(card => {
        observer.observe(card);
    });
    
    timelinePhases.forEach(phase => {
        observer.observe(phase);
    });
});