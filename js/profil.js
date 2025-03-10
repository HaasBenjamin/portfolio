document.addEventListener('DOMContentLoaded', () => {
    const titles = ["Développeur Web Fullstack", "En recherche d'alternance sur Reims ou dans l'Aisne", "Toujours avide de savoir (surtout en PHP et en JS)"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 80; // Vitesse d'écriture
    const pause = 2000; // Temps d'attente avant suppression
    function typeEffect() {
        let currentTitle = titles[titleIndex];
        document.getElementById("animated-title").textContent = isDeleting ? currentTitle.substring(0, charIndex--) : currentTitle.substring(0, charIndex++);

        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => (isDeleting = true), pause);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }

        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    typeEffect();
})

