window.addEventListener('load', function() {    
    if (document.body.id === "searchPage") {
        // Získání dotazového řetězce z URL
        const urlParams = new URLSearchParams(window.location.search);
        
        // Získání hodnoty parametru 'q' z dotazového řetězce
        const searchQuery = urlParams.get('q');
        
        // Vložení hodnoty do elementu s ID 'searchQuery'
        document.getElementById('searchQuery').textContent = searchQuery;
    }
});
