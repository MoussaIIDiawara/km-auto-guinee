// Fonction appelée quand on survole une voiture
function survolVoiture(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.3s";
}

// Fonction appelée quand on quitte la voiture
function sortieVoiture(element) {
    element.style.transform = "scale(1)";
}

// Fonction pour afficher une alerte quand on clique sur "Voir plus"
function voirPlus(voiture) {
    alert("Vous allez voir plus de détails sur : " + voiture);
}
