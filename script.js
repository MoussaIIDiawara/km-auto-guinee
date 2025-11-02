// Sélectionne toutes les voitures
const cars = document.querySelectorAll('.car');

// Parcourt chaque voiture pour ajouter les événements
cars.forEach(car => {
  const img = car.querySelector('img');  // l'image de la voiture
  const btn = car.querySelector('.btn'); // le bouton "Voir plus"

  // Effet au survol de l'image
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.borderColor = '#f39c12'; // bordure orange
  });

  // Effet à la sortie de la souris
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.borderColor = '#ddd'; // bordure originale
  });

  // Clic sur le bouton "Voir plus"
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le lien de se charger pour l'instant
    alert(`Vous allez voir le détail de ${car.querySelector('h3').innerText}`);
  });
});
