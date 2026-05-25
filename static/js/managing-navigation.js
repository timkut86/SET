const navigation = `
        <div class="nav-part-1">
            <div class="navigation-button nb-s" id="nb-m">
                <div class="navigation-button nb-m" id="nb-m" style="background: url(icons/Dark/More\ vertical.svg);">
                    <a href=""></a>
                </div>
            </div>
            <div class="navigation-button" id="nb-logo">
                <a href=""><h1>SET</h1></a>
            </div>
            <div class="navigation-button" id="nb">
                <a href="" id="regular">Home</a>
            </div>
            <div class="navigation-button" id="nb">
                <button id="open-catalog_btn">Catalog</button>
            </div>
            <div class="navigation-button" id="nb">
                <a href="" id="regular">About</a>
            </div>
        </div>
        <div class="navigation-search">
            <a href="search.html"><img src="icons/Dark/Search.svg"></a>
            <input type="search" name="search" placeholder="Search..."> <!--ICON and TEXT-->
        </div>
        <div class="nav-part-2">
            <div class="navigation-button nb-s" id="nb-icon" style="background: url(icons/Dark/Search\ \(1\).svg);">
                <a href=""></a>
            </div>
            <div class="navigation-button nb-" id="nb-icon" style="background: url(icons/Dark/Bell.svg);">
                <a href=""></a>
            </div>
            <div class="navigation-button nb-n" id="nb-icon" style="background: url(icons/Dark/Shopping\ cart.svg);">
                <a href=""></a>
            </div>
            <div class="navigation-button" id="nb-icon" style="background: url(icons/Dark/Rectangle\ 15.svg);">
                <a href=""></a>
            </div>
        </div>
`
document.querySelector(".navigation").innerHTML += navigation;