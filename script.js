var video1 = document.querySelector(".video1")
var CARTIER = document.querySelector(".CARTIER")

var video2 = document.querySelector(".video2")
var URWERK = document.querySelector(".URWERK")


var RIOT= document.querySelector(".RIOT")
var video3 = document.querySelector(".video3")

var SALMON = document.querySelector(".SALMON")
var video3 = document.querySelector(".video2")




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
