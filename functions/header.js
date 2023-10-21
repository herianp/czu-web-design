window.onload = function() {    
    var headerContent = `
    <header>                        
        <h3>Vítejte v našem E-shopu s Kurzy!</h3>
        <nav class="pc-nav">
            <div class="nav-container">
                <a href="index.html">Domů</a>
                <a href="kategorie.html">Kategorie</a>
                <a href="kontakty.html">Kontakt</a>
            </div>
            <div class="nav-container">
                <form action="vysledek_vyhledavani.html" method="get">
                    <input type="text" name="q" placeholder="Hledat..." class="searchbox">
                    <input type="submit" value="Hledat">
                </form>
                <a href="kosik.html">
                    <img src="img/cart.png" alt="Košík" width="25">
                </a>
                <a href="profil.html">
                    <img src="img/account.png" alt="Profil" width="25">
                </a>
            </div>
        </nav>
        <nav class="mobile-nav">
            <div class="dropdown">
                <a class="dropbtn" tabindex="0">
                    <img src="img/dropdown_menu_green.png" style="max-width: 50px;" alt="Button Image">
                </a>
                <div class="dropdown-content">
                    <a href="index.html">Domů</a>
                    <a href="kategorie.html">Kategorie</a>
                    <a href="kontakty.html">Kontakty</a>
                    <a href="kosik.html">Košík</a>
                    <a href="profil.html">Profil</a>
                </div>
            </div>
        </nav>
        <div class="mobile-nav search-container">
            <form action="vysledek_vyhledavani.html" method="get" class="search-form">
                <button class="search-btn">
                    <img src="img/magnifier.svg" alt="Hledat">
                </button>
                <input type="text" name="q" placeholder="Hledat..." class="searchbox">
            </form>
        </div>
    </header>
    `;

    document.getElementById("headerContainer").innerHTML = headerContent;
}