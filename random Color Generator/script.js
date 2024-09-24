
setInterval(function(){
    var main=document.querySelector(".main")
    var container =""
    
    for(var i=1; i<231; i++){
        var num=Math.floor(Math.random()*100);
        var red=Math.floor(Math.random()*256);
        var blue=Math.floor(Math.random()*256);
        var green=Math.floor(Math.random()*256);
        container+=`<div style=" background-color:rgb(${red},${green},${blue});" class="bubble  h-[50px] w-[50px] bg-yellow-300 rounded-full text-2xl flex items-center justify-center">${num}</div>`
    }
    
    main.innerHTML=container;
    
        
},500)

          
          
// for( var i=1 ; i<106; i++ ){
//     var bubble = document.createElement("div")
//   bubble.textContent= Math.floor(Math.random() *100);
//     bubble.classList.add("h-20","w-20","rounded-full","bg-blue-400","flex","items-center","justify-center","text-2xl")
//     document.querySelector(".main").appendChild(bubble)
//     bubble.addEventListener("click",function(){
//       console.log("jay shree ram");
//     })
//   }


//   setInterval(function(){
    
//   })