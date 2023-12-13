
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-img");
    const captions = document.querySelectorAll('[id^="caption"]');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    captions[slideIndex - 1].style.display = "block";
}
