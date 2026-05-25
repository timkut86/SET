const body = document.getElementById("body");

const navigation = `<div class = "navigation">
        <div class="nav-part-1">
            <div class="navigation-button nb-s" id="nb-m">
                <div class="navigation-button nb-m" id="nb-m" style="background: url(../static/icons/Dark/More\ vertical.svg);">
                    <a href=""></a>
                </div>
            </div>
            <div class="navigation-button" id="nb-logo">
                <a href="/"><h1>SET</h1></a>
            </div>
            <!--<div class="navigation-button" id="nb">
                <a href="index" id="regular">Home</a>
            </div>-->
            <button class="black-nb" id="open-catalog_btn"><div class="catalog_btn_padding"><img src="../static/icons/Light/List.svg"><p>Catalog</p></div></button>
        </div>
        <div class="nav-part-2">
            <div class="navigation-button nb-" id="nb-icon" style="background: url(../static/icons/Dark/Book.svg);">
                <a href="orders"></a>
            </div>
            <div class="navigation-button nb-" id="nb-icon" style="background: url(../static/icons/Dark/Bell.svg);">
                <a href="notifications"></a>
            </div>
            <button onclick="window.location.href='cart'" class="black-nb1" id="open-cart_btn"><div class="catalog_cart_padding"><img src="../static/icons/Light/Shoppingcart.svg"><p>4</p></div></button>
            <div class="navigation-button" id="nb-icon" style="background: url(../static/icons/Dark/Rectangle15.svg);">
                <button id="open-profile-menu"></button>
            </div>
        </div>
        </div>


        <div class="profile-menu" id="profile-menu">
                <div class="profile-image"></div>
                <h2>YourName</h2>
                <a href="SET-card" class="SET-card-pm" style="margin-top: 15px; margin-bottom: 25px; border-radius: 30px; display: flex; width: 300px; justify-self: center; margin-bottom: 15px;">
                    <p>SET</p>
                    <p id="regular">**** 8274</p>
                    <p id="regular">$175,69</p>
                </a>
                <div class="button2" id="regular"><a href="orders"><p>Orders</p></a></div>
                <div class="button2" id="regular"><a href="notifications"><p>Notifications</p></a></div>
                <div class="button2" id="regular"><a href="settings"><p>Settings</p></a></div>
                <div class="button2" id="regular"><a href="payment_methods"><p>Payment methods</p></a></div>
                <div class="button2" id="regular"><a href=""><p>Sign out</p></a></div>
            </div>
`

const nav_mobile = `
        <a href="/" id="regular"><img src="../static/icons/Dark/Home.svg"><p></p></a>
        <a href="catalog" id="regular"><img src="../static/icons/Dark/List.svg"><p></p></a>
        <a href="cart" id="regular"><img src="../static/icons/Dark/Shoppingcart.svg"><p></p></a>
        <a href="profile" id="regular"><img src="../static/icons/Dark/Rectangle15.svg"><p></p></a>
`

