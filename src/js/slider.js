const slider = () => {
    const TABLET_WIDTH = 1023;
    const MOBILE_WIDTH = 767;
    const DESKTOP_IMG_COUNT = 3;
    const TABLET_IMG_COUNT = 2;
    const sliderBtns = document.querySelectorAll('.slider__btn');
    const sliderList = document.querySelector('.slider__list');
    const sliderItem = document.querySelector('.slider__item');

    /**
     * Index of left picture, which shown now
     *
     * @type {number}
     */
    let currentImgIndex = 0;

    /**
     * Last scroll position
     *
     * @type {number}
     */
    let lastPosition = 0;

    /**
     * Receiving distance between pictures, because on mobile and desktop versions this distance is different
     *
     * @returns {number}
     */
    const getGap = () => {
        return parseFloat(window.getComputedStyle(sliderList).gap);
    }

    /**
     * Recieving picture size, because on mobile and desktop versions this size is different
     *
     * @returns {number}
     */
    const getImgWidth = () => sliderItem.clientWidth;

    /**
     * Depending on screen size to 'currentImgIndex' written different values
     * This function calculates this value depending on a current screen size
     *
     * @returns {number}
     */
    const getLastImgIndex = () => {
        const windowWidth = window.innerWidth;
        const lastImgIndex = document.querySelectorAll('.slider__item').length;

        if (windowWidth >= TABLET_WIDTH) {
            return lastImgIndex - DESKTOP_IMG_COUNT;
        } else if (windowWidth >= MOBILE_WIDTH) {
            return lastImgIndex - TABLET_IMG_COUNT;
        } else {
            return lastImgIndex;
        }
    }

    /**
     * This function calculates on which position slider should move based on 'currentImgIndex' and screen size. Then execute scroll.
     */
    const scrollToCurrentImg = () => {
        const imgOffset = currentImgIndex * getImgWidth();
        const gapOffset = currentImgIndex * getGap();
        const position =  imgOffset + gapOffset;

        if (position === lastPosition) {
            return;
        }

        lastPosition = position;
        sliderList.scrollTo({ left: position, behavior: 'smooth' });
    }

    window.addEventListener('resize', () => {
        const lastImgIndex = getLastImgIndex();
        if (lastImgIndex < currentImgIndex) {
            currentImgIndex = lastImgIndex;
        }

        scrollToCurrentImg();
    });

    sliderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.id === 'slider__btn_prev' ? -1 : 1;

            if (direction > 0 && currentImgIndex >= getLastImgIndex()) {
                return;
            } else if (direction < 0 && currentImgIndex <= 0) {
                return;
            }

            currentImgIndex += direction;

            scrollToCurrentImg();
        });
    });
};

slider();

