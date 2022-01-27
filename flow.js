const slidePage = document.querySelector('.slidePage')
const firtNextBtn = document.querySelector('.nextBtn')
const prevBtnSec = document.querySelector('.prev-1')
const nextBtnSec = document.querySelector('.next-1')
const prevBtnTrd = document.querySelector('.prev-2')
const nextBtnTrd = document.querySelector('.next-2')
const prevBtnFour = document.querySelector('.prev-3')
const nextBtnFour = document.querySelector('.next-3')
const prevBtnFiv = document.querySelector('.prev-4')
const nextBtnFiv = document.querySelector('.next-4')
const prevBtnSix = document.querySelector('.prev-5')
const nextBtnSix = document.querySelector('.next-5')
const prevBtnSev = document.querySelector('.prev-6')
const submitBtnSev = document.querySelector('.submit')

firtNextBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-25%"
})
nextBtnSec.addEventListener("click", function () {
   slidePage.style.marginLeft = "-50%"
})
nextBtnTrd.addEventListener("click", function () {
   slidePage.style.marginLeft = "-75%"
})
nextBtnFour.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%"
})
nextBtnFiv.addEventListener("click", function () {
   slidePage.style.marginLeft = "-125%"
})
nextBtnSix.addEventListener("click", function () {
   slidePage.style.marginLeft = "-150%"
})
prevBtnSev.addEventListener("click", function () {
   slidePage.style.marginLeft = "-125%"
})
prevBtnSix.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%"
})
prevBtnFiv.addEventListener("click", function () {
   slidePage.style.marginLeft = "-75%"
})
prevBtnFour.addEventListener("click", function () {
   slidePage.style.marginLeft = "-50%"
})
prevBtnTrd.addEventListener("click", function () {
   slidePage.style.marginLeft = "-25%"
})
prevBtnSec.addEventListener("click", function () {
   slidePage.style.marginLeft = "0%"
})
