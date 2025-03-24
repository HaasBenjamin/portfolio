const listLink = [
    {
        href: "lycee.html",
        icon: "mechain-nobg.png",
        alt: "lycee",
        value: "lycee",
    },
    {
        href: "iut.html",
        icon: "iut-nobg.png",
        alt: "iut",
        value: "iut",
    },
    {
        href: "esgi.html",
        icon: "esgi-nobg.png",
        alt: "esgi",
        value: "esgi",
    },
    {
        href: "mahoudeaux.html",
        icon: "mahoudeaux-nobg.png",
        alt: "mahoudeaux",
        value: "mahoudeaux",
    },
    {
        href: "cerfrance.html",
        icon: "cerfrance-nobg.png",
        alt: "cerfrance",
        value: "cerfrance",
    },
    {
        href: "pierru.html",
        icon: "pierru-nobg.png",
        alt: "pierru",
        value: "pierru",
    },
]
function generateNavBar() {
    const navbar = document.querySelector('.navbar_exp')
    navbar.innerHTML = `<a href="/portfolio/experiences.html"><img class="btnHome" src="/portfolio/img/vignette/home.png" width="40" height="40" alt="home"></a>`
    const getParams = new URLSearchParams(window.location.search)
    const currentLink = getParams.get("exp")
    listLink.forEach(link => {
        if (currentLink !== link.value ) {
            const a = document.createElement('span')
            a.href = `/portfolio/experiences/${link.href}`
            const img = document.createElement('img')
            img.classList.add('btnSwitch', "btnHome")
            img.value = link.value
            img.src = `/portfolio/img/logo/${link.icon}`
            img.width = "40"
            img.height = "40"
            img.alt = link.alt
            a.appendChild(img)
            navbar.appendChild(a)
        }
    })
}
