let words = [];

document.addEventListener('DOMContentLoaded', async function () {
    fetchWords();

});


document.getElementById('wordInput').addEventListener('input', function(event) {
    const inputWords = event.target.value.split(' ');
    const displayWords = document.getElementById('wordDisplay').innerText.split(' ');

    for (let i = 0; i < inputWords.length; i++) {
        if (inputWords[i] === displayWords[i]) {
            // Make the word green
            displayWords[i] = `<span style="color: green;">${displayWords[i]}</span>`;
        } else {
            // Make the word red
            displayWords[i] = `<span style="color: red;">${displayWords[i]}</span>`;
        }
    }

    document.getElementById('wordDisplay').innerHTML = displayWords.join(' ');
});


async function fetchWords() {
    fetch('words.json')
    .then(response => response.json())
    .then(data => {
        const words = data.Wörter;
        displayRandomWords(words);
    })
    .catch(error => console.error('Error:', error));
}

function displayRandomWords(words) {
    const randomWords = words;
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
    }
    document.getElementById('wordDisplay').innerText = randomWords.join(' ');
}