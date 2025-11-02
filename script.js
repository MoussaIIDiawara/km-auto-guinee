// script.js

console.log("✅ Script chargé");

const voitures = document.querySelectorAll('.car');

voitures.forEach(voiture => {
    const img = voiture.querySelector('img');
    const btn = voiture.querySelector('.btn');

    // Zoom au survol de l'image
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.border = '2px solid #f39c12';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.border = '1px solid #ddd';
    });

    // Clic sur "Voir plus"
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`🚗 Vous allez voir le détail de : ${voiture.querySelector('h3').innerText}`);
    });
});
