const select = document.querySelector('select');
const allLang = ['ua', 'ru'];
import { langArr } from "../langs/index_lang.js";

select.addEventListener('change', changeURLLanguage);

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
        document.querySelector(`.lng__${keys[i]}`).innerHTML = langArr[keys[i]][slct_item];
    }
}

changeLanguage();