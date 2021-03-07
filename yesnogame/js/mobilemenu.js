const burger = document.getElementById("burger");
const nav = document.getElementById("navlist");

const navSlide = ()=>{
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}

navSlide();