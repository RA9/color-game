const SQUARES_ELEMENT = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#colorDisplay");
const alertMessage = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const h1 = document.querySelector("h1");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

let numOfSquares = 6;

let GAME_COLORS = generateRandomColors(numOfSquares);

function pickColor() {
    let random = Math.floor(Math.random() * GAME_COLORS.length);
    return GAME_COLORS[random];
}


let pickedColor = pickColor();


colorDisplay.textContent = pickedColor;


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares = 3;
    GAME_COLORS = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < SQUARES_ELEMENT.length; i++) {
        if(GAME_COLORS[i]) {
            SQUARES_ELEMENT[i].style.backgroundColor = GAME_COLORS[i];
        } else {
            SQUARES_ELEMENT[i].style.display = "none";
        }
        
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    GAME_COLORS = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < SQUARES_ELEMENT.length; i++) {
        if(GAME_COLORS[i]) {
            SQUARES_ELEMENT[i].style.display = "block";
            SQUARES_ELEMENT[i].style.backgroundColor = GAME_COLORS[i];
        }
        
    }
});

resetButton.addEventListener("click", function() {
    // generate a new random colors
    GAME_COLORS = generateRandomColors(numOfSquares);
     // pick a new random color
     pickedColor = pickColor()
    // change the color display text
    colorDisplay.textContent = pickedColor;
    // loop through all the squares and add the new random colors
    for (let i = 0; i < SQUARES_ELEMENT.length; i++) {
        SQUARES_ELEMENT[i].style.backgroundColor = GAME_COLORS[i];
    }
    h1.style.backgroundColor = "steelblue";
    alertMessage.textContent = " ";
    resetButton.textContent = "New Colors";
})

for (let i = 0; i < SQUARES_ELEMENT.length; i++) {
    // add colors to the squares
    SQUARES_ELEMENT[i].style.backgroundColor = GAME_COLORS[i];

    // add an event listener to all the squares when clicked
    SQUARES_ELEMENT[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alertMessage.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            console.log(clickedColor)

        } else {
            alertMessage.textContent = "Try again!";
            this.style.backgroundColor = " #232323";
            resetButton.textContent = "New Colors";
        }
    })
}


function changeColors(color) {
    for (let i = 0; i < SQUARES_ELEMENT.length; i++) {
        SQUARES_ELEMENT[i].style.backgroundColor = color;
    }
}

function randomColors() {
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    return `rgb(${red}, ${blue}, ${green})`;
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColors())
    }
    return arr;
}
