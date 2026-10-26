const nav_search_find_m = document.getElementById("mSET-catalog-search_");
const nav_search_m = document.getElementById("mSET-catalog-search");
nav_search_find_m.onclick = function(){
    window.location.href = `product?id=${nav_search_m.value}`;
}