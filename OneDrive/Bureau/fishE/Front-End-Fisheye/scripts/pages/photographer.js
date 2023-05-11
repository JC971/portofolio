

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


  });
 
  });
  

