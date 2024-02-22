import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { refs } from "./js/refs";
import { searchGallery } from "./js/pixabay-api";
import { galleresTemplate } from "./js/render-function";

refs.loadElem.style.display = 'none';

refs.formElem.addEventListener('submit', onFotmSubmit);

async function onFotmSubmit(ev) {
    ev.preventDefault();

    const query = ev.target.elements.query.value.trim();
    if (!query) {
        iziToast.error({
            title: 'Sorry',
            message: 'Please enter text to search for.',
            position: 'topRight',
        });
        return;
    }

    refs.loadElem.style.display = 'blok';

    const data = await searchGallery(query);

    refs.listElem.innerHTML = '';
        renderImages(data);
    
    refs.loadElem.style.display = 'none';
    
    ev.target.reset();
}

function renderImages(hitses) {
    const markup = galleresTemplate(hitses);
    refs.listElem.insertAdjacentHTML('beforeend', markup);
}