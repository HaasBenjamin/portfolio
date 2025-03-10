const listLink = [
    {
        href: "tennis.html",
        icon: "tennis_minia.jpg",
        alt: "tennis",
    },
    {
        href: "handball.html",
        icon: "ball_hand.jpg",
        alt: "hand",
    },
    {
        href: "volley.html",
        icon: "ball_volley.jpg",
        alt: "volley",
    },
    {
        href: "judo.html",
        icon: "judo.png",
        alt: "judo",
    },
    {
        href: "cartes.html",
        icon: "cartes.png",
        alt: "cartes",
    },
    {
        href: "voyages.html",
        icon: "airbus.png",
        alt: "voyages",
    },
    {
        href: "games.html",
        icon: "gamer.png",
        alt: "vidéos",
    },
    {
        href: "societes.html",
        icon: "dices.png",
        alt: "société",
    },
    {
        href: "puzzles.html",
        icon: "puzzle3d.jpg",
        alt: "puzzle",
    }
]
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar_passions')
    navbar.innerHTML = `<a href="/portfolio/passions.html"><img class="btnHome" src="/portfolio/img/vignette/home.png" width="40" height="40" alt="home"></a>`
    const currentLink = window.location.href.split('/').pop()
    listLink.forEach(link => {
        if (currentLink !== link.href ) {
            const a = document.createElement('a')
            a.href = `/portfolio/passions/${link.href}`
            const img = document.createElement('img')
            img.classList.add('btnHome')
            img.src = `/portfolio/img/vignette/${link.icon}`
            img.width = "40"
            img.height = "40"
            img.alt = link.alt
            a.appendChild(img)
            navbar.appendChild(a)
        }
    })
})
