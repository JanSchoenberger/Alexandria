const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random"
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById("quoteInput")

function getRandomQuote(){

    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function getNextQuote(){

    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = quote
    quoteInputElement.innerText = null
}
//Programmierung in diesem Teil.
getNextQuote()