var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggleMenu = menuToggle.addEventListener("click",function(){
    // forEach is nt supported in IE11
    //activeElements.forEach(function(e){
    // e.classList.toggle("active");

    // }) ;

    for(var activated = 0; activated < activeElements.length; activated++){
        activeElements[activated].classList.toggle("active");
    }
})