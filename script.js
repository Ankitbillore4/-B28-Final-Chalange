var video1 = document.querySelector(".video1")
var CARTIER = document.querySelector(".CARTIER")

var video2 = document.querySelector(".video2")
var URWERK = document.querySelector(".URWERK")


var video3 = document.querySelector(".video3")
var RIOT= document.querySelector(".RIOT")


var SALMON = document.querySelector(".SALMON")
var video5 = document.querySelector(".video5")


var video6 = document.querySelector(".video6")
var COMPOSITION = document.querySelector(".COMPOSITION")




var LightDarkMode = document.querySelector(".LightDarkMode")
var body = document.querySelector("body")

var nav = document.querySelector(".nav")
var boxes = document.querySelectorAll(".boxes")



CARTIER.addEventListener("mouseenter",function(){
  video1.classList.remove("hidden")
  body.style.color = "white";
  nav.style.backgroundColor = "transparent"
    
})

CARTIER.addEventListener("mouseleave",function(){
    video1.classList.add("hidden")
    body.style.color = "black";
   nav.style.backgroundColor = "white"

      
  })



  URWERK.addEventListener("mouseenter",function(){
    video2.classList.remove("hidden")
    body.style.color = "white";
     nav.style.backgroundColor = "transparent"
      
})


URWERK.addEventListener("mouseleave",function(){
    video2.classList.add("hidden")
    body.style.color = "black";
   nav.style.backgroundColor = "white"

      
  })

RIOT.addEventListener("mouseenter",function(){
    video3.classList.remove("hidden")
    body.style.color = "white";
     nav.style.backgroundColor = "transparent"
      
})

RIOT.addEventListener("mouseleave",function(){
    video3.classList.add("hidden")
    body.style.color = "black";
   nav.style.backgroundColor = "white"

      
  })

SALMON.addEventListener("mouseenter",function(){
  video5.classList.remove("hidden")
  body.style.color = "white";
   nav.style.backgroundColor = "transparent"
  
})

SALMON.addEventListener("mouseleave",function(){
  video5.classList.add("hidden")
  body.style.color = "black";
  nav.style.backgroundColor = "white"

 
  
})


COMPOSITION.addEventListener("mouseenter",function(){
  video6.classList.remove("hidden")
  body.style.color = "white";
   nav.style.backgroundColor = "transparent"
  
  
})


COMPOSITION.addEventListener("mouseleave",function(){
  video6.classList.add("hidden")
  body.style.color = "black";
   nav.style.backgroundColor = "white"
  
})

  var flag = 0;
  LightDarkMode.addEventListener("click", function() {
  if (flag === 0) {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    nav.style.backgroundColor = "black"
    flag = 1;
  } else {
    body.style.color = "black";
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white"
    flag = 0;
  }
});




// gsap start

var MENU = document.querySelector(".MENU");
var navpart2 = document.querySelector(".navpart2");
var MenuBar = document.querySelector(".MenuBar")

var flag = 0;
MENU.addEventListener("click", function () {
  if (flag === 0) {
    navpart2.innerHTML = "CLOSE";
    MenuBar.style.transform = `translateY(0%)`
    gsap.fromTo(".boxes", 
      { y: -500 },
      { y: 0, duration: 0.6, stagger: 0.1 }
    );
    flag = 1;
  } else {
    navpart2.innerHTML = "MENU";
    MenuBar.style.transform = `translateY(-120%)`
    gsap.to(".boxes", {
      y: -500,
      duration: 0.6,
      stagger: 0.1,
    });
    flag = 0;
  }
});

