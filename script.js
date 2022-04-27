// Page de démarrage du navigateur
// -- pour les fonctionnalités aléatoires, possibilité via bouton de faire un appel api pour autre aléatoire
// - responsive
// - fond d'écran aléatoire 
// - météo du jour et prévisions pour les jours à venir
// - todo list
// - liens vers sites choisis
// - habitudes

// Page title with current date
document.title = `${Date().slice(0,10)}`

// Random motivational quote
const quoteSentence = document.querySelector('.quote--block > h2')
const quoteAuthor = document.querySelector('.quote--block > h3')



fetch('https://motivational-quote-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        quoteSentence.innerText = data.quote
        quoteAuthor.innerText = `- ${data.person}`
    })
 
// Random background image

