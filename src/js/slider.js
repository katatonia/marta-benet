const slider = () => {
    const sliderBtns = document.querySelectorAll('.slider__btn');
    const sliderList = document.querySelector('.slider__list');
    const sliderItem = document.querySelector('.slider__item');

    sliderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.id === 'slider__btn_prev' ? -1 : 1;
            const scrollAmount = sliderList.clientWidth * direction;
            console.log(scrollAmount);
            sliderList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
};

slider();
