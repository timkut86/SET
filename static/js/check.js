let _at = document.getElementById("ads");
let _ats = _at.offsetHeight;

check();

function check(){
    if(_ats == '0'){
        console.log("The SET cannot work with AdBlock. Turn off that for SET can work.");
    } else console.log("The SET loaded succesfully.")
}