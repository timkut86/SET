const main_ad_1 = document.getElementById("main-ad-1");
const main_ad_2 = document.getElementById("main-ad-2");
const main_ad_3 = document.getElementById("main-ad-3");
const main_ad_4 = document.getElementById("main-ad-4");
const main_ad_5 = document.getElementById("main-ad-5");

const main_ad_btn_back = document.getElementById("main-ads-slide-button-back");
const main_ad_btn_next = document.getElementById("main-ads-slide-button-next");
var ad = 3

main_ad_btn_next.onclick = function(){
    next();
}
main_ad_btn_back.onclick = function(){
    back();
}

function next(){
    if (ad === 5){
        ad = 1;
    }
    else{
        ad = ad + 1;
    }
    console.log(ad);
    ad_function();
}

function back(){
    if (ad === 1){
        ad = 5;
    }
    else{
        ad = ad - 1;
    }
    console.log(ad);
    ad_function();
}

function ad_function(){
    if(ad === 1){
        main_ad_1.style.transform = 'translateX(200%)';
        main_ad_2.style.transform = 'translateX(200%)';
        main_ad_3.style.transform = 'translateX(200%)';
        main_ad_4.style.transform = 'translateX(200%)';
        main_ad_5.style.transform = 'translateX(200%)';
    }
    if(ad === 2){
        main_ad_1.style.transform = 'translateX(100%)';
        main_ad_2.style.transform = 'translateX(100%)';
        main_ad_3.style.transform = 'translateX(100%)';
        main_ad_4.style.transform = 'translateX(100%)';
        main_ad_5.style.transform = 'translateX(100%)';
    }
    if(ad === 3){
        main_ad_1.style.transform = 'translateX(0)';
        main_ad_2.style.transform = 'translateX(0)';
        main_ad_3.style.transform = 'translateX(0)';
        main_ad_4.style.transform = 'translateX(0)';
        main_ad_5.style.transform = 'translateX(0)';
    }
    if(ad === 4){
        main_ad_1.style.transform = 'translateX(-100%)';
        main_ad_2.style.transform = 'translateX(-100%)';
        main_ad_3.style.transform = 'translateX(-100%)';
        main_ad_4.style.transform = 'translateX(-100%)';
        main_ad_5.style.transform = 'translateX(-100%)';
    }
    if(ad === 5){
        main_ad_1.style.transform = 'translateX(-200%)';
        main_ad_2.style.transform = 'translateX(-200%)';
        main_ad_3.style.transform = 'translateX(-200%)';
        main_ad_4.style.transform = 'translateX(-200%)';
        main_ad_5.style.transform = 'translateX(-200%)';
    }
}

const inter_id = setInterval(e => {
    next()
}, 5000)