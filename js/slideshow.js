//Слайдшоу//

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}

function resizeSlideShow() {
  let i;
  let allPostImages = document.querySelectorAll('.post__image');
  let allSlides = document.querySelectorAll('.slide');
  if (document.getElementById('slideshow').classList.contains('fullscreen__slideshow')) {
    document.getElementById('slideshow').classList.remove('fullscreen__slideshow');
    document.getElementById('dots').classList.remove('fullscreen__dots');
    document.getElementById('callback-button').style.visibility = 'visible';
    document.getElementById('callback-button').style.opacity = '1';
    allPostImages.forEach(postImage => {
      postImage.style.borderRadius = '1rem';
    });
    allSlides.forEach(slide => {
      slide.classList.add('fade');
    });
  } else {
    document.getElementById('slideshow').classList.add('fullscreen__slideshow');
    document.getElementById('dots').classList.add('fullscreen__dots');
    document.getElementById('callback-button').style.visibility = 'hidden';
    document.getElementById('callback-button').style.opacity = '0';
    allPostImages.forEach(postImage => {
      postImage.style.borderRadius = '0';
    });
    allSlides.forEach(slide => {
      slide.classList.remove('fade');
    });
  }
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37) {
    document.getElementById('prev').click();
  }
  if (event.keyCode == 39) {
    document.getElementById('next').click();
  }
});