const nav_catalog_menu = `
        <div class="nc-block1">
            <button id="close-catalog_btn"><img src="../static/icons/Dark/Arrow up-circle.svg"></button>
            <h2>Catalog</h2>
            <a href="products"><img src="../static/icons/Dark/List.svg"></a>
        </div>
        <div class="selector">
            <div class="selector-row">
                <button class="selector_btn" id="selector_btn_1"><img src="../static/icons/Light/Star.svg"><p>Trends</p></button>
                <button class="selector_btn" id="selector_btn_2"><img src="../static/icons/Light/Star.svg"><p>Favorites</p></button>
                <button class="selector_btn" id="selector_btn_3"><img src="../static/icons/Light/sports_soccer.svg"><p>Sports</p></button>
                <button class="selector_btn" id="selector_btn_4"><img src="../static/icons/Light/kitchen.svg"><p>Techniques</p></button>
                <button class="selector_btn" id="selector_btn_5"><img src="../static/icons/Light/health_and_beauty.svg"><p>Cosmetics</p></button>
                <button class="selector_btn" id="selector_btn_6"><img src="../static/icons/Light/toys_and_games.svg"><p>Toys</p></button>
            </div>
            <div class="selector-row">
                <button class="selector_btn" id="selector_btn_7"><img src="../static/icons/Light/Box.svg"><p>Furniture</p></button>
                <button class="selector_btn" id="selector_btn_8"><img src="../static/icons/Light/apparel.svg"><p>Clothes</p></button>
                <button class="selector_btn" id="selector_btn_9"><img src="../static/icons/Light/Book.svg"><p>Books</p></button>
                <button class="selector_btn" id="selector_btn_10"><img src="../static/icons/Light/backpack.svg"><p>Bags</p></button>
                <button class="selector_btn" id="selector_btn_11"><img src="../static/icons/Light/hiking.svg"><p>Hiking</p></button>
                <button class="selector_btn" id="selector_btn_12"><img src="../static/icons/Light/health_cross.svg"><p>Health</p></button>
            </div>
        </div>
        <div class="nc-bs">
            <div class="nc-b" id="nc-b1">
                <h3>Trends</h3>
                <div class="top5block in-nav-catalog pbc_"></div>
            </div>
            <div class="nc-b" id="nc-b2">
                <h3>Favorites</h3>
                <div class="top5block in-nav-catalog fbc_"></div>
            </div>
            <div class="nc-b" id="nc-b3">
                <h3>Sports</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-1"><div><h4>Balls games</h4></div></button>
                    <button class="nc-card" id="nc-card-2"><div><h4>Fittness</h4></div></button>
                    <button class="nc-card" id="nc-card-3"><div><h4>Running</h4></div></button>
                    <button class="nc-card" id="nc-card-4"><div><h4>Swimming</h4></div></button>
                    <button class="nc-card" id="nc-card-5"><div><h4>Sport costumes</h4></div></button>
                    <button class="nc-card" id="nc-card-6"><div><h4>Winter sports</h4></div></button>
                    <button class="nc-card" id="nc-card-7"><div><h4>Sports nutrition</h4></div></button>
                    <button class="nc-card" id="nc-card-8"><div><h4>Transport</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b4">
                <h3>Techniques</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-9"><div><h4>Fridges</h4></div></button>
                    <button class="nc-card" id="nc-card-10"><div><h4>Devices</h4><img src="../static/Products/apple_iphone_17_pro/apple_iphone_17_pro_img1.png"></div></button>
                    <button class="nc-card" id="nc-card-11"><div><h4>Watches</h4></div></button>
                    <button class="nc-card" id="nc-card-12"><div><h4>Computers</h4></div></button>
                    <button class="nc-card" id="nc-card-13"><div><h4>TVs</h4></div></button>
                    <button class="nc-card" id="nc-card-14"><div><h4>Consoles</h4><img src="../static/Products/sony_playstation_5/sony_playstation_5_img1.png"></div></button>
                    <button class="nc-card" id="nc-card-15"><div><h4>Accessories</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b5">
                <h3>Cosmetics</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-16"><div><h4>Accessories</h4></div></button>
                    <button class="nc-card" id="nc-card-17"><div><h4>Men</h4></div></button>
                    <button class="nc-card" id="nc-card-18"><div><h4>Women</h4></div></button>
                    <button class="nc-card" id="nc-card-19"><div><h4>Makeup</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b6">
                <h3>Toys</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-20"><div><h4>Board games</h4></div></button>
                    <button class="nc-card" id="nc-card-21"><div><h4>Transport</h4></div></button>
                    <button class="nc-card" id="nc-card-22"><div><h4>Constructors</h4></div></button>
                    <button class="nc-card" id="nc-card-23"><div><h4>LEGO ©</h4><img src="../static/Products/brands/LEGO.png" style="border-radius: 0;"></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b7">
                <h3>Furniture</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-24"><div><h4>Sofas</h4></div></button>
                    <button class="nc-card" id="nc-card-25"><div><h4>Beds</h4></div></button>
                    <button class="nc-card" id="nc-card-26"><div><h4>Curtains</h4></div></button>
                    <button class="nc-card" id="nc-card-27"><div><h4>Chairs</h4></div></button>
                    <button class="nc-card" id="nc-card-28"><div><h4>Tables</h4></div></button>
                    <button class="nc-card" id="nc-card-29"><div><h4>Clocks</h4></div></button>
                    <button class="nc-card" id="nc-card-30"><div><h4>Decorations</h4></div></button>
                    <button class="nc-card" id="nc-card-31"><div><h4>Lamps</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b8">
                <h3>Clothes</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-32"><div><h4>Pants</h4></div></button>
                    <button class="nc-card" id="nc-card-33"><div><h4>T-Shirts</h4></div></button>
                    <button class="nc-card" id="nc-card-34"><div><h4>Shoes</h4></div></button>
                    <button class="nc-card" id="nc-card-35"><div><h4>Caps</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b9">
                <h3>Books</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-36"><div><h4>Russian authors</h4></div></button>
                    <button class="nc-card" id="nc-card-37"><div><h4>Japanese authors</h4></div></button>
                    <button class="nc-card" id="nc-card-38"><div><h4>Comics</h4></div></button>
                    <button class="nc-card" id="nc-card-39"><div><h4>Other</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b10">
                <h3>Bags</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-40"><div><h4>Wallets</h4></div></button>
                    <button class="nc-card" id="nc-card-41"><div><h4>Bags</h4></div></button>
                    <button class="nc-card" id="nc-card-42"><div><h4>Backpacks</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b11">
                <h3>Hiking</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-43"><div><h4>Tents</h4></div></button>
                    <button class="nc-card" id="nc-card-44"><div><h4>Pumps</h4></div></button>
                    <button class="nc-card" id="nc-card-45"><div><h4>Sleeping bags</h4></div></button>
                </div>
            </div>
            <div class="nc-b" id="nc-b12">
                <h3>Health</h3>
                <div class="nc-cards">
                    <button class="nc-card" id="nc-card-46"><div><h4>Medical equipment</h4></div></button>
                    <button class="nc-card" id="nc-card-47"><div><h4>Optics</h4></div></button>
                    <button class="nc-card" id="nc-card-48"><div><h4>Other</h4></div></button>
                </div>
            </div>
        </div>
`

