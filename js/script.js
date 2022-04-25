//burger

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const closeMenu = document.querySelector('.close-menu')

function showMenu () {
    burger.addEventListener('click', () => {
        menu.classList.add('show-menu')
    })
}
showMenu ()

function removeMenu () {
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('show-menu')
    })
}
removeMenu ()




// search 

const btnOpenSearch = document.querySelector('.open-search-input');
const formSearch = document.querySelector('.header__form-search');
const formSearchInput = document.querySelector('.search__input');
const btnOpenMobileSearch = document.querySelectorAll('.header__mobile-search-icon')

function showSearch () {
    window.addEventListener('click', (e) => {
        btnOpenMobileSearch.forEach((item) => {
            if (e.target === btnOpenSearch || e.target === formSearchInput || e.target === item) {
                formSearch.classList.add('show')
                btnOpenSearch.classList.add('color-orange')
            }
            else {
                formSearch.classList.remove('show')
                btnOpenSearch.classList.remove('color-orange')
            }
        })
    })
}
showSearch ()


//change mobile content 

const itemAboutProduction = document.querySelector('.about-production__image_reverse-item')
const afterAboutProduction = document.querySelector('.about-production__image_reverse')

function changeContentMobile () {
    if (window.innerWidth <= 768) {
        itemAboutProduction.after(afterAboutProduction)
    }
}
changeContentMobile ()


// change footer link in mobile

const footerMobileLink = document.querySelectorAll('.footer__mobile-item')
const footerMobileChange = document.querySelector('.footer__mobile-items')

function changeFooterLinks () {
    footerMobileLink.forEach((item) => {
        if (window.innerWidth <= 991) {
            footerMobileChange.append(item)
        }
    })
}

changeFooterLinks ()

//home news slider mobile

function newsSliderMobile () {
    if (window.innerWidth <= 768) {
        var swiper = new Swiper(".home-news__slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
    if (window.innerWidth <= 530) {
        var swiper = new Swiper(".home-news__slider", {
            slidesPerView: 1.5,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
}
newsSliderMobile ()