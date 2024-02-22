import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function galleryTemplate(image) {
    const { imageUrl, webformatURL, alt, likes, views, comments, downloads } =
        image;

    return `<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${imageUrl}">
    <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${alt}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${likes}</p>
    <p class="item-text">Views: ${views}</p>
    <p class="item-text">Comments: ${comments}</p>
    <p class="item-text">Downloads: ${downloads}</p>
    </div>
    </div>
    </li>`;
}

export function galleresTemplate(images) {
    return images.map(galleryTemplate).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
lightbox.refresh();