document.querySelector(".navigation-wreaper").innerHTML += navigation;
document.querySelector(".nav-mobile").innerHTML += nav_mobile;
document.querySelector(".nav-catalog").innerHTML += nav_catalog_menu;

const nav_catalog = document.getElementById("nav-catalog");
const close_catalog_btn = document.getElementById("close-catalog_btn");
const open_catalog_btn = document.getElementById("open-catalog_btn");
nav_catalog.style.overflowX = "hidden";
var catalog = 0;

close_catalog_btn.onclick = function(){
    catalog1();
}
open_catalog_btn.onclick = function(){
    catalog1();
}

function catalog1(){
    if(catalog === 0){
        nav_catalog.style.top = '0';
        body.style.overflowY = "hidden";
        nav_catalog.style.overflowY = "scroll";
        catalog++;
    }else{
        nav_catalog.style.top = '-110%';
        body.style.overflowY = "scroll";
        nav_catalog.style.overflowY = "hidden";
        catalog--;
    }
}

const selector_btn_1 = document.getElementById("selector_btn_1");
const selector_btn_2 = document.getElementById("selector_btn_2");
const selector_btn_3 = document.getElementById("selector_btn_3");
const selector_btn_4 = document.getElementById("selector_btn_4");
const selector_btn_5 = document.getElementById("selector_btn_5");
const selector_btn_6 = document.getElementById("selector_btn_6");
const selector_btn_7 = document.getElementById("selector_btn_7");
const selector_btn_8 = document.getElementById("selector_btn_8");
const selector_btn_9 = document.getElementById("selector_btn_9");
const selector_btn_10 = document.getElementById("selector_btn_10");
const selector_btn_11 = document.getElementById("selector_btn_11");
const selector_btn_12 = document.getElementById("selector_btn_12");


var selector = 1;

