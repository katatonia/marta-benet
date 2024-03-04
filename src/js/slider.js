const slider = () => {
    const sliderBtns = document.querySelectorAll('.slider__btn');
    const sliderList = document.querySelector('.slider__list ');

    sliderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.classList === 'slider__btn_prev' ? -1 : 1;
            const scrollAmount = sliderList.clientWidth * direction;
            sliderList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
};

slider();
