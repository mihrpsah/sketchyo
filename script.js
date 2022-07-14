for(let i=0; i<256; i++){
    console.log("JS Triggered")                 
    let element = document.createElement("div");
    element.setAttribute("class", "pixel")
    let box = document.getElementById("box");
    box.appendChild(element);
}

const pixels = document.querySelectorAll('.pixel')

pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function(){
        console.log("Event Selector Working")
        pixel.setAttribute('style', 'background-color: yellow;');
    })
})