const nc_b1 = document.getElementById("nc-b1");
const nc_b2 = document.getElementById("nc-b2");
const nc_b3 = document.getElementById("nc-b3");
const nc_b4 = document.getElementById("nc-b4");
const nc_b5 = document.getElementById("nc-b5");
const nc_b6 = document.getElementById("nc-b6");
const nc_b7 = document.getElementById("nc-b7");
const nc_b8 = document.getElementById("nc-b8");
const nc_b9 = document.getElementById("nc-b9");
const nc_b10 = document.getElementById("nc-b10");
const nc_b11 = document.getElementById("nc-b11");
const nc_b12 = document.getElementById("nc-b12");

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
selector_btn_7.onclick = function(){
    selector = 7;
    selectt();
}
selector_btn_8.onclick = function(){
    selector = 8;
    selectt();
}
selector_btn_9.onclick = function(){
    selector = 9;
    selectt();
}
selector_btn_10.onclick = function(){
    selector = 10;
    selectt();
}
selector_btn_11.onclick = function(){
    selector = 11;
    selectt();
}
selector_btn_12.onclick = function(){
    selector = 12;
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
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(0%)';
        nc_b2.style.transform = 'translateX(0%)';
        nc_b3.style.transform = 'translateX(0%)';
        nc_b4.style.transform = 'translateX(0%)';
        nc_b5.style.transform = 'translateX(0%)';
        nc_b6.style.transform = 'translateX(0%)';
        nc_b7.style.transform = 'translateX(0%)';
        nc_b8.style.transform = 'translateX(0%)';
        nc_b9.style.transform = 'translateX(0%)';
        nc_b10.style.transform = 'translateX(0%)';
        nc_b11.style.transform = 'translateX(0%)';
        nc_b12.style.transform = 'translateX(0%)';
    }
    if(selector === 2){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#4A4A4A';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-100%)';
        nc_b2.style.transform = 'translateX(-100%)';
        nc_b3.style.transform = 'translateX(-100%)';
        nc_b4.style.transform = 'translateX(-100%)';
        nc_b5.style.transform = 'translateX(-100%)';
        nc_b6.style.transform = 'translateX(-100%)';
        nc_b7.style.transform = 'translateX(-100%)';
        nc_b8.style.transform = 'translateX(-100%)';
        nc_b9.style.transform = 'translateX(-100%)';
        nc_b10.style.transform = 'translateX(-100%)';
        nc_b11.style.transform = 'translateX(-100%)';
        nc_b12.style.transform = 'translateX(-100%)';
    }
    if(selector === 3){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-200%)';
        nc_b2.style.transform = 'translateX(-200%)';
        nc_b3.style.transform = 'translateX(-200%)';
        nc_b4.style.transform = 'translateX(-200%)';
        nc_b5.style.transform = 'translateX(-200%)';
        nc_b6.style.transform = 'translateX(-200%)';
        nc_b7.style.transform = 'translateX(-200%)';
        nc_b8.style.transform = 'translateX(-200%)';
        nc_b9.style.transform = 'translateX(-200%)';
        nc_b10.style.transform = 'translateX(-200%)';
        nc_b11.style.transform = 'translateX(-200%)';
        nc_b12.style.transform = 'translateX(-200%)';
    }
    if(selector === 4){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_4.style.backgroundColor = '#4A4A4A';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-300%)';
        nc_b2.style.transform = 'translateX(-300%)';
        nc_b3.style.transform = 'translateX(-300%)';
        nc_b4.style.transform = 'translateX(-300%)';
        nc_b5.style.transform = 'translateX(-300%)';
        nc_b6.style.transform = 'translateX(-300%)';
        nc_b7.style.transform = 'translateX(-300%)';
        nc_b8.style.transform = 'translateX(-300%)';
        nc_b9.style.transform = 'translateX(-300%)';
        nc_b10.style.transform = 'translateX(-300%)';
        nc_b11.style.transform = 'translateX(-300%)';
        nc_b12.style.transform = 'translateX(-300%)';
    }
    if(selector === 5){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-400%)';
        nc_b2.style.transform = 'translateX(-400%)';
        nc_b3.style.transform = 'translateX(-400%)';
        nc_b4.style.transform = 'translateX(-400%)';
        nc_b5.style.transform = 'translateX(-400%)';
        nc_b6.style.transform = 'translateX(-400%)';
        nc_b7.style.transform = 'translateX(-400%)';
        nc_b8.style.transform = 'translateX(-400%)';
        nc_b9.style.transform = 'translateX(-400%)';
        nc_b10.style.transform = 'translateX(-400%)';
        nc_b11.style.transform = 'translateX(-400%)';
        nc_b12.style.transform = 'translateX(-400%)';
    }
    if(selector === 6){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-500%)';
        nc_b2.style.transform = 'translateX(-500%)';
        nc_b3.style.transform = 'translateX(-500%)';
        nc_b4.style.transform = 'translateX(-500%)';
        nc_b5.style.transform = 'translateX(-500%)';
        nc_b6.style.transform = 'translateX(-500%)';
        nc_b7.style.transform = 'translateX(-500%)';
        nc_b8.style.transform = 'translateX(-500%)';
        nc_b9.style.transform = 'translateX(-500%)';
        nc_b10.style.transform = 'translateX(-500%)';
        nc_b11.style.transform = 'translateX(-500%)';
        nc_b12.style.transform = 'translateX(-500%)';
    }
    if(selector === 7){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-600%)';
        nc_b2.style.transform = 'translateX(-600%)';
        nc_b3.style.transform = 'translateX(-600%)';
        nc_b4.style.transform = 'translateX(-600%)';
        nc_b5.style.transform = 'translateX(-600%)';
        nc_b6.style.transform = 'translateX(-600%)';
        nc_b7.style.transform = 'translateX(-600%)';
        nc_b8.style.transform = 'translateX(-600%)';
        nc_b9.style.transform = 'translateX(-600%)';
        nc_b10.style.transform = 'translateX(-600%)';
        nc_b11.style.transform = 'translateX(-600%)';
        nc_b12.style.transform = 'translateX(-600%)';
    }
    if(selector === 8){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-700%)';
        nc_b2.style.transform = 'translateX(-700%)';
        nc_b3.style.transform = 'translateX(-700%)';
        nc_b4.style.transform = 'translateX(-700%)';
        nc_b5.style.transform = 'translateX(-700%)';
        nc_b6.style.transform = 'translateX(-700%)';
        nc_b7.style.transform = 'translateX(-700%)';
        nc_b8.style.transform = 'translateX(-700%)';
        nc_b9.style.transform = 'translateX(-700%)';
        nc_b10.style.transform = 'translateX(-700%)';
        nc_b11.style.transform = 'translateX(-700%)';
        nc_b12.style.transform = 'translateX(-700%)';
    }
    if(selector === 9){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-800%)';
        nc_b2.style.transform = 'translateX(-800%)';
        nc_b3.style.transform = 'translateX(-800%)';
        nc_b4.style.transform = 'translateX(-800%)';
        nc_b5.style.transform = 'translateX(-800%)';
        nc_b6.style.transform = 'translateX(-800%)';
        nc_b7.style.transform = 'translateX(-800%)';
        nc_b8.style.transform = 'translateX(-800%)';
        nc_b9.style.transform = 'translateX(-800%)';
        nc_b10.style.transform = 'translateX(-800%)';
        nc_b11.style.transform = 'translateX(-800%)';
        nc_b12.style.transform = 'translateX(-800%)';
    }
    if(selector === 10){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-900%)';
        nc_b2.style.transform = 'translateX(-900%)';
        nc_b3.style.transform = 'translateX(-900%)';
        nc_b4.style.transform = 'translateX(-900%)';
        nc_b5.style.transform = 'translateX(-900%)';
        nc_b6.style.transform = 'translateX(-900%)';
        nc_b7.style.transform = 'translateX(-900%)';
        nc_b8.style.transform = 'translateX(-900%)';
        nc_b9.style.transform = 'translateX(-900%)';
        nc_b10.style.transform = 'translateX(-900%)';
        nc_b11.style.transform = 'translateX(-900%)';
        nc_b12.style.transform = 'translateX(-900%)';
    }
    if(selector === 11){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-1000%)';
        nc_b2.style.transform = 'translateX(-1000%)';
        nc_b3.style.transform = 'translateX(-1000%)';
        nc_b4.style.transform = 'translateX(-1000%)';
        nc_b5.style.transform = 'translateX(-1000%)';
        nc_b6.style.transform = 'translateX(-1000%)';
        nc_b7.style.transform = 'translateX(-1000%)';
        nc_b8.style.transform = 'translateX(-1000%)';
        nc_b9.style.transform = 'translateX(-1000%)';
        nc_b10.style.transform = 'translateX(-1000%)';
        nc_b11.style.transform = 'translateX(-1000%)';
        nc_b12.style.transform = 'translateX(-1000%)';
    }
    if(selector === 12){
        selector_btn_1.style.backgroundColor = '#1E1E1E';
        selector_btn_2.style.backgroundColor = '#1E1E1E';
        selector_btn_12.style.backgroundColor = '#4A4A4A';
        selector_btn_4.style.backgroundColor = '#1E1E1E';
        selector_btn_3.style.backgroundColor = '#1E1E1E';
        selector_btn_5.style.backgroundColor = '#1E1E1E';
        selector_btn_6.style.backgroundColor = '#1E1E1E';
        selector_btn_7.style.backgroundColor = '#1E1E1E';
        selector_btn_8.style.backgroundColor = '#1E1E1E';
        selector_btn_9.style.backgroundColor = '#1E1E1E';
        selector_btn_10.style.backgroundColor = '#1E1E1E';
        selector_btn_11.style.backgroundColor = '#1E1E1E';

        nc_b1.style.transform = 'translateX(-1100%)';
        nc_b2.style.transform = 'translateX(-1100%)';
        nc_b3.style.transform = 'translateX(-1100%)';
        nc_b4.style.transform = 'translateX(-1100%)';
        nc_b5.style.transform = 'translateX(-1100%)';
        nc_b6.style.transform = 'translateX(-1100%)';
        nc_b7.style.transform = 'translateX(-1100%)';
        nc_b8.style.transform = 'translateX(-1100%)';
        nc_b9.style.transform = 'translateX(-1100%)';
        nc_b10.style.transform = 'translateX(-1100%)';
        nc_b11.style.transform = 'translateX(-1100%)';
        nc_b12.style.transform = 'translateX(-1100%)';
    }
}

