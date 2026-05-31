const copybtn = document.getElementById("pp_copy");
const copybtn_m = document.getElementById("pp_copy_m");
const copied_label = document.getElementById("copied_label____");
console.log(copied_label);
copied_label.style.top = '-36px';

copybtn.onclick = function(){
    copylink();
}
copybtn_m.onclick = function(){
    copylink();
}
function copylink(){
    navigator.clipboard.writeText(window.location.href);
    copied_label.style.top = '36px';
    setTimeout(function(){
        copied_label.style.top = '-36px';
    }, 3000)
}