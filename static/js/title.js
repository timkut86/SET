const tb1 = document.getElementById("tb1");
const tb2 = document.getElementById("tb2");
const fb = document.getElementById("filters");
if(window.innerWidth < 900) fb.style.transform = 'translateY(-200%)';
var f = 0;

tb1.onclick = function(){
    window.location.href = "catalog";
}
tb2.onclick = function(){
    filt();
}
function filt(){
    if(window.innerWidth < 900){
        if (f == 0){
        f = 1;
        fb.style.transform = 'translateY(0%)';
    }
    else{
        f = 0;
        console.log(7)
        fb.style.transform = 'translateY(-200%)';
    }
    }
}