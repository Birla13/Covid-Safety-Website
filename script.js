let images = ['images/image 1.png', 'images/2.png', 'images/1.png', 'images/3.png', 'images/4.png'];
let image = document.querySelector('.image-1');
setInterval(function() {
    let rand = Math.floor(Math.random() * images.length);
    image.src = images[rand];
}, 1500);