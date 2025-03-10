const listLink = [
    {
        href: "php.html",
        icon: "php-nobg.png",
        alt: "PHP",
    },
    {
        href: "js.html",
        icon: "js_minia.png",
        alt: "JS",
    },
    {
        href: "python.html",
        icon: "python-nobg.png",
        alt: "PYTHON",
    },
    {
        href: "csharp.html",
        icon: "csharp-nobg.png",
        alt: "C#",
    },
    {
        href: "godot.html",
        icon: "godot-nobg.png",
        alt: "GODOT",
    }
]
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('video').forEach((video) => {
        video.playbackRate = 1.5;
    })

    const navbar = document.querySelector('.navbar_rea')
    navbar.innerHTML = `<a href="/portfolio/realisations.html"><img class="btnHome" src="/portfolio/img/vignette/home.png" width="40" height="40" alt="home"></a>`
    const currentLink = window.location.href.split('/').pop()
    listLink.forEach(link => {
        if (currentLink !== link.href ) {
            const a = document.createElement('a')
            a.href = `/portfolio/realisations/${link.href}`
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
