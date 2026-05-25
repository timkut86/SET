const sbtn1 = document.getElementById("sbtn1");
const sbtn2 = document.getElementById("sbtn2");
const sbtn3 = document.getElementById("sbtn3");
const sbtn4 = document.getElementById("sbtn4");
const sbtn5 = document.getElementById("sbtn5");
var timer = 200;
var timer = localStorage.getItem("timer");
if(timer == "null") timer = 200;
console.log(timer);
s_timer(timer);
sbtn1.onclick = function(){
    s_timer(200);
}
sbtn2.onclick = function(){
    s_timer(400);
}
sbtn3.onclick = function(){
    s_timer(600);
}
sbtn4.onclick = function(){
    s_timer(800);
}
sbtn5.onclick = function(){
    s_timer(1000);
}
function s_timer(t){
    console.log(t);
    timer = t;
    localStorage.setItem("timer", timer);
    if(timer == 200){
        sbtn1.style.backgroundColor = '#4A4A4A';
        sbtn2.style.backgroundColor = '#1E1E1E';
        sbtn3.style.backgroundColor = '#1E1E1E';
        sbtn4.style.backgroundColor = '#1E1E1E';
        sbtn5.style.backgroundColor = '#1E1E1E';
    }
    if(timer == 400){
        sbtn2.style.backgroundColor = '#4A4A4A';
        sbtn1.style.backgroundColor = '#1E1E1E';
        sbtn3.style.backgroundColor = '#1E1E1E';
        sbtn4.style.backgroundColor = '#1E1E1E';
        sbtn5.style.backgroundColor = '#1E1E1E';
    }
    if(timer == 600){
        sbtn3.style.backgroundColor = '#4A4A4A';
        sbtn2.style.backgroundColor = '#1E1E1E';
        sbtn1.style.backgroundColor = '#1E1E1E';
        sbtn4.style.backgroundColor = '#1E1E1E';
        sbtn5.style.backgroundColor = '#1E1E1E';
    }
    if(timer == 800){
        sbtn4.style.backgroundColor = '#4A4A4A';
        sbtn2.style.backgroundColor = '#1E1E1E';
        sbtn3.style.backgroundColor = '#1E1E1E';
        sbtn1.style.backgroundColor = '#1E1E1E';
        sbtn5.style.backgroundColor = '#1E1E1E';
    }
    if(timer == 1000){
        sbtn5.style.backgroundColor = '#4A4A4A';
        sbtn2.style.backgroundColor = '#1E1E1E';
        sbtn3.style.backgroundColor = '#1E1E1E';
        sbtn4.style.backgroundColor = '#1E1E1E';
        sbtn1.style.backgroundColor = '#1E1E1E';
    }
}