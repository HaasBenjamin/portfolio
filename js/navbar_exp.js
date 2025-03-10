const listLink = [
    {
        href: "lycee.html",
        icon: "mechain-nobg.png",
        alt: "lycee",
    },
    {
        href: "iut.html",
        icon: "iut-nobg.png",
        alt: "iut",
    },
    {
        href: "esgi.html",
        icon: "esgi-nobg.png",
        alt: "esgi",
    },
    {
        href: "mahoudeaux.html",
        icon: "mahoudeaux-nobg.png",
        alt: "mahoudeaux",
    },
    {
        href: "cerfrance.html",
        icon: "cerfrance-nobg.png",
        alt: "cerfrance",
    },
    {
        href: "pierru.html",
        icon: "pierru-nobg.png",
        alt: "pierru",
    },
]
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar_exp')
    navbar.innerHTML = `<a href="/portfolio/experiences.html"><img class="btnHome" src="/portfolio/img/vignette/home.png" width="40" height="40" alt="home"></a>`
    const currentLink = window.location.href.split('/').pop()
    listLink.forEach(link => {
        if (currentLink !== link.href ) {
            const a = document.createElement('a')
            a.href = `/portfolio/experiences/${link.href}`
            const img = document.createElement('img')
            img.classList.add('btnHome')
            img.src = `/portfolio/img/logo/${link.icon}`
            img.width = "40"
            img.height = "40"
            img.alt = link.alt
            a.appendChild(img)
            navbar.appendChild(a)
        }
    })
})
