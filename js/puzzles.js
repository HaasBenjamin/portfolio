let indexCarroussel = 1;

document.addEventListener('DOMContentLoaded', () => {
    function refreshTextCarroussel() {
        document.querySelector('.text_desc:not(.hidden)').classList.add('hidden')
        document.querySelector(`#text_desc_${indexCarroussel}`).classList.remove('hidden')
    }

    const text_desc = document.querySelectorAll('.text_desc')
    const nbText = text_desc.length
    document.querySelector('button.carousel-control-next').addEventListener('click', () => {
        if (indexCarroussel === nbText) {
            indexCarroussel = 1
        } else {
            indexCarroussel++
        }
        refreshTextCarroussel()
    })
    document.querySelector('button.carousel-control-prev').addEventListener('click', () => {
        if (indexCarroussel === 1) {
            indexCarroussel = nbText
        } else {
            indexCarroussel--
        }
        refreshTextCarroussel()
    })
})
