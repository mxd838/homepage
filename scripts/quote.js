function fetchQuote(quoteSentence, quoteAuthor){
    fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteSentence.innerText = data.content
        quoteAuthor.innerText = `- ${data.author}`
    })
}

export default fetchQuote



