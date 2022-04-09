import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let currentImageLink;

const galleryDivRef = document.querySelector(".gallery");

const getCurrentImageLink = (event) => {
	currentImageLink = event.target;
};

galleryDivRef.addEventListener("click", getCurrentImageLink);

const createImageGrid = () => {
	const markup = galleryItems
		.map((item) => {
			const { preview: smallImage, original: largeImage, description } = item;
			return `
    <div class="gallery__item">
        <a onclick="return false" class="gallery__link" href="${largeImage}">
        <img
            class="gallery__image"
            src="${smallImage}"
            data-source="${largeImage}"
        alt="${description}"
        />
        </a>
    </div>
    `;
		})
		.join("");
	return markup;
};

galleryDivRef.innerHTML = createImageGrid();

galleryDivRef.addEventListener("click", (event) => {
	const instance = basicLightbox.create(`
    <div class="modal">
        <img 
            src="${event.target.dataset.source}"   
            alt="${event.target.alt}" 
        />
    </div>
    `);
	const showModal = () => {
		instance.show();
	};
	const closeModal = () => {
		instance.close();
	};
	showModal();

	const onEscape = (event) => {
		console.log(event.code);
		if (event.code === "Escape") {
			closeModal();
			window.removeEventListener("keydown", onEscape);
		}
	};

	const modalRef = document.querySelector(".modal");
	modalRef.addEventListener("click", closeModal);

	window.addEventListener("keydown", onEscape);
});
