const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
$('#hamburger').on("click", ()=>{
    $('main').toggle(".hidden");
})
$('.bi-brightness-low').on("click", event=>{

})