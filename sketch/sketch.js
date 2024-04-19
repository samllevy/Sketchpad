//creating the grid 
let gridSize = 16;
let col = [];
let opacity = 1;

function createGrid(){
    for (i = 0; i < gridSize * gridSize; i++){
        const frame = document.querySelector("#frame");
            const cell = document.createElement("div");
            cell.classList.add("cell");
        frame.appendChild(cell);
    }   
}
createGrid();

//getting a random color for each new square that's hovered on
function getRandomColor(){
    for (let i = 0; i < 3 ; i++) {
    col[i] = Math.floor(Math.random() * 255);
    console.log(`col${i}`, col[i]);
    }
}

//opacity increase effect
function opacityIncrease () {
    for (let i = 1 ; i > 0 ; i--) {
        console.log(opacity);
        opacity = opacity -0.1 ;
    }
}

//hover effect
function hoverColor () {
    let newColor = document.querySelectorAll(".cell");
    newColor.forEach(newColor => {
        newColor.addEventListener("mouseover", () => {
        getRandomColor();
        opacityIncrease();
        newColor.style.opacity = opacity;
        newColor.style.backgroundColor = `RGB(${col[0]},${col[1]},${col[2]})`
        })
    });
}
hoverColor();

/*
Insturctions : 
implement a progressive darkening effect where each 
interaction darkens the square by 10%. The objective is to achieve a completely black square only ten interactions.
Hint: The opacity CSS property is useful here. 
To learn how to use it, check this MDN docs article about the opacity 
CSS property.
You can choose to do either one or both of these challenges, 
it’s up to yo
*/ 

/*
Add a button on the top of the screen that will send the user a popup 
asking for the number of squares per side for the new grid. 
Once entered, the existing grid should be removed, and a new grid 
should be generated in the same total space as before (e.g., 960px wide) 
so that you’ve got a new sketch pad.

Tip: Set the limit for the user input to a maximum of 100. 
A larger number of squares results in more computer resources being used,
potentially causing delays, freezing, or crashing that we want to prevent.

Research button tags in HTML and how you can make a JavaScript function 
run when one is clicked.

Also check out prompts.

You should be able to enter 64 and have a brand 
new 64x64 grid pop up without changing the total amount of pixels used.
*/ 
  
