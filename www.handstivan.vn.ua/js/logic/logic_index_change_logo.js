const getLogo = document.querySelector(".logo__container");
const getHamb = document.querySelector(".hamb");
getHamb.addEventListener("click", changeSizeLogo);
let flagClick = true;

function changeSizeLogo() {
    if (flagClick) { getLogo.style.maxWidth = "50%"; flagClick = false; }
    else { getLogo.style.maxWidth = ""; flagClick = true; }
}