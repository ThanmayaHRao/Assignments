

let image = document.getElementById("myimage")
image.setAttribute("src","https://images.unsplash.com/photo-1764782979306-1e489462d895?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8")
image.style.width="200px"
image.style.height="200px"

let anchor = document.getElementById("anchor")
let x =anchor.getAttribute("href")
console.log(x)

// let content = document.getElementsByClassName("user")
// content.setAttribute("data-role","admin")

let btn = document.getElementById("btn");

function out(){
    btn.removeAttribute("style");
}

btn.addEventListener("click", out);

let btn1 = document.getElementById("btn1");

function out1(){
    alert("buttrn clicked")
}

btn1.addEventListener("click", out1);


let check = document.getElementById("check");
let container = document.querySelector(".container");

check.addEventListener("change", () => {
    container.style.display = check.checked ? "none" : "block";
});

let content = document.querySelector(".user");
let z = content.classList.contains("user1");

console.log(z);








