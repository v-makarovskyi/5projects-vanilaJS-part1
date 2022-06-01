const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

leftBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    setToBgBody()
    setActiveSlide()
})

rightBtn.addEventListener('click', () => {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setToBgBody()
    setActiveSlide()
})

setToBgBody()

function setToBgBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}