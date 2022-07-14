
/* Things to be done:-
   >A prompt to take size.
   >Make a function for creating box, give grid size as argument.
*/

let gridSize = parseInt(prompt("Enter desired grid size (2-100)", "16"));

generateGrid(gridSize);

function generateGrid(size) {

    for (let i = 0; i < size * size; i++) {
        console.log("JS Triggered")
        let element = document.createElement("div");
        element.setAttribute("class", "pixel")
        let box = document.getElementById("box");
        box.appendChild(element);
    }

    const pixels = document.querySelectorAll('.pixel')
    console.log("const pixels defined")

    let sideLength = 800 / size;




    pixels.forEach(pixel => {
        pixel.style.width = sideLength + "px";
        pixel.style.height = sideLength + "px";
        pixel.addEventListener("mouseover", function () {
            console.log("Event Selector Working")
            pixel.style.backgroundColor = "yellow";
        })
    })

    return;
}