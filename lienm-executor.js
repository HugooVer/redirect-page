(function() {
    console.log("Script externe pour exécuter lienm chargé");

    function tryExecuteLienm() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const number = params.get('number');

        if (typeof lienm === 'function') {
            console.log("Exécution de lienm avec id :", id, "et number :", number);
            lienm(id, number);
        } else {
            console.log("Attente de lienm...");
            setTimeout(tryExecuteLienm, 1000); // Attente de 1 seconde avant le prochain essai
        }
    }

    window.addEventListener('load', function() {
        console.log("Page complètement chargée, exécution du script.");
        setTimeout(tryExecuteLienm, 2000); // Attente de 2 secondes avant d'essayer d'exécuter lienm
    });
})();
