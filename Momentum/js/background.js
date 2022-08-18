const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const ranImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${ranImg}`;

document.body.appendChild(bgImg);