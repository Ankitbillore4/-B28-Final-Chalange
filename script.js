var video1 = document.querySelector(".video1")
var CARTIER = document.querySelector(".CARTIER")

var video2 = document.querySelector(".video2")
var URWERK = document.querySelector(".URWERK")


var RIOT= document.querySelector(".RIOT")
var video3 = document.querySelector(".video3")

var SALMON = document.querySelector(".SALMON")
var video3 = document.querySelector(".video2")




var circle1 = document.querySelector(".circle1")
var circle2 = document.querySelector(".circle2")

var body = document.querySelector("body")



CARTIER.addEventListener("mouseenter",function(){
  video1.classList.remove("hidden")
    
})

CARTIER.addEventListener("mouseleave",function(){
    video1.classList.add("hidden")
      
  })



  URWERK.addEventListener("mouseenter",function(){
    video2.classList.remove("hidden")
      
})


URWERK.addEventListener("mouseleave",function(){
    video2.classList.add("hidden")
      
  })

RIOT.addEventListener("mouseenter",function(){
    video3.classList.remove("hidden")
      
})

RIOT.addEventListener("mouseleave",function(){
    video3.classList.add("hidden")
      
  })



  circle1.addEventListener("click",function(){
    body.style.color="white"
    body.style.backgroundColor="black"


    
  })

  circle1.addEventListener("dblclick",function(){
    body.style.color="black"
    body.style.backgroundColor="white"
    
    
  })