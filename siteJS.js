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


// Round Performer Slider

function nextSlide() {
    var q = function(sel) { return document.querySelector(sel); }
    q(".slides").appendChild(q(".slides img:first-child"));
}
setInterval(nextSlide, 3500)



//Responsive menu


const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    console.log("poop")
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3}s`;
      }
    });
  });
};

navSlide();
