// Footer newsletter sign up //

document.addEventListener("DOMContentLoaded", function() {

    // Changing size of logo when mouse is over it //
    logo_size = document.getElementById("logo_main");
    console.log(logo_size);
    
    logo_size.addEventListener('mouseenter',
        function(event) {
            console.log(event);
            console.log(event.target);
            logo_size.style.width = "75%";
            logo_size.style.height = auto;
        });
    
    logo_size.addEventListener('mouseleave',
        function(event) {
            console.log(event);
            console.log(event.target);
            logo_size.style.width = "50%";
            logo_size.style.height = auto;
        }); 

    // Changing colour and size of headings when mouse is over them //
    new_menu_additions_text = document.getElementById("new_menu_text");
    console.log(new_menu_additions_text);
    
    new_menu_additions_text.addEventListener('mouseenter',
        function(event) {
            console.log(event);
            console.log(event.target);
            new_menu_additions_text.style.color = "orange";
            new_menu_additions_text.style.fontWeight = "bold";
        });
    
    new_menu_additions_text.addEventListener('mouseleave',
        function(event) {
            console.log(event);
            console.log(event.target);
            new_menu_additions_text.style.color = "white";
            new_menu_additions_text.style.fontWeight = "normal";
        }); 


    newsletter_text = document.getElementById("newsletter");
    console.log(newsletter_text);
        
    newsletter_text.addEventListener('mouseenter',
        function(event) {
            console.log(event);
            console.log(event.target);
            newsletter_text.style.color = "orange";
            newsletter_text.style.fontWeight = "bold";
        });
        
    newsletter_text.addEventListener('mouseleave',
        function(event) {
            console.log(event);
            console.log(event.target);
            newsletter_text.style.color = "white";
            newsletter_text.style.fontWeight = "normal";
        }); 

    // Newsletter sign up button for main section on homepage - checks if input box contains an @, and the name boxes contain at least 1 character each //
    main_sign_up_button = document.getElementById("sign_up_button");
    console.log(main_sign_up_button);

    main_email_input = document.getElementById("email_input");
    console.log(main_email_input);

    first_name_input = document.getElementById("first_name_input");
    console.log(first_name_input);

    surname_name_input = document.getElementById("surname_input");
    console.log(surname_name_input);

    main_sign_up_button.addEventListener('click', 
        function(event) {
            console.log(event);
            console.log(event.target);
            if ((main_email_input.value.includes("@")) && (first_name_input.value.length >=1) && (surname_name_input.value.length >=1)) {
                alert("You are now subscribed to the Eggztra newsletter. Please keep a look out for our weekly emails for our latest news and offers!");  
            } else {
                alert("Invalid details entered. Please check you have filled in each box correctly and try again.");
            }
        });

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