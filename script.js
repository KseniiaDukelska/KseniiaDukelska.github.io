let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let imgs = document.getElementsByClassName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < imgs.length; i++) {
    imgs[i].className = imgs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  imgs[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}
