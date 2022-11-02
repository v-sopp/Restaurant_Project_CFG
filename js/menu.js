//carousel
const carousel = document.querySelector('.carousel');
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".carouselwrapper i");

let isDragStart = false, prevPageX, prevScrollleft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width


//hide arrow icon if no image remaining to scroll
const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollleft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollleft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //calling showHideIcons after 60ms
    });
});

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollleft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollleft - positionDiff;
}

const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);

//Newsletter
document.addEventListener("DOMContentLoaded", function() {

    // Newsletter sign up button - checks if input box contains an @ //
    footer_sign_up_button = document.getElementById("footer_button");
    console.log(footer_sign_up_button);
    
    email_input = document.getElementById("email_footer");
    console.log(email_input);
    
    footer_sign_up_button.addEventListener('click', 
        function(event) {
            console.log(event);
            console.log(event.target);
            if (email_input.value.includes("@")) {
                alert("You are now subscribed to the Eggztra newsletter. Please keep a look out for our weekly emails for our latest news and offers!");  
            } else {
                alert("Invalid email address entered. Please try again.");
            }
        });
   
    }
    )

//Menu Toggle
//Food Button - declare button and Food
var foodButton = document.getElementById('foodButton');
var theFood = document.getElementById('foodmenu');

//change display and inner HTML on click

foodButton.addEventListener('click', () => {
    if (theFood.style.display === 'block') {
      theFood.style.display = 'none';
      foodButton.innerHTML = 'Food';
      foodButton.style.background = 'white';
      foodButton.style.color = 'black';
    } else {
      theFood.style.display = 'block';
      foodButton.innerHTML = 'Hide Food';
      foodButton.style.background = '#ffc107';
      foodButton.style.color = 'white';
    }
})

//Food Button - declare button and drink
var drinkButton = document.getElementById('drinkButton');
var theDrink = document.getElementById('drinkmenu');

//change display and inner HTML on click

drinkButton.addEventListener('click', () => {
    if (theDrink.style.display === 'block') {
      theDrink.style.display = 'none';
      drinkButton.innerHTML = 'Drinks';
      drinkButton.style.background = 'white';
      drinkButton.style.color = 'black';
    } else {
      theDrink.style.display = 'block';
      drinkButton.innerHTML = 'Hide Drinks';
      drinkButton.style.background = '#ffc107';
      drinkButton.style.color = 'white';
    }
})