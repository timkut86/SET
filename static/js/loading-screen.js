var timer = 400;
var timer = localStorage.getItem("timer");
if(timer == "null") timer = 400;
setTimeout(function(){
    const ls = document.getElementById("loading-screen");
    ls.style.display = "none";
}, timer)