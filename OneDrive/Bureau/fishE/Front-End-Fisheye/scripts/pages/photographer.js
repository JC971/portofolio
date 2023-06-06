/*
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    
  
    
  }

  return { name, picture, city, country, price, id, getUserCardDOM };

};




// Récupérer tous les liens 
const links = document.querySelectorAll('a');


// Ajoute d'un gestionnaire d'événements 
links.forEach(link => {
  link.addEventListener('click', event => {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
     
    // Récupérer l'ID du photographe à partir de l'élément HTML
    const photographerIdent = link.id;

    // Construire la nouvelle URL avec l'ID du photographe en tant que paramètre de requête
    const newUrl = `https://Front-End-Fisheye\photographer.html?id=${photographerIdent}`;
   
    window.location.href = newUrl;
  });

 
});

const url = window.location.href;
console.log('url de la page est', url);
let arr = url.split("=")[1];



//




fetch('data/photographers.json')
  .then(response => response.json())
  .then(data => {
    const photographers = data['photographers'];

    for (let i = 0; i < photographers.length; i++) {
      const photographerData = photographers[i];

      
      
      let nom = document.getElementById('nom');
      nom.innerHTML = photographerData.name;
      
 
      
    }
  });*/


function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Code pour générer et retourner la carte utilisateur
  }

  return { name, picture, city, country, price, id, getUserCardDOM };
}

// Récupérer tous les liens
const links = document.querySelectorAll('a');

// Ajouter un gestionnaire d'événements à chaque lien
links.forEach(link => {
  link.addEventListener('click', event => {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Récupérer l'ID du photographe à partir de l'élément HTML
    const photographerId = link.id;

    // Construire la nouvelle URL avec l'ID du photographe en tant que paramètre de requête
    const newUrl = `https://Front-End-Fisheye/photographer.html?id=${photographerId}`;

    window.location.href = newUrl;
  });
});

const url = window.location.href;
console.log('L\'URL de la page est', url);
let photographerId = url.split('=')[1];

fetch('data/photographers.json')
  .then(response => response.json())
  .then(data => {
    const photographers = data.photographers;

    for (let i = 0; i < photographers.length; i++) {
      const photographerData = photographers[i];
      
      // Vérifier si l'ID du photographe correspond à celui extrait de l'URL
      if (photographerData.id === photographerId) {
        // Afficher les détails du photographe
        let nom = document.getElementById('nom');
        nom.innerHTML = photographerData.name;

        // Ajouter le reste du code pour afficher les autres détails du photographe
        // ...

        break; // Sortir de la boucle une fois que le photographe correspondant est trouvé
      }
    }
  });






 







  



  



    


