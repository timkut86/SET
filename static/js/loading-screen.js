var timer = 400;
var timer = localStorage.getItem("timer");
if(timer == "null") timer = 400;
setTimeout(function(){
    const ls = document.getElementById("loading-screen");
    ls.style.display = "none";
    //if(document.querySelector("#pp_t").innerHTML == "name") document.querySelector(".product-page").innerHTML = "0";
}, timer)
let hadvisited = 0
hadvisited = localStorage.getItem("hadvisited");
if(hadvisited == "null") hadvisited = 1;
localStorage.setItem("hadvisited", hadvisited)