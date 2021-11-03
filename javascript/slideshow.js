var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "flex";
  
}

// ----- Article hypno

var slideIndexHypno = 1;
showSlidesHypno(slideIndexHypno);

// Next/previous controls
function plusSlidesHypno(n) {
  showSlidesHypno(slideIndexHypno += n);
}

// Thumbnail image controls
function currentSlideHypno(n) {
  showSlidesHypno(slideIndexHypno = n);
}

function showSlidesHypno(n) {
  var i;
  var slidesHypno = document.getElementsByClassName("mySlides-hypno");
  
  if (n > slidesHypno.length) {slideIndexHypno = 1}
  if (n < 1) {slideIndexHypno = slidesHypno.length}
  for (i = 0; i < slidesHypno.length; i++) {
      slidesHypno[i].style.display = "none";
  }

  slidesHypno[slideIndexHypno-1].style.display = "flex";

}