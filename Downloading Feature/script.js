var btn = document.querySelector("button")
var value = document.querySelector(".value")
var loading = document.querySelector(".loading")



var grow =0

btn.addEventListener("click",function(){
    var increase=setInterval(function(){
        btn.setAttribute("disabled",true)
        grow++
       value.innerHTML=grow + "%"
       loading.style.width= grow +"%"
    }, 40);
   
    setTimeout(function(){
        clearInterval(increase)
        btn.innerHTML="Downloaded.."
        btn.style.opacity= 0.5
    },4000)
    
})