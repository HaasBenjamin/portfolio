let currentImage = 1;

function switchImage() {
    let img1 = document.getElementById("image1");
    let img2 = document.getElementById("image2");

    // Ajoute l'effet glitch
    img1.classList.add("glitch");
    img2.classList.add("glitch");

    // Change l'image après un court délai
    setTimeout(() => {
        img1.classList.toggle("active");
        img2.classList.toggle("active");

        // Supprime l'effet glitch après transition
        setTimeout(() => {
            img1.classList.remove("glitch");
            img2.classList.remove("glitch");
        }, 300);
    }, 300);

    setTimeout(() => {
        switchImage()
    }, 4000)
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        switchImage();
    }, 3000)
})