const profile_menu = document.getElementById("profile-menu");
const open_profile_menu = document.getElementById("open-profile-menu");
var pm = 0;
profile_menu.style.transform = 'translateX(150%)';

open_profile_menu.onclick = function(){
    profile__menu();
}
function profile__menu(){
    if(pm === 0){
        pm = 1;
        profile_menu.style.transform = 'translateY(0)';
    }else{
        pm = 0;
        profile_menu.style.transform = 'translateX(150%)';
    }
}

var mb_data = 0;
const ncc1 = document.getElementById('nc-card-1');
const ncc2 = document.getElementById('nc-card-2');
const ncc3 = document.getElementById('nc-card-3');
const ncc4 = document.getElementById('nc-card-4');
const ncc5 = document.getElementById('nc-card-5');
const ncc6 = document.getElementById('nc-card-6');
const ncc7 = document.getElementById('nc-card-7');
const ncc8 = document.getElementById('nc-card-8');
const ncc9 = document.getElementById('nc-card-9');
const ncc10 = document.getElementById('nc-card-10');
const ncc11 = document.getElementById('nc-card-11');
const ncc12 = document.getElementById('nc-card-12');
const ncc13 = document.getElementById('nc-card-13');
const ncc14 = document.getElementById('nc-card-14');
const ncc15 = document.getElementById('nc-card-15');
const ncc16 = document.getElementById('nc-card-16');
const ncc17 = document.getElementById('nc-card-17');
const ncc18 = document.getElementById('nc-card-18');
const ncc19 = document.getElementById('nc-card-19');
const ncc20 = document.getElementById('nc-card-20');
const ncc21 = document.getElementById('nc-card-21');
const ncc22 = document.getElementById('nc-card-22');
const ncc23 = document.getElementById('nc-card-23');
const ncc24 = document.getElementById('nc-card-24');
const ncc25 = document.getElementById('nc-card-25');
const ncc26 = document.getElementById('nc-card-26');
const ncc27 = document.getElementById('nc-card-27');
const ncc28 = document.getElementById('nc-card-28');
const ncc29 = document.getElementById('nc-card-29');
const ncc30 = document.getElementById('nc-card-30');
const ncc31 = document.getElementById('nc-card-31');
const ncc32 = document.getElementById('nc-card-32');
const ncc33 = document.getElementById('nc-card-33');
const ncc34 = document.getElementById('nc-card-34');
const ncc35 = document.getElementById('nc-card-35');
const ncc36 = document.getElementById('nc-card-36');
const ncc37 = document.getElementById('nc-card-37');
const ncc38 = document.getElementById('nc-card-38');
const ncc39 = document.getElementById('nc-card-39');
const ncc40 = document.getElementById('nc-card-40');
const ncc41 = document.getElementById('nc-card-41');
const ncc42 = document.getElementById('nc-card-42');
const ncc43 = document.getElementById('nc-card-43');
const ncc44 = document.getElementById('nc-card-44');
const ncc45 = document.getElementById('nc-card-45');
const ncc46 = document.getElementById('nc-card-46');
const ncc47 = document.getElementById('nc-card-47');
const ncc48 = document.getElementById('nc-card-48');

