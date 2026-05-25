const selector_btn_1 = document.getElementById("selector_btn_1");
const selector_btn_2 = document.getElementById("selector_btn_2");
const selector_btn_3 = document.getElementById("selector_btn_3");
const selector_btn_4 = document.getElementById("selector_btn_4");
const selector_btn_5 = document.getElementById("selector_btn_5");
const selector_btn_6 = document.getElementById("selector_btn_6");

var selector = 1;

const nc_b1 = document.getElementById("nc-b1");
const nc_b2 = document.getElementById("nc-b2");
const nc_b3 = document.getElementById("nc-b3");
const nc_b4 = document.getElementById("nc-b4");
const nc_b5 = document.getElementById("nc-b5");
const nc_b6 = document.getElementById("nc-b6");

selectt();

selector_btn_1.onclick = function(){
    selector = 1;
    selectt();
}
selector_btn_2.onclick = function(){
    selector = 2;
    selectt();
}
selector_btn_3.onclick = function(){
    selector = 3;
    selectt();
}
selector_btn_4.onclick = function(){
    selector = 4;
    selectt();
}
selector_btn_5.onclick = function(){
    selector = 5;
    selectt();
}
selector_btn_6.onclick = function(){
    selector = 6;
    selectt();
}

function selectt(){
    if(selector === 1){
        selector_btn_1.style.backgroundColor = '#4A4A4A';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(0%)';
        nc_b2.style.transform = 'translateX(0%)';
        nc_b3.style.transform = 'translateX(0%)';
        nc_b4.style.transform = 'translateX(0%)';
        nc_b5.style.transform = 'translateX(0%)';
        nc_b6.style.transform = 'translateX(0%)';
    }
    if(selector === 2){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#4A4A4A';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-100%)';
        nc_b2.style.transform = 'translateX(-100%)';
        nc_b3.style.transform = 'translateX(-100%)';
        nc_b4.style.transform = 'translateX(-100%)';
        nc_b5.style.transform = 'translateX(-100%)';
        nc_b6.style.transform = 'translateX(-100%)';
    }
    if(selector === 3){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-200%)';
        nc_b2.style.transform = 'translateX(-200%)';
        nc_b3.style.transform = 'translateX(-200%)';
        nc_b4.style.transform = 'translateX(-200%)';
        nc_b5.style.transform = 'translateX(-200%)';
        nc_b6.style.transform = 'translateX(-200%)';
    }
    if(selector === 4){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_4.style.backgroundColor = '#4A4A4A';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-300%)';
        nc_b2.style.transform = 'translateX(-300%)';
        nc_b3.style.transform = 'translateX(-300%)';
        nc_b4.style.transform = 'translateX(-300%)';
        nc_b5.style.transform = 'translateX(-300%)';
        nc_b6.style.transform = 'translateX(-300%)';
    }
    if(selector === 5){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-400%)';
        nc_b2.style.transform = 'translateX(-400%)';
        nc_b3.style.transform = 'translateX(-400%)';
        nc_b4.style.transform = 'translateX(-400%)';
        nc_b5.style.transform = 'translateX(-400%)';
        nc_b6.style.transform = 'translateX(-400%)';
    }
    if(selector === 6){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-500%)';
        nc_b2.style.transform = 'translateX(-500%)';
        nc_b3.style.transform = 'translateX(-500%)';
        nc_b4.style.transform = 'translateX(-500%)';
        nc_b5.style.transform = 'translateX(-500%)';
        nc_b6.style.transform = 'translateX(-500%)';
    }
}