// Page de démarrage du navigateur
// -- pour les fonctionnalités aléatoires, possibilité via bouton de faire un appel api pour autre aléatoire
// - responsive
// - fond d'écran aléatoire (via api ou parmi une gallerie correspondant au moment de la journee)
// - météo du jour et prévisions pour les jours à venir
// - todo list
// - liens vers sites choisis
// - habitudes
// - loader si necessaire pour les appels api


// Imports
import fetchQuote from './quote.js'


// ==== Date related features ====
// ---- Title ----
const daysFr = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
const monthsFr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

const today = new Date()
const date = `${daysFr[today.getDay()]} ${today.getDate()} ${monthsFr[today.getMonth()]} ${today.getFullYear()}`

document.title = date

// --- Background image ---
// set the background image according to the hour of the day
// make it responsive
if (today.getHours() > 5 && today.getHours() <= 12 ){
    document.body.style.backgroundImage = `url('../img/morning.jpg')`
}
if (today.getHours() > 12 && today.getHours() <= 18 ){
    document.body.style.backgroundImage = `url('../img/afternoon.jpg')`
}
if (today.getHours() > 18 && today.getHours() <= 22 ){
    document.body.style.backgroundImage = `url('../img/evening.jpg')`
}
else {
    document.body.style.backgroundImage = `url('../img/night.jpg')`
}


// ==== Motivational quote ====
const quoteSentence = document.querySelector('.quote--block > h2')
const quoteAuthor = document.querySelector('.quote--block > h3')

fetchQuote(quoteSentence, quoteAuthor)
 
