window.addEventListener('load', function() { 
    var footerContent = `
    <footer>
        <div style="display: flex; justify-content: center; gap: 30px;">
            <img src="img/cards/visa.svg" alt="Visa">
            <img src="img/cards/maestro.svg" alt="Maestro">
            <img src="img/cards/mastercard.svg" alt="Mastercard">
        </div>
        <div class="footer-container">
            <div class="footer-container-card">
                <h4>Nakupování</h4>
                <p>Možnosti doručení</p>
                <p>Možnosti platby</p>
                <p>Reklamace a vrácení</p>
                <p>Nákup na splátky</p>
            </div>
            <div class="footer-container-card">
                <h4>Objednávky</h4>
                <p>Stav objednávky</p>
                <p>Stav reklamace</p>
                <p>Nejčastější dotazy</p>
            </div>
            <div class="footer-container-card">
                <h4>O nás</h4>
                <p>Kontakty</p>
                <p>Základní informace</p>
                <p>Pro média</p>
            </div>
        </div>
        <p>&copy; Studenti PEF 2023 - Všechna práva vyhrazena.</p>
    </footer>
    `;

    document.getElementById("footerContainer").innerHTML = footerContent;
});