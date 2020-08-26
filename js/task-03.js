const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createPhotoGallery = (image) => {
  const galleryListRef = document.createElement("li");
  galleryListRef.classList.add("gallery-main");

  const galleryImageRef = document.createElement("img");
  galleryImageRef.classList.add("gallery__image");
  galleryImageRef.src = image.url;
  galleryImageRef.alt = image.alt;
  galleryImageRef.width = 420;
  galleryListRef.appendChild(galleryImageRef);

  return galleryListRef;
};

const galleryCards = images.map((image) => createPhotoGallery(image));

const galleryRef = document.querySelector("#gallery");
galleryRef.append(...galleryCards);
