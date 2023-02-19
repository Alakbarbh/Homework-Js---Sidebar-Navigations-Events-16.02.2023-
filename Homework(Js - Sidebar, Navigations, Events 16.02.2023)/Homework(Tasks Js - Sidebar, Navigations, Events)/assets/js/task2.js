"use strict"



let navbar = document.querySelector(".navbar");

let closeIcon = document.querySelector(".navbar .closeicon");

let openIcon = document.querySelector(".navbar .openicon");


openIcon.addEventListener("click", function(){   
    navbar.classList.remove("hidden-navbar");
    closeIcon.classList.remove("d-none");
    this.classList.add("d-none");
})

closeIcon.addEventListener("click", function(){
    navbar.classList.add("hidden-navbar");
    openIcon.classList.remove("d-none");
    this.classList.add("d-none");
})
