const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide-item:first-child");

function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            currentSlide.style.display = "none";
            nextSlide.style.display = "flex";
            const noneDisplay = setTimeout(() => {
                nextSlide.classList.add(SHOWING_CLASS);
            }, 100);
            noneDisplay();
        } else {
            currentSlide.style.display = "none";
            firstSlide.style.display = "flex";
            const noneDisplay = setTimeout(() => {
                firstSlide.classList.add(SHOWING_CLASS);
            }, 100);
            noneDisplay();
        }
    } else {
        firstSlide.style.display = "flex";
        const noneDisplay = setTimeout(() => {
            firstSlide.classList.add(SHOWING_CLASS);
        }, 100);
        noneDisplay();
    }
}
setInterval(slide, 4000);