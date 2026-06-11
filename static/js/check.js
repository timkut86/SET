const _at = document.getElementById("ad-test");

check();

function check(){
    _at.style.display = 'flex';
    if(_at.style.display = 'none'){
        console.log("The SET can't work with AdBlock. Turn off that for SET can work.");
    }
}