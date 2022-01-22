var gallery = document.querySelector('main');
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://images7.memedroid.com/images/UPLOADED826/6159f77f297b8.jpeg',
  'https://64.media.tumblr.com/ca8bef262659bf015fd22d8edc32385c/e3a597e310da6ed1-85/s1280x1920/4876b3b46f4417b91fe19918eb817ca04a6f84f8.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnVBq0ISItM5ZlwFK5qduMHUVSWNU6YKbSWxWO6IJqgeuoSzWn_YaYy8FyzLxfOhq84k&usqp=CAU'
];
// var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', clickButton);
function clickButton() {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
}

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
