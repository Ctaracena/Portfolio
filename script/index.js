const backBtn = document.querySelector('.back')
const menu = document.querySelector('.burguer-btn')
const img = document.querySelector('.menu-btn')
const mobile = document.querySelector('.mobile')
const navMobile = document.querySelector('.nav-mobile')
const menuList = document.querySelector('.menu-list')

backBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})

let show = false

menu.addEventListener('click', () => {
  if (show == false) {
    mobile.style.display = 'flex'
    navMobile.classList.add('slide-in-top')
    img.src = "images/close.png"
    show = true
  } else {
    mobile.style.display = 'none'
    img.src = "images/menu.png"
    show = false
  }
})

menuList.addEventListener('click', () => {
  mobile.style.display = 'none'
  img.src = "images/menu.png"
  show = false
})