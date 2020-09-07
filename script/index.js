const backBtn = document.querySelector('.back')
const menu = document.querySelector('.burguer-btn')
const mobile = document.querySelector('.mobile')
const navMobile = document.querySelector('.nav-mobile')

backBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})

let show = false

menu.addEventListener('click', () => {
  if (show == false) {
    mobile.style.display = 'flex'
    navMobile.classList.add('slide-in-top')
    show = true
  } else {
    mobile.style.display = 'none'
    show = false
  }
})