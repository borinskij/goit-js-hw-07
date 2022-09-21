// import { galleryItems } from './gallery-items.js';
// // Change code below this line


// const difGaleryRef = document.querySelector('.gallery');
// const markup = creatImgCardMarkup(galleryItems);

// difGaleryRef.insertAdjacentHTML('beforeend', markup)

// function creatImgCardMarkup(galleryItems) {
//     return galleryItems.map(({ original, preview, description }) => {
//         return `<div class="gallery__item">
//                 <a class="gallery__link" href="${original}">
//                 <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//                 </a>
//                 </div>
//         `
//     }).join('');
// }

// difGaleryRef.addEventListener('click', onSrcModals);

// function onSrcModals(event) {
//     event.preventDefault();
//     const src = event.target.dataset.source;
//     const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`);
//     instance.show();
    
//     const visible = basicLightbox.visible();
//     if (visible) { 
//         window.addEventListener('keydown', onEscKeyPress);
//             function onEscKeyPress(event){
//         // console.log(event.code)
//             if (event.code === 'Escape') {
//                 instance.close()
//                 window.removeEventListener('keydown', onEscKeyPress)
//             }
//         }
 
//     }
// }


// const data = fetch('https://swapi.dev/api/people').then(response => response.json()).then(data=> console.log(data))
// console.log(datasdasa)