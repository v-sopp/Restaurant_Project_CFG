
//Show and hide food menu
function toggleFood(){
    //get the food menu, get the current value of the menus display property,
    //get the button
    var theFood = document.getElementById('foodmenu');
    var displaySetting = theFood.style.display;
    var foodButton = document.getElementById('foodButton');

//toggle the foo%d menu and button text depending on current state
//retrive food menu element, get current display value, check it
//if the menu is visible display value equals block so is changed to none
//if the menu display value is none it will change the value to block to make visible      
if(displaySetting == 'block'){
    theFood.style.display = 'none';
    foodButton.innerHTML = 'Show food';
}

else{
    theFood.style.display = 'block';
    foodButton.innerHTML = 'Hide food';
}
}

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