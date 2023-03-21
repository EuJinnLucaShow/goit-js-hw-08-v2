// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join('')
);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.5,
  captionDelay: 250,
  captionsData: 'alt',
  fadeSpeed: 250,
  rtl: true,
});
