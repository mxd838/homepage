function fetchQuote(quoteSentence, quoteAuthor){
    fetch('https://motivational-quote-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quoteSentence.innerText = data.quote
        quoteAuthor.innerText = `- ${data.person}`
    })
}

export default fetchQuote



