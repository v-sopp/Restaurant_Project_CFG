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