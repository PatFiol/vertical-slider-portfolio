const slideContainer = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-slide')
const rightSlider = document.querySelector('.right-slide')
const upArrow = document.querySelector('.arrow-down')
const downArrow = document.querySelector('.arrow-up')
const slidesLength = rightSlider.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`


upArrow.addEventListener('click', () => {
  changeSlide('up')
})
downArrow.addEventListener('click', () => {
  changeSlide('down')
})

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight
  if (direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }
  rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
