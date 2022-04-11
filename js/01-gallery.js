import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryDivRef = document.querySelector(".gallery");

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
	if (event.target.tagName !== "IMG") return;

	const instance = basicLightbox.create(
		`
    		<div class="modal">
        		<img 
            		src="${event.target.dataset.source}"   
            		alt="${event.target.alt}" 
        		/>
    		</div>
    		`,
		{
			onShow: () => {
				window.addEventListener("keydown", onEscape);
			},
			onClose: () => {
				window.removeEventListener("keydown", onEscape);
			},
		}
	);

	instance.show();

	const modalRef = document.querySelector(".modal");

	modalRef.addEventListener("click", instance.close);

	function onEscape(event) {
		if (event.code === "Escape") {
			instance.close();
		}
	}
});
