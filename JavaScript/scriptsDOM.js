
//CHANGE BODY PARAGRAPH
var intro = document.querySelector(".intro");
intro.innerText = "\"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go. — Dr. Seuss\"";

//REPLACE ALL THREE IMAGES
var images = document.querySelectorAll("img");
images[0].setAttribute("src", "Images/train_615w.png");
images[1].setAttribute("src", "Images/tetris_615w.png");
images[2].setAttribute("src", "Images/dog_615w.png");

//REPLACE ALL THREE IMAGE HEADINGS
var headings = document.querySelectorAll("figcaption h3");
headings[0].innerText = "Bring Back Steam Trains";
headings[1].innerText = "Tetris is the Best Game";
headings[2].innerText = "Don't get a Weiner Dog";

//REPLACE ALL THREE IMAGE CAPTIONS
var caption = document.querySelectorAll("figcaption p");
caption[0].innerText = "Are steam engines less efficient than diesel? Yes. Do they produce more pollution? Probably." + 
                       " However, objectively speaking steam engines are sick and should be brought back.";
caption[1].outerHTML = "<p>Tetris was <i>literally</i> creating during the Cold War and it's still being played today." +
                        " Find another game that's remained largely unchanged for fourty years thats still relevant culturally.<p>";
caption[2].innerText = "Weiner dogs are literally the worst. A well-known trait of the breed is the desire " +
                       "to burrow inside of your skin and live there. They are also incredibly stubborn and stupid.";

//FUNCTION TO CHANGE HEADER COLOR
function changeHeaderColor(color) {
    var header = document.querySelector("header");
    var text = document.querySelector("header h1");
    switch(color) {
        case 1:
            header.style.background = "AliceBlue";
            text.style.color = "SlateBlue";
            break;
        case 2:
            header.style.background = "PeachPuff";
            text.style.color = "Purple";
            break;
        case 3:
            header.style.background = "MediumSeaGreen";
            text.style.color = "MintCream";
            break;
    }
}

//BUTTON EVENT LISTENERS
var buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", function() {changeHeaderColor(1)}, false);
buttons[1].addEventListener("click", function() {changeHeaderColor(2)}, false);
buttons[2].addEventListener("click", function() {changeHeaderColor(3)}, false);
