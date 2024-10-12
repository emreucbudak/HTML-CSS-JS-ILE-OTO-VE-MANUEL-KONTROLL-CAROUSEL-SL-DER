const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const imageWidth = images[0].clientWidth+305;
const autoplayInterval = 10000000;

const showImage = (index) => {
  carousel.style.transform = `translateX(-${index * imageWidth}px)`;
};

const autoplay = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

const intervalId = setInterval(autoplay, autoplayInterval);

prevButton.addEventListener('click', () => {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  intervalId = setInterval(autoplay, autoplayInterval);
});

nextButton.addEventListener('click', () => {
  clearInterval(intervalId);
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  intervalId = setInterval(autoplay, autoplayInterval);
});

// Yeni eklenen kısım: Carousel container'ı tüm sayfaya yaymak için
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.style.width = '100vw';
carouselContainer.style.height = '60vh';

showImage(currentIndex);
