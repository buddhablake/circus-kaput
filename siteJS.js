let navIMG = document.getElementsByClassName('ck-star-icon');


function changeStarColorYellow(element) {
    $(element).children("img").attr('src', "assets/images/ck-star-icon-yellow.png")
}


function changeStarColorBlue(element) {
    $(element).children("img").attr('src', "assets/images/ck-star-icon-blue.png")
}



let cardsBackContainer = document.querySelector('.cards-back-container')


let cardThree = document.getElementById("card-3");

let cardTwo = document.getElementById("card-2");

let cardOne = document.getElementById("card-1");


function animateCards(){
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if(supportsTouch === true){
        cardsBackContainer.ontouchstart = slideCards
        
        
        
        function slideCards() {
            cardThree.style.left = "150px";
            cardThree.style.transform = "rotate(15deg)";
            cardTwo.style.left = "75px";
            cardTwo.style.top = "-175px";
            cardTwo.style.transform = "rotate(0deg)"
            cardsBackContainer.ontouchstart = slideCardsBack
        
        }
        
        function slideCardsBack() {
            cardThree.style.left = "0";
            cardThree.style.transform = "rotate(-15deg)";
            cardTwo.style.left = "0";
            cardTwo.style.top = "-150px"
            cardTwo.style.transform = "rotate(-15deg)"
            cardsBackContainer.ontouchstart = slideCards
        }
    } else{

        cardsBackContainer.onmouseover = slideCards;
        cardsBackContainer.onmouseleave = slideCardsBack;

        function slideCards() {
            cardThree.style.left = "150px";
            cardThree.style.transform = "rotate(15deg)";
            cardTwo.style.left = "75px";
            cardTwo.style.top = "-175px";
            cardTwo.style.transform = "rotate(0deg)"
            // cardsContainer.ontouchstart = slideCardsBack
        
        }
        
        function slideCardsBack() {
            cardThree.style.left = "0";
            cardThree.style.transform = "rotate(-15deg)";
            cardTwo.style.left = "0";
            cardTwo.style.top = "-150px"
            cardTwo.style.transform = "rotate(-15deg)"
            // cardsContainer.ontouchstart = slideCards
        }
    }
}



animateCards();



//  var slideIndex = 1;
//  showSlides(slideIndex);

//  // Next/previous controls
//  function plusSlides(n) {
//    showSlides(slideIndex += n);
//  }

//  // Thumbnail image controls
//  function currentSlide(n) {
//    showSlides(slideIndex = n);
//  }

//  function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("slides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {slideIndex = 1}
//    if (n < 1) {slideIndex = slides.length}
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += " active";
//  }

