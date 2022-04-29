// Page de démarrage du navigateur
// -- pour les fonctionnalités aléatoires, possibilité via bouton de faire un appel api pour autre aléatoire
// - responsive
// - afficher l'heure (coin haut gauche)
// - DONE -fond d'écran aléatoire via api ou parmi une gallerie correspondant au moment de la journee
// - DONE - citation aléatoire (centre centre)
// - météo du jour et prévisions pour les jours à venir (coin haut droit)
// - todo list (panneau coulissant via menu hamburger)
// - liens vers sites choisis (recuperer icones)
// -> dailyhabits, todoist, spotify, gmail, protonmail, github, poleemploi, bnp, bourso
// - DONE -ajouter favicon
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

// ---- Background image ----
// set the background image according to the hour of the day
// make it responsive
if (today.getHours() > 5 && today.getHours() <= 12 ){
    document.body.style.backgroundImage = `url('../img/morning.jpg')`
}
else if (today.getHours() > 12 && today.getHours() <= 18 ){
    document.body.style.backgroundImage = `url('../img/afternoon.jpg')`
}
else if (today.getHours() > 18 && today.getHours() <= 22 ){
    document.body.style.backgroundImage = `url('../img/evening.jpg')`
}
else {
    document.body.style.backgroundImage = `url('../img/night.jpg')`
}

// ---- Display time ----
const timeDisplay = document.querySelector('.time--block')
let hours, minutes, seconds

function changeTime(){
    const currentTime = new Date()
    hours = currentTime.getHours()
    minutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()
    timeDisplay.innerText = `${hours}:${minutes}`
}
setInterval(changeTime, 1000)



// ==== Motivational quote ====
const quoteSentence = document.querySelector('.quote--block > h2')
const quoteAuthor = document.querySelector('.quote--block > h3')

fetchQuote(quoteSentence, quoteAuthor)
 
