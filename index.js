
// Detecting button presses

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){    // add click event to each button
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    })
}


document.addEventListener("keypress", function(event){   // add keypress event to entire document
    makeSound(event.key);  // check whick key is pressed and send it as an argument to makeSound function
    buttonAnimation(event.key);
});


// this function depending on they key value will make respective sounds. 
function makeSound(key){
    switch (key){
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
        break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
        break;
        
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
        break;

        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
        break;
        
        case "j":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
        break;
        
        case "k":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
        break;
        
        case "l":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
        break;

        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(button){
    var currButton = document.querySelector("." + button);
    currButton.classList.add("pressed");
    setTimeout(function(){currButton.classList.remove("pressed");},100);

}