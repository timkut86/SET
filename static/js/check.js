let _at = document.getElementById("ads");
let _ats = _at.style;

check();

function check(){
    _ats.height = '272px';
    if(_ats.height == '0'){
        console.log("The SET cannot work with AdBlock. Turn off that for SET can work.");
    } else console.log("The SET loaded succesfully.")
}