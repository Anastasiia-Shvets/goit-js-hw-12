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

    if (!query) {
        showError('Please enter text to search for.');
        return;
    }
    showLoader();

    try {
        const data = await searchGallery(query, page);
        console.log(data);
        if (data.length === 0) {
            showError(
                'Sorry, there are no images matching your search query. Please try again!'
            );
            hideLoader();
            return;
        }
        maxPage = Math.ceil(data.totalHits / 15);
        refs.listElem.innerHTML = '';
        renderImages(data);
    } catch (error) {
        showError(error.message);
        maxPage = 0;
        refs.listElem.innerHTML = '';
    }
    hideLoader();
    checkBtnVisibleStatus();
    ev.target.reset();
}

async function onLoadMoreClick() {
    page += 1;
    showLoader();
    const data = await searchGallery(query, page);
    renderImages(data);
    hideLoader();
    checkBtnVisibleStatus();
}

function renderImages(hits) {
    const markup = galleresTemplate(hits);
    refs.listElem.insertAdjacentHTML('beforeend', markup);
}

function showLoadBtn() {
    refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadBtn() {
    refs.btnLoadMore.classList.add('hidden');
}

function checkBtnVisibleStatus() {
    if (page >= maxPage) {
        hideLoadBtn();
        showError("We're sorry, but you've reached the end of search results.");
    } else {
        showLoadBtn();
    }
}

function showLoader() {
    refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
    refs.loadElem.classList.add('hidden');
}

function showError(msg) {
    iziToast.error({
        title: 'Error',
        message: msg,
        position: 'topRight',
    });
}

