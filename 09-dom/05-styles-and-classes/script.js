// Styles and Classes


// style

const heading = document.querySelector("#heading");

heading.style.color = "blue";

heading.style.backgroundColor = "lightyellow";

heading.style.textTransform = "uppercase";


// classList.add()

heading.classList.add("highlight");


// classList.remove()

heading.classList.remove("large-text");


// classList.toggle()

heading.classList.toggle("large-text");


// Applying a class to multiple elements

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
        item.classList.add("highlight");
    }
});