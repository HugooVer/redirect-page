(function() {
    console.log("Injection du script pour exécuter lienm");

    function tryExecuteLienm() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const number = params.get('number');

        if (typeof lienm === 'function') {
            console.log("Exécution automatique de lienm avec :", id, number);
            lienm(id, number);
        } else {
            console.log("Attente de lienm...");
            setTimeout(tryExecuteLienm, 500); // Réessaye toutes les 500ms
        }
    }

    window.addEventListener('load', tryExecuteLienm);
})();