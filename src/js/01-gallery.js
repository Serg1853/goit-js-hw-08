// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryCardMarkup = createGallery(galleryItems);
galleryContainer.style.listStyle = 'none';

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}"
    /></a>
    </li>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});