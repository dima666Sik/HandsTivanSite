const getLogo = document.querySelector(".logo__container");
const getSelectLang = document.querySelector(".select");
const getHamb = document.querySelector(".hamb");
getHamb.addEventListener("click", changeSizeLogo);
let flagClick = true;

function changeSizeLogo() {
    if (flagClick) { 
        getLogo.style.maxWidth = "50%";
        getSelectLang.style.display = 'none';
        flagClick = false; 
    }
    else { 
        getLogo.style.maxWidth = "";
        getSelectLang.style.display = "";
        flagClick = true; 
    }
}