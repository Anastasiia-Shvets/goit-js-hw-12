import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import { refs } from "./js/refs";
import { searchGallery } from "./js/pixabay-api";
import { hitsTemplate } from "./js/render-function";


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
        if (data.totalHits === 0) {
            showError(
                'Sorry, there are no images matching your search query. Please try again!'
            );
            return;
        }
        maxPage = Math.ceil(data.totalHits / 15);
        refs.listElem.innerHTML = '';
        renderImages(data.hits);
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
    renderImages(data.hits);
    hideLoader();
    checkBtnVisibleStatus();
    const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

function renderImages(hits) {
    const markupGallery = hitsTemplate(hits);
    refs.listElem.insertAdjacentHTML('beforeend', markupGallery);

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
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


