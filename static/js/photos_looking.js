let pl = document.getElementById("photos_looking");
let plb = document.getElementById("pl-back");
let plc = document.getElementById("pl_container");
let plc1 = document.getElementById("plc_photo1");
let plc2 = document.getElementById("plc_photo2");
let plc3 = document.getElementById("plc_photo3");
let plc4 = document.getElementById("plc_photo4");
let plc5 = document.getElementById("plc_photo5");
let pl_bb = document.getElementById("pl-button-back");
let pl_bn = document.getElementById("pl-button-next");
let pl_n = document.getElementById("pl_name");
let ph1 = document.getElementById("p1");
let ph1m = document.getElementById("p1m");
let ph2 = document.getElementById("p2");
let ph2m = document.getElementById("p2m");
let ph3 = document.getElementById("p3");
let ph3m = document.getElementById("p3m");
let ph4 = document.getElementById("p4");
let ph4m = document.getElementById("p4m");
let ph5 = document.getElementById("p5");
let ph5m = document.getElementById("p5m");
var plc_var = 1;
var p_l = 1;

open_close_pl();

plb.onclick = function(){
    if(p_l == 0){
        p_l = 1;
    }
    if(p_l == 1){
        open_close_pl();
    }

}

pl_bn.onclick = function(){
    plc_(1);
}
pl_bb.onclick = function(){
    plc_(-1);
}

ph1.onclick = function(){
    open(1);
}
ph1m.onclick = function(){
    open(1);
}

ph2.onclick = function(){
    open(2);
}
ph2m.onclick = function(){
    open(2);
}

ph3.onclick = function(){
    open(3);
}
ph3m.onclick = function(){
    open(3);
}

ph4.onclick = function(){
    open(4);
}
ph4m.onclick = function(){
    open(4);
}

ph5.onclick = function(){
    open(5);
}
ph5m.onclick = function(){
    open(5);
}



function open_close_pl(){
    if(p_l == 0){
        pl.style.display = 'flex';
        p_l = 1;
    }
    else {
        pl.style.display = 'none';
        p_l = 0;
    }
}

function open(y){
    open_close_pl();
    console.log(y);
    plc_var = 0;
    plc_(y);
}

function plc_(x){
    plc_var += x;
    if(plc_var == 6){
        plc_var = 1;
    }
    else if(plc_var == 0){
        plc_var = 5
    }
    if(plc_var == 1){
        plc1.style.transform = 'translateX(0%)';
        plc2.style.transform = 'translateX(0%)';
        plc3.style.transform = 'translateX(0%)';
        plc4.style.transform = 'translateX(0%)';
        plc5.style.transform = 'translateX(0%)';
    }
    if(plc_var == 2){
        plc1.style.transform = 'translateX(-100%)';
        plc2.style.transform = 'translateX(-100%)';
        plc3.style.transform = 'translateX(-100%)';
        plc4.style.transform = 'translateX(-100%)';
        plc5.style.transform = 'translateX(-100%)';
    }
    if(plc_var == 3){
        plc1.style.transform = 'translateX(-200%)';
        plc2.style.transform = 'translateX(-200%)';
        plc3.style.transform = 'translateX(-200%)';
        plc4.style.transform = 'translateX(-200%)';
        plc5.style.transform = 'translateX(-200%)';
    }
    if(plc_var == 4){
        plc1.style.transform = 'translateX(-300%)';
        plc2.style.transform = 'translateX(-300%)';
        plc3.style.transform = 'translateX(-300%)';
        plc4.style.transform = 'translateX(-300%)';
        plc5.style.transform = 'translateX(-300%)';
    }
    if(plc_var == 5){
        plc1.style.transform = 'translateX(-400%)';
        plc2.style.transform = 'translateX(-400%)';
        plc3.style.transform = 'translateX(-400%)';
        plc4.style.transform = 'translateX(-400%)';
        plc5.style.transform = 'translateX(-400%)';
    }
}