ncc1.onclick = function() {
    mb_data = 1;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc2.onclick = function() {
    mb_data = 2;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc3.onclick = function() {
    mb_data = 3;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc4.onclick = function() {
    mb_data = 4;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc5.onclick = function() {
    mb_data = 5;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc6.onclick = function() {
    mb_data = 6;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc7.onclick = function() {
    mb_data = 7;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc8.onclick = function() {
    mb_data = 8;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc9.onclick = function() {
    mb_data = 9;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc10.onclick = function() {
    mb_data = 10;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc11.onclick = function() {
    mb_data = 11;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc12.onclick = function() {
    mb_data = 12;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc13.onclick = function() {
    mb_data = 13;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc14.onclick = function() {
    mb_data = 14;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc15.onclick = function() {
    mb_data = 15;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc16.onclick = function() {
    mb_data = 16;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc17.onclick = function() {
    mb_data = 17;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc18.onclick = function() {
    mb_data = 18;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc19.onclick = function() {
    mb_data = 19;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc20.onclick = function() {
    mb_data = 20;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc21.onclick = function() {
    mb_data = 21;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc22.onclick = function() {
    mb_data = 22;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc23.onclick = function() {
    mb_data = 23;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc24.onclick = function() {
    mb_data = 24;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc25.onclick = function() {
    mb_data = 25;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc26.onclick = function() {
    mb_data = 26;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc27.onclick = function() {
    mb_data = 27;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc28.onclick = function() {
    mb_data = 28;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc29.onclick = function() {
    mb_data = 29;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc30.onclick = function() {
    mb_data = 30;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc31.onclick = function() {
    mb_data = 31;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc32.onclick = function() {
    mb_data = 32;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc33.onclick = function() {
    mb_data = 33;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc34.onclick = function() {
    mb_data = 34;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc35.onclick = function() {
    mb_data = 35;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc36.onclick = function() {
    mb_data = 36;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc37.onclick = function() {
    mb_data = 37;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc38.onclick = function() {
    mb_data = 38;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc39.onclick = function() {
    mb_data = 39;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc40.onclick = function() {
    mb_data = 40;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc41.onclick = function() {
    mb_data = 41;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc42.onclick = function() {
    mb_data = 42;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc43.onclick = function() {
    mb_data = 43;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc44.onclick = function() {
    mb_data = 44;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc45.onclick = function() {
    mb_data = 45;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc46.onclick = function() {
    mb_data = 46;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc47.onclick = function() {
    mb_data = 47;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}
ncc48.onclick = function() {
    mb_data = 48;
    localStorage.setItem("mb_data", mb_data);
    window.location.href = "products";
}