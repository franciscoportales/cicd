document.addEventListener('DOMContentLoaded', () => {
    // Reveal card animation on load
    const card = document.querySelector('.glass-card');
    
    // Slight delay to allow CSS to establish initial state
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    // Interactive 3D tilt effect on the card
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        // Apply transform exclusively for desktop, keep mobile flat
        if(window.innerWidth > 768) {
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Reset tilt when mouse leaves window
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
    });
    
    // Disable transition during mouse move for smooth tilt, enable on enter
    document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Buttons interactions
    const startBtn = document.getElementById('startBtn');
    const docBtn = document.getElementById('docBtn');

    startBtn.addEventListener('click', () => {
        // Simple click effect
        startBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            startBtn.style.transform = 'translateY(-2px)';
        }, 150);
        
        console.log('Iniciando entorno de pruebas CI/CD...');
        // Simulate a loading state
        const originalText = startBtn.innerHTML;
        startBtn.innerHTML = 'Conectando Pipeline...';
        
        setTimeout(() => {
            startBtn.innerHTML = originalText;
            alert('¡Ambiente de pruebas CI/CD listo! (Simulación)');
        }, 1500);
    });

    docBtn.addEventListener('click', () => {
        console.log('Abriendo documentación...');
        alert('Documentación de directrices de CI/CD para Sistemas Operativos 2.');
    });
});
