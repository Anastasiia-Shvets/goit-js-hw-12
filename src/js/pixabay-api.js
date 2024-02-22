import axios from "axios";

export async function searchGallery(query) {
    const API_KEY = '42280765-41e7252ac679e023dc9db9847';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const url = `${BASE_URL}${END_POINT}`;

    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 15,
    };

    try {
        const response = await axios.get(url, { params });

        const photosArray = response.data.hits.map(photo => ({
            id: photo.id,
            imageUrl: photo.largeImageURL,
            webformatURL: photo.webformatURL,
            alt: photo.tags,
            likes: photo.likes,
            views: photo.views,
            comments: photo.comments,
            downloads: photo.downloads,
        }));

        return photosArray;
    } catch (error) {
        console.error('There has been a problem with your axios request:', error);
        throw error;
    }
}