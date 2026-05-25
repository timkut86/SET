var timer = 200;
var timer = localStorage.getItem("timer");
if(timer == "null") timer = 200;
setTimeout(function(){
    const ls = document.getElementById("loading-screen");
    ls.style.display = "none";
}, timer)