const btnSitemap = document.querySelector(".btn-open-sitemap");
const btnSearch = document.querySelector(".btn-search");
const openBtn = document.querySelectorAll(".menu__icon a");
const layerSitemap = document.querySelector(".layer-sitemap");
const layerSearch = document.querySelector(".layer-header-search");
const OPEN_CLASS = "on"

function handleOpenBtn(e) {
    const currentClass = e.target;
    console.log(e);
    const hasClass = currentClass.classList.contains(OPEN_CLASS);
    currentClass.classList.toggle(OPEN_CLASS);
    if(currentClass.classList.contains("btn-open-sitemap")){
        currentClass.nextElementSibling.classList.remove(OPEN_CLASS);
        layerSearch.style.display = "none";
        if(!hasClass) {
            layerSitemap.style.display = "block";
        } else {
            layerSitemap.style.display = "none";
        }
    } else {
        currentClass.previousElementSibling.classList.remove(OPEN_CLASS);
        layerSitemap.style.display = "none";
        if(!hasClass) {
            layerSearch.style.display = "block";
        } else {
            layerSearch.style.display = "none";
        }
    }
}

Array.from(openBtn).forEach(btn => {
    btn.addEventListener("click", handleOpenBtn);
})