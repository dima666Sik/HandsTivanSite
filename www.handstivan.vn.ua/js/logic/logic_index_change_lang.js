const select = document.querySelector('select');
const allLang = ['ua', 'ru'];
import { indexArr } from "../langs/index_lang.js";
import { headerArr } from "../langs/header_lang.js";
import { footerArr } from "../langs/footer_lang.js";

select.addEventListener('change', changeURLLanguage);

let arrNamePages = ["index", "rules", "contacts", "price_and_discounts", "trainings", "gift_certificates",
    "spa", "tai", "gavai", "fire", "stone", "anticellulite", "face", "for_two"];
let langArr = {};
let res = selectCurrentNamePage(select.baseURI);

if (res == arrNamePages[0]) {
    let langArrWithHeader = Object.assign({}, headerArr, indexArr);
    langArr = Object.assign({}, langArrWithHeader, footerArr);
}
else if (res == arrNamePages[1]) {
    let langArrWithHeader = Object.assign({}, headerArr, indexArr);
    langArr = Object.assign({}, langArrWithHeader, footerArr);
}

// retract to url with point lang
function changeURLLanguage() {
    let lang = select.value;
    localStorage.setItem("mySelectedValue", lang);
    location.reload();
}

function changeLanguage() {
    let slct_item = localStorage.getItem('mySelectedValue');

    if (!slct_item) {
        select.value = allLang[0];
        localStorage.setItem("mySelectedValue", lang);
        location.reload();
    }

    select.value = slct_item;

    let keys = Object.keys(langArr);

    for (let i = 0; i < keys.length; i++) {
        document.querySelector(`#lng__${keys[i]}`).innerHTML = langArr[keys[i]][slct_item];
    }
}

function selectCurrentNamePage(url) {
    // console.log(url)
    let flag = false;
    let namePageWithoutExtension = "";
    for (let i = url.length - 1; i != 0; i--) {
        if (url[i] == '/') break;
        if (flag) namePageWithoutExtension += url[i];
        if (url[i] == '.') flag = true;
    }

    return namePageWithoutExtension.split("").reverse().join("");
}

changeLanguage();