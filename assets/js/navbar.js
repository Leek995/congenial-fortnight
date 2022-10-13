const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
$('#hamburger').on("click", ()=>{
    $('main').toggle(".hidden");
})

$('#hamburger').hover(
    function (){
        $('#hamburger').css("background-color", "red").css("border", "solid 1px grey");
    },
    function (){
        $('#hamburger').css("background-color", "lightcoral");
    }
)

$('.bi-brightness-low').hover(
    function (){
        $('.bi-brightness-low').css("background-color", "red").css("border", "solid 1px grey");
    },
    function (){
        $('.bi-brightness-low').css("background-color", "lightcoral")
    }
)
$('.bi-brightness-low').on("click", event=>{


    // if($('.bi-brightness-low').css("background-color", "blue")){
    //     $('body').css("background-color", "purple");
    // }else if($('.bi-brightness-low').css("background-color", "lightcoral")){
    //     $('body').css("background-color", "lightcoral");
    // }

})
