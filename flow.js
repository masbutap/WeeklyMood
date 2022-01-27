
//kondisional untuk function============================
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
const submitBtn = document.querySelector('.submit')
const progress = document.querySelectorAll('.step p')
const progressCheck = document.querySelectorAll('.step .check')
const bullet = document.querySelectorAll('.step .bullet')
let max = 7
let current = 1

// ini untuk slider nxt -------------
firtNextBtn.addEventListener("click", function () {
   /**
    if (dibawah 3) ----> page kuisoner
    */

   //----------------------------
   slidePage.style.marginLeft = "-25%" // slider
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
   //---------------------------
})
nextBtnSec.addEventListener("click", function () {
   slidePage.style.marginLeft = "-50%"
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
})
nextBtnTrd.addEventListener("click", function () {
   slidePage.style.marginLeft = "-75%"
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
})
nextBtnFour.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%"
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
})
nextBtnFiv.addEventListener("click", function () {
   slidePage.style.marginLeft = "-125%"
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
})
nextBtnSix.addEventListener("click", function () {
   slidePage.style.marginLeft = "-150%"
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1
})


// submit buttonnya ---------------------
submitBtn.addEventListener("click", function () {
   bullet[current - 1].classList.add("active")
   progress[current - 1].classList.add("active")
   progressCheck[current - 1].classList.add("active")
   current += 1

   setTimeout(function () {
      alert('okeokeoek')
   }, 800)
})
//-----------------------------------------------------------------------
// 
prevBtnSev.addEventListener("click", function () {
   slidePage.style.marginLeft = "-125%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
prevBtnSix.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
prevBtnFiv.addEventListener("click", function () {
   slidePage.style.marginLeft = "-75%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
prevBtnFour.addEventListener("click", function () {
   slidePage.style.marginLeft = "-50%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
prevBtnTrd.addEventListener("click", function () {
   slidePage.style.marginLeft = "-25%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
prevBtnSec.addEventListener("click", function () {
   slidePage.style.marginLeft = "0%"
   bullet[current - 2].classList.remove("active")
   progress[current - 2].classList.remove("active")
   progressCheck[current - 2].classList.remove("active")
   current -= 1
})
