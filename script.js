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



CARTIER.addEventListener("mouseenter",function(){
  video1.classList.remove("hidden")
  body.style.color = "white";
    
})

CARTIER.addEventListener("mouseleave",function(){
    video1.classList.add("hidden")
    body.style.color = "black";
      
  })



  URWERK.addEventListener("mouseenter",function(){
    video2.classList.remove("hidden")
    body.style.color = "white";
      
})


URWERK.addEventListener("mouseleave",function(){
    video2.classList.add("hidden")
    body.style.color = "black";
      
  })

RIOT.addEventListener("mouseenter",function(){
    video3.classList.remove("hidden")
    body.style.color = "white";
      
})

RIOT.addEventListener("mouseleave",function(){
    video3.classList.add("hidden")
    body.style.color = "black";
      
  })

SALMON.addEventListener("mouseenter",function(){
  video5.classList.remove("hidden")
  body.style.color = "white";
  
})

SALMON.addEventListener("mouseleave",function(){
  video5.classList.add("hidden")
  body.style.color = "black";
 
  
})


COMPOSITION.addEventListener("mouseenter",function(){
  video6.classList.remove("hidden")
  body.style.color = "white";
  
  
})


COMPOSITION.addEventListener("mouseleave",function(){
  video6.classList.add("hidden")
  body.style.color = "black";
  
})

  var flag = 0;
  LightDarkMode.addEventListener("click", function() {
  if (flag === 0) {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    flag = 1;
  } else {
    body.style.color = "black";
    body.style.backgroundColor = "white";
    flag = 0;
  }
});




// gsap start

var MENU = document.querySelector(".MENU");
var navpart2 = document.querySelector(".navpart2");

var flag = 0;
MENU.addEventListener("click", function () {
  if (flag === 0) {
    navpart2.innerHTML = "CLOSE";
    gsap.fromTo(".boxes", 
      { y: -500 },
      { y: 0, duration: 0.6, stagger: 0.1 }
    );
    flag = 1;
  } else {
    navpart2.innerHTML = "MENU";
    gsap.to(".boxes", {
      y: -500,
      duration: 0.6,
      stagger: 0.1,
    });
    flag = 0;
  }
});

