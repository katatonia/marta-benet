const humburger = document.querySelector('.nav__humburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const openNav = () => {
    humburger.addEventListener('click', () => {
        nav.classList.toggle('nav_opened');
        humburger.classList.toggle('nav__humburger_active');
    });
};

const onScrollClosing = () => {
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('nav_opened') && window.scrollY >= header.clientHeight) {
            nav.classList.toggle('nav_opened', false);
            humburger.classList.toggle('nav__humburger_active', false);
        }
    });
};

openNav();
onScrollClosing();
