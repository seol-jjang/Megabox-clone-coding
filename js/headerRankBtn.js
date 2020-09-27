const rankBtns = document.querySelectorAll(".rank-btn button");
const rateArea = document.querySelector(".rank__rate");
const audienceArea = document.querySelector(".rank__audience");

const ON_CLASS = "on";
const VISIBLE_CLASS = "visible";

function handleRankBtn(e) {
    const currentClass = e.target;
    const hasClass = currentClass.classList.contains(ON_CLASS);
    if(currentClass.classList.contains("rate-btn")){
        currentClass.nextElementSibling.classList.remove(ON_CLASS);
        audienceArea.classList.remove(VISIBLE_CLASS);
        if(!hasClass) {
            currentClass.classList.add(ON_CLASS);
            rateArea.classList.add(VISIBLE_CLASS);
        }
    } else {
        currentClass.previousElementSibling.classList.remove(ON_CLASS);
        rateArea.classList.remove(VISIBLE_CLASS);
        if(!hasClass) {
            currentClass.classList.add(ON_CLASS);
            audienceArea.classList.add(VISIBLE_CLASS);
        }
    }
}

Array.from(rankBtns).forEach(btn => {
    btn.addEventListener("click", handleRankBtn);
})