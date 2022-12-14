import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const markup = creatImgCardMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup)

function creatImgCardMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
                <a class="gallery__item"
                href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}"
                ></a>
                
        `
    }).join('');
}


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt'});










