const bgAnimation= document.querySelector(".bgAnimation");

const numberOFBoxes = 400;

for(let i =0 ; i<numberOFBoxes; i++) {
    const box = document.createElement("div");
    box.className = "colorBox";
    bgAnimation.appendChild(box);
}