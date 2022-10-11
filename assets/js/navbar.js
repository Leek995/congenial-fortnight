const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

$('#hamburger').hover(
    function (){
        $('#hamburger').css("background-color", "red");
    },
    function (){
        $('#hamburger').css("background-color", "white");
    }
)

$('.bi-brightness-low').hover(
    function (){
        $('.bi-brightness-low').css("background-color", "red")
    },
    function (){
        $('.bi-brightness-low').css("background-color", "white")
    }
)
