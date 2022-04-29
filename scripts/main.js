// Page de démarrage du navigateur
// -- pour les fonctionnalités aléatoires, possibilité via bouton de faire un appel api pour autre aléatoire
// - responsive
// - DONE -afficher l'heure (coin haut gauche)
// - DONE -fond d'écran aléatoire via api ou parmi une gallerie correspondant au moment de la journee
// - DONE - citation aléatoire (centre centre)
// - DONE - météo du jour  (coin haut droit) 
// - todo list (panneau coulissant via menu hamburger)
// - liens vers sites choisis (recuperer icones)
// -> dailyhabits, todoist, spotify, github
// - DONE -ajouter favicon
// - habitudes
// - loader si necessaire pour les appels api


// Imports
import fetchQuote from './quote.js'
import APIKEY from "../config.js"


// ==== Date related features ====
// ---- Title ----
const daysFr = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
const monthsFr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

const today = new Date()
const date = `${daysFr[today.getDay()]} ${today.getDate()} ${monthsFr[today.getMonth()]} ${today.getFullYear()}`

document.title = date

// ---- Background image ----
if (today.getHours() > 5 && today.getHours() <= 12 ){
    document.body.style.backgroundImage = `url('../img/background/morning.jpg')`
}
else if (today.getHours() > 12 && today.getHours() <= 18 ){
    document.body.style.backgroundImage = `url('../img/background/afternoon.jpg')`
}
else if (today.getHours() > 18 && today.getHours() <= 22 ){
    document.body.style.backgroundImage = `url('../img/background/evening.jpg')`
}
else {
    document.body.style.backgroundImage = `url('../img/background/night.jpg')`
}

// ---- Display time ----
const timeDisplay = document.createElement('h3')
document.querySelector('.time--block').appendChild(timeDisplay)
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


// ==== Weather ====
// DOM Elements
const weatherInfo = document.querySelector('.weather--info')
const weatherImg = document.querySelector('.weather--icon')

// url with coordinates of Raismes
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.39285470015645&lon=3.48138749436398&lang=fr&units=metric&appid=${APIKEY}`
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const weatherLocation = document.createElement('h2')
        weatherLocation.innerText = data.timezone
        weatherInfo.appendChild(weatherLocation)

        const weatherDescription = document.createElement('h3')
        weatherDescription.innerText = data.current.weather[0].description
        weatherInfo.appendChild(weatherDescription)

        const weatherTemp = document.createElement('h3')
        weatherTemp.innerText = `${Math.trunc(data.current.temp)}°`
        weatherInfo.appendChild(weatherTemp)


        const weatherIcon = document.createElement('img')
        weatherIcon.setAttribute('src',`../img/weatherIcons/${data.current.weather[0].icon}.svg`)
        weatherImg.appendChild(weatherIcon)
    })







