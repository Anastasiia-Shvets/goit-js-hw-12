import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { refs } from "./js/refs";
import { searchGallery } from "./js/pixabay-api";
import { galleresTemplate } from "./js/render-function";

let query;
let page;
let maxPage;

refs.formElem.addEventListener('submit', onFotmSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFotmSubmit(ev) {
    ev.preventDefault();

    query = ev.target.elements.query.value.trim();
    page = 1;
    showLoader();
    if (!query) {
        iziToast.error({
            title: 'Sorry',
            message: 'Please enter text to search for.',
            position: 'topRight',
        });
        return;
    }

    refs.loadElem.style.display = 'blok';

    const data = await searchGallery(query, page);
    console.log(data);
    maxPage = Math.ceil().totalHits / 15;

    refs.listElem.innerHTML = '';
    renderImages(data);
    hideLoader();
    checkBtnVisibleStatus();
    
    refs.loadElem.style.display = 'none';
    
    ev.target.reset();
}

async function onLoadMoreClick() {
    page += 1;
    const data = await searchGallery(query, page);
    renderImages(data);
    checkBtnVisibleStatus();
}

function renderImages(hitses) {
    const markup = galleresTemplate(hitses);
    refs.listElem.insertAdjacentHTML('beforeend', markup);
}

function showLoadBtn() {
    refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadBtn() {
    refs.btnLoadMore.classList.add('hidden');
}

function showLoader() {

}

function hideLoader(){}

function checkBtnVisibleStatus() {
    if (page >= maxPage) {
        hideLoadBtn();
    } else {
        showLoadBtn();
    }
}