let words = [];
let displayIndex = 0;

document.addEventListener('DOMContentLoaded', async function () {
    fetchWords();
});
/*
document.getElementById('wordInput').addEventListener('input', function(event) {
    const inputWords = event.target.value.trim().split(' ');
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

    // If 10 words have been entered, remove them and display the next 10 words
    if (inputWords.length >= 10 && event.data === ' ') {
        event.target.value = '';
        displayIndex += 10;
        displayRandomWords(words);
    }
});*/

document.getElementById('wordInput').addEventListener('keyup', function(event) {
    if (event.key !== ' ') {
        return;
    }

    const inputWords = event.target.value.trim().split(' ');
    const displayWords = Array.from(document.getElementById('wordDisplay').children);

    for (let i = 0; i < inputWords.length; i++) {
        if (inputWords[i] === displayWords[i].innerText) {
            // Make the word green
            displayWords[i].style.color = 'green';
        } else if (inputWords[i] !== displayWords[i].innerText) {
            // Make the word red
            displayWords[i].style.color = 'red';
        }
    }

    // If 10 words have been entered, remove them and display the next 10 words
    if (inputWords.length >= 10) {
        event.target.value = '';
        displayIndex += 10;
        displayRandomWords(words);
    }
});



async function fetchWords() {
    fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = data.Wörter;
        displayRandomWords(words);
    })
    .catch(error => console.error('Error:', error));
}

function limitWords(words, start, limit) {
    return words.slice(start, start + limit);
}

function displayRandomWords(words) {
    const limitedWords = limitWords(words, displayIndex, 20);
    let wordGroups = [];
    for (let i = 0; i < limitedWords.length; i += 10) {
        let group = limitedWords.slice(i, i + 10);
        let groupHTML = group.map(word => `<span class="word">${word}</span>`).join('');
        wordGroups.push(`<div class="word-row">${groupHTML}</div>`);
    }
    document.getElementById('wordDisplay').innerHTML = wordGroups.join('');
}