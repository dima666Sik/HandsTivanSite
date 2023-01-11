const select = document.querySelector('select');
const allLang = ['ua', 'en'];
import { langArr } from '../logic/index_lang.js';

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
        location.reload();
    }
    select.value = slct_item;
    document.querySelector('title').innerHTML = langArr['title'][slct_item];
}

changeLanguage();