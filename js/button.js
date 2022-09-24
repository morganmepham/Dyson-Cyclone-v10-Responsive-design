const menuButton = document.querySelector('.nav-exit-button-container')
let menuOpen = false;
const mobileNav = document.querySelector('.mobile-nav')

menuButton.addEventListener('click', () => {
    if (menuOpen === false){
        menuOpen = true;
        menuButton.classList.add('open')
        mobileNav.classList.add('mobile-nav-active')
    }else{
        menuOpen = false
        menuButton.classList.remove('open')
        setTimeout(() => {
            mobileNav.classList.remove('mobile-nav-active')
        }, 300)

    }
})
