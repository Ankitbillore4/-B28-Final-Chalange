var main= document.querySelector(".main")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")
var five = document.querySelector(".five")
var six = document.querySelector(".six")
var seven = document.querySelector(".seven")
var h2 = document.querySelector("h2")
var text= document.querySelector(".text")


text.addEventListener("click",function(){
    main.style.backgroundColor="white"
    h2.innerHTML="Color : White";
})

one.addEventListener("click",function(){
    main.style.backgroundColor="blue";
    h2.innerHTML="Color : Blue";
})

two.addEventListener("click",function(){
    main.style.backgroundColor="red"
    h2.innerHTML="Color : Red";
})
three.addEventListener("click",function(){
    main.style.backgroundColor="green"
    h2.innerHTML="Color : Green";
})
four.addEventListener("click",function(){
    main.style.backgroundColor="yellow"
    h2.innerHTML="Color : Yellow";
})
five.addEventListener("click",function(){
    main.style.backgroundColor="orange"
    h2.innerHTML="Color : Orange";
})
six.addEventListener("click",function(){
    main.style.backgroundColor="purple"
    h2.innerHTML="Color : Purple";
})
seven.addEventListener("click",function(){
    main.style.backgroundColor="pink"
    h2.innerHTML="Color : Pink";
})
