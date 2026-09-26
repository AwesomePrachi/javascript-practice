// Mouse Events


// Mousemove Event

const box = document.querySelector("#box");

const handleMouseMove = (event) => {
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
};

window.addEventListener("mousemove", handleMouseMove);


// Other Common Mouse Events

// click
// dblclick
// mouseover
// mouseout
// mousedown
// mouseup
// mousemove

// Required HTM:

// <div id="box"></div>

// Required CSS:

// #box {
//     position: fixed;
//     width: 40px;
//     height: 40px;
// }