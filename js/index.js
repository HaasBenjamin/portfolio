document.addEventListener('DOMContentLoaded', () => {
    let currentHover = null

    document.querySelectorAll('.navigate_section').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('navigate_section_animate')
            link.querySelector('.navigate_content').style.opacity = '1'
            currentHover = link
        })
        link.addEventListener('mouseleave', () => {
            link.classList.remove('navigate_section_animate')
            link.querySelector('.navigate_content').style.opacity = '0.3'
            currentHover = null
        })

        if (localStorage.getItem(link.href) === 'true') {
            link.classList.add('visited');
        }

        // Ajouter un événement pour enregistrer la visite
        link.addEventListener('click', () => {
            localStorage.setItem(link.href, 'true');
            link.classList.add('visited');
        });
    })
    
    

    let indiceCouleur = 0
    const tabCouleurOrange = ['#FFA500', '#FF8C00', '#FF7F32', '#FF6F00', '#FF4500', '#FF6347', '#FF7043', '#FF8000', '#FF9A00', '#FFB84D']
    let tabCouleurViolet = ['#800080', '#860D91', '#8C1AA2', '#9227B3', '#9834C4', '#9E41D5', '#A44EE6', '#AA5BF7', '#B068FF', '#B675FF']
    function changeCouleurBorder() {
        if (currentHover !== null && currentHover.classList.contains('visited')) {
            document.documentElement.style.setProperty('--border-color', tabCouleurViolet[indiceCouleur]);
        } else {
            document.documentElement.style.setProperty('--border-color', tabCouleurOrange[indiceCouleur]);
        }
        indiceCouleur++
        if (indiceCouleur === tabCouleurOrange.length) {
            indiceCouleur = 0
        }
        setTimeout(changeCouleurBorder, 125)
    }
    changeCouleurBorder()
    
})