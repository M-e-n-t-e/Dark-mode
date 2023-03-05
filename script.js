const toggle = document.querySelector(".toggle")
const header = document.querySelector("header")
const bodyBackground = document.querySelector("body")
const content = document.querySelectorAll(".content")
const footer = document.querySelector("footer")
const insideToggle = document.querySelector(".toggleCircle")

toggle.addEventListener("click", () => {
    header.classList.toggle("active");
    toggle.classList.toggle("active");
    bodyBackground.classList.toggle("active");
    footer.classList.toggle("active");
    insideToggle.classList.toggle("active");


    content.forEach(content => content.classList.toggle("active"));


})