
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

// let today = weekday[d.getDay()];
// console.log(today);


var answer= document.getElementById('answer');
const d = new Date();
var day = d.getDay();
let hrs = d.getHours();



answer.addEventListener('click', () => {
    if(day <  5 && day > 0 && hrs < 16 && hrs >= 8 ){
        answer.innerHTML = 'We are open. Take a break from work and come get some eggs!';
    } else if(day >= 5 && day <= 6 && hrs < 22 && hrs >= 8 ) {
        answer.innerHTML = 'We are open. Fresh eggs at the ready until 10pm!';
    } else if(day == 7 && hrs < 22 && hrs >= 10) {
        answer.innerHTML = 'We are open. Come get some sunday brunch!';
    } else {
        answer.innerHTML = 'Sorry, we are closed at the moment. We are open 7 days a week and will back at our stations cooking up a storm soon. Check times above.'; 
        console.log(hrs);
    }
}
)

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
