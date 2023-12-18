const burgerBtn = document.querySelector('.nav__btn')
const burgerIcon = document.querySelector('.nav__burger-icon')
const navList = document.querySelector('.nav__list')
const allNavItems = document.querySelectorAll('.nav__item--mobile')
const body = document.querySelector('#body')
const spanYear = document.querySelector('.footer__year')
let year


const showMenuList = () => {
    
    isNavActive = navList.getAttribute('aria-expanded')
    
    if (isNavActive == 'false') {
        navList.setAttribute('aria-expanded', 'true')
        burgerIcon.setAttribute('src','./img/icon-close.svg')
        body.setAttribute('aria-hidden', 'true')
    } else {
        navList.setAttribute('aria-expanded', 'false')
        burgerIcon.setAttribute('src','./img/icon-hamburger.svg')
        body.setAttribute('aria-hidden', 'false')
    }
    linkAnimation()
    
}


const linkAnimation = () => {

	allNavItems.forEach((navItem, index) => {
        navItem.classList.toggle('link-animation')
    
    })
}

const showYear = () => {
  data = new Date
  year = data.getFullYear()
  spanYear.textContent = year;

}

showYear()
burgerBtn.addEventListener('click', showMenuList)

allNavItems.forEach(navItem => {
	navItem.addEventListener('click', showMenuList)
})

