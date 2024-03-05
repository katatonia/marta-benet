const humburger = document.querySelector('.nav__humburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const openNav = () => {

    humburger.addEventListener('click', () => {
        if (nav.classList.contains('nav_opened')) {
            nav.classList.remove('nav_opened');
            humburger.classList.remove('nav__humburger_active');
        } else {
            nav.classList.add('nav_opened');
            humburger.classList.add('nav__humburger_active');
        }
    });
};

const onScrollCloses = () => {

    window.addEventListener('scroll', () => {
        if (nav.classList.contains('nav_opened')) {
            if (window.scrollY >= header.clientHeight) {
                nav.classList.remove('nav_opened');
                humburger.classList.remove('nav__humburger_active');
            }
        }
    });
};

openNav();
onScrollCloses();
