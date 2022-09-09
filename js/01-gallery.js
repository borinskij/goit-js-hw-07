import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const difGaleryRef = document.querySelector('.gallery');
// console.log(difGaleryRef)
const markup = creatImgCardMarkup(galleryItems);

difGaleryRef.insertAdjacentHTML('beforeend', markup)


// console.log(creatImgCardMarkup(galleryItems));

function creatImgCardMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
                </div>
        `
    }).join('');
}

difGaleryRef.addEventListener('click', onSrcModals);

function onSrcModals(event) {
    event.preventDefault();
    const src = event.target.dataset.source
    console.log(src)
 const instance = basicLightbox.create(`
     <img src="${src}" width="800" height="600">
 `)
 
 instance.show()
}
console.log()
//Подключение библиотеки

