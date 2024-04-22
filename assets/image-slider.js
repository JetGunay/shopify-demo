document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slider-item');
  var dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots');

  var imageSliders = document.querySelector('.image-sliders');
  var firstSliderItem = document.querySelector('.slider-item');
  var timerSeconds = parseInt(imageSliders.getAttribute('data-slider-timer'), 10);
  var timerDuration = timerSeconds * 1000;
  var autoSlide = imageSliders.getAttribute('data-auto-slide') === 'true';

  imageSliders.style.visibility = 'hidden';

  setTimeout(function() {
    imageSliders.style.visibility = 'visible';
  }, 100);

  slides.forEach((slide, index) => {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', function() {
      showSlides(index, autoSlide); 
    });
    dotsContainer.appendChild(dot);
  });

  imageSliders.insertBefore(dotsContainer, firstSliderItem);

  showSlides(0, autoSlide);

  function showSlides(currentIndex, continueAutoSlide) {
    var slides = document.querySelectorAll('.slider-item');
    var dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    slides[currentIndex].style.display = 'flex';
    dots[currentIndex].classList.add('active');

    if (continueAutoSlide) {
      setTimeout(function() {
        showSlides((currentIndex + 1) % slides.length, continueAutoSlide);
      }, timerDuration);
    }
  }
});