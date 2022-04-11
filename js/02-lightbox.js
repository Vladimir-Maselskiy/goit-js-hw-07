import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector(".gallery");

const createImageGrid = () => {
	const markup = galleryItems
		.map((item) => {
			const { preview: smallImage, original: largeImage, description } = item;
			return `
            <li>
                <a onclick="return false" class="gallery__link" href="${largeImage}">
                    <img
                    class="gallery__image"
                    src="${smallImage}"
                    alt="${description}"
                    captionSelector = "1000"

                    />
                </a>
            </li>
                    `;
		})
		.join("");
	return markup;
};

galleryDivRef.innerHTML = createImageGrid();
var gallery = new SimpleLightbox(".gallery a");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;
