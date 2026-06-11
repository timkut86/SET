let _at = document.getElementById("ad");
let _ats = _at.style;

check();

function check(){
    _ats.display = 'flex';
    if(_ats.display == 'none'){
        console.log("The SET can't work with AdBlock. Turn off that for SET can work.");
    }
}