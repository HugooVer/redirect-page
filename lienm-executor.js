(function() {
    console.log("Script externe pour exécuter lienm chargé");

    function tryExecuteLienm() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const number = params.get('number');

        // Vérifier si lienm existe
        if (typeof lienm === 'function') {
            console.log("Exécution de lienm avec id :", id, "et number :", number);
            lienm(id, number);  // Exécution de la fonction lienm
        } else {
            console.log("Attente de lienm...");
            setTimeout(tryExecuteLienm, 500); // Réessaye toutes les 500ms
        }
    }

    // On s'assure que le script s'exécute après le chargement complet de la page
    window.addEventListener('load', function() {
        console.log("Page complètement chargée, exécution du script.");
        tryExecuteLienm();  // Essaye d'exécuter lienm
    });
})();