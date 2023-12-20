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
        addlinkAnimation()
        openMenuList()
        
	} else {

		closeMenuList()
	}
}

const openMenuList = () => {
    navList.setAttribute('aria-expanded', 'true')
    burgerIcon.setAttribute('src', './img/icon-close.svg')
    body.setAttribute('aria-hidden', 'true')
}

const closeMenuList = () => {
	navList.setAttribute('aria-expanded', 'false')
	burgerIcon.setAttribute('src', './img/icon-hamburger.svg')
	body.setAttribute('aria-hidden', 'false')

    removelinkAnimation()
}

const addlinkAnimation = () => {
    console.log('add anim');
	allNavItems.forEach(navItem => {
		navItem.classList.add('link-animation')
	})
}

const removelinkAnimation = () => {
    console.log('remove anim');
	allNavItems.forEach(navItem => {
		navItem.classList.remove('link-animation')
	})
}

const showYear = () => {
	data = new Date()
	year = data.getFullYear()
	spanYear.textContent = year
}

showYear()

burgerBtn.addEventListener('click', showMenuList)

allNavItems.forEach(navItem => {
	navItem.addEventListener('click', closeMenuList)
})
