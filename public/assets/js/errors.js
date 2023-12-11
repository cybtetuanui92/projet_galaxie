// console.log('assets/js/error.js chargé ✅');

// Liste des codes erreurs possibles avec leur message
const errors = {
    404: "Page introuvable",
    403: "Accès interdit",
    500: "Erreur interne du serveur",
    503: "Service indisponible"
} 






// Récupération du code d'erreur dans l'URL
let params = new URLSearchParams(window.location.search);
// Debug ⚙️: 
  console.log(params.get('error'));

// Conversion du code d'erreur en type nombre
let codeError = parseInt(params.get('error'));

// TODO: Affichage du code d'erreur dans l'élément HTML #error-code
document.getElementById('error-code').innerHTML = codeError;
// TODO: Affichage du message d'erreur dans l'élément HTML #error-message
document.getElementById('error-message').innerHTML = errors[codeError];
// Debug ⚙️: 
// console.log(errors[codeError]);