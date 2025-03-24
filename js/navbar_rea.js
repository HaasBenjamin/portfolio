const listLink = [
    {
        href: "php.html",
        icon: "php-nobg.png",
        alt: "PHP",
        class: "btnSwitch",
        value: "php",
    },
    {
        href: "js.html",
        icon: "js_minia.png",
        alt: "JS",
        class: "btnSwitch",
        value: "js",
    },
    {
        href: "python.html",
        icon: "python-nobg.png",
        alt: "PYTHON",
        class: "btnSwitch",
        value: "python",
    },
    {
        href: "csharp.html",
        icon: "csharp-nobg.png",
        alt: "C#",
        class: "btnSwitch",
        value: "csharp",
    },
    {
        href: "godot.html",
        icon: "godot-nobg.png",
        alt: "GODOT",
        value: "godot",
        class: "godotLink"
    }
]
function generateNavBar() {
    const navbar = document.querySelector('.navbar_rea')
    navbar.innerHTML = `<a href="/portfolio/realisations.html"><img class="btnHome" src="/portfolio/img/vignette/home.png" width="40" height="40" alt="home"></a>`
    const getParams = new URLSearchParams(window.location.search)
    const currentLink = getParams.get("language") ?? "godot"
    listLink.forEach(link => {
        if ( currentLink !== link.value && currentLink) {
            const a = document.createElement(currentLink === 'godot' ? 'a' : 'span')
            a.href = `/portfolio/realisations/realisations_fade.html?language=${link.value}`
            a.classList.add(link.class)
            a.value = link.value
            const img = document.createElement('img')
            img.classList.add("btnHome")
            img.src = `/portfolio/img/logo/${link.icon}`
            img.width = "40"
            img.height = "40"
            img.alt = link.alt
            a.appendChild(img)
            navbar.appendChild(a)
        }
    })

    document.querySelector(".godotLink").addEventListener('click', () => {
        window.location.href = "/portfolio/realisations/godot.html"
    })
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("godot")) {
        generateNavBar()
        document.querySelectorAll(".btnSwitch").forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault()
                window.location.href
            })
        })
    }
})

