const header=document.querySelector(".header");
const menuToggle=document.querySelector(".menu-toggle");
const navPanel=document.querySelector(".nav-panel");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});

menuToggle.addEventListener("click",()=>{

const isOpen=navPanel.classList.toggle("open");

document.body.classList.toggle("menu-open", isOpen);

menuToggle.setAttribute("aria-expanded", isOpen);

});

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navPanel.classList.remove("open");

document.body.classList.remove("menu-open");

menuToggle.setAttribute("aria-expanded", "false");

});

});

window.addEventListener("resize",()=>{

if(window.innerWidth>980){

navPanel.classList.remove("open");

document.body.classList.remove("menu-open");

menuToggle.setAttribute("aria-expanded", "false");

}

});
