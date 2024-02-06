//import confetti from 'canvas-confetti';

let lastDisplayedImageName= "";
let remainingImages = [];
let score = 0;
let imageDictionary = {};

const imageContainer = document.getElementById('image-container');
const nameForm = document.getElementById('name-form');
const personNameInput = document.getElementById('text_input');
const scoreboardSpan = document.getElementById('score');
const keys = Object.keys(imageDictionary);
const categorySelect = document.getElementById('category-select');
const amazonLink = document.getElementById('amazonBuecherKaufen');
const youtubeLink = document.getElementById('youtubeVideos');
const audibleLink = document.getElementById('audibleHoerbuecher');


var solutionButton = document.getElementById('solutionButton');
var skiptButton = document.getElementById('skiptButton');
var wikipediaButton = document.getElementById('wikipediaButton');
var amazonButton = document.getElementById('amazonButton');
var audibleButton = document.getElementById('audibleButton');
var youtubeButton = document.getElementById('youtubeButton');




// Bei Laden der Webseite:
document.addEventListener('DOMContentLoaded', async function () {
    
    const selectedCategory = localStorage.getItem('selectedCategory');
    
    if (selectedCategory) {
        categorySelect.value = selectedCategory;
    }

    fetch('http://localhost:3000/data')
    .then(response => {
        if (!response.ok) {
            return response.text().then(error => {
                throw new Error(error);
            });
        }
        return response.json();
    })
    .then(data => {
        // Hier können Sie die Daten verwenden.
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    await readJSON(categorySelect.value);
    remainingImages = Object.keys(imageDictionary);
    showRandomImage();

    personNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert das Absenden des Formulars
            checkName();
        }
    });

    solutionButton.addEventListener('click', function() {

        showSolution();

    });

    /*skiptButton.addEventListener('click', function() {
        markImageAsFinished();
        showRandomImage();
    });*/

    wikipediaButton.addEventListener('click', function() {
        
        searchWikipedia();
    });

    amazonButton.addEventListener('click', function() {
        updateAmazonLink();
    });

    audibleButton.addEventListener('click', function() {
        updateAudibleLink();
    });

    youtubeButton.addEventListener('click', function() {
        updateYoutubeLink();
    });

});

// Express Route
app.get('/person/:name', function(req, res) {
    var personName = req.params.name;
    var person = people[personName];

    // Überprüfen Sie, ob die Person existiert
    if (person) {
        // Wenn die Person existiert, rendern Sie die Seite mit den Personendaten
        res.render('person', person);
    } else {
        // Wenn die Person nicht existiert, senden Sie einen 404-Fehler
        res.status(404).send('Person not found');
    }
});


// Auswahl der Kategorie:
categorySelect.addEventListener('change', async function() {
    localStorage.setItem('selectedCategory', this.value);
    await readJSON(this.value);
    remainingImages = Object.keys(imageDictionary);
    showRandomImage();
});


// Shotcut Fokus auf das Eingabefeld:
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'i' and the control key is held down
    if (event.key === 'i' && event.ctrlKey) {
        // Prevent the default action to avoid possible conflicts with browser shortcuts
        event.preventDefault();

        // Get the input field
        var inputField = document.getElementById('text_input');
        inputField.focus();
    }
});

// Shotcut Lösung anzeigen:
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'i' and the control key is held down
    if (event.key === 's' && event.ctrlKey) {
        // Prevent the default action to avoid possible conflicts with browser shortcuts
        event.preventDefault();

        // Get the input field
        var inputField = document.getElementById('solutionButton');
        showSolution();
    }
});

// Shotcut Wikipedia:
document.addEventListener('keydown', function(event) {
    
    if (event.key === 'a' && event.ctrlKey) {
        // Prevent the default action to avoid possible conflicts with browser shortcuts
        event.preventDefault();

        // Get the input field
        var inputField = document.getElementById('wikipediaButton');
        searchWikipedia();
    }
});

  // Funktion zur Überprüfung des eingegebenen Namens
function checkName() {
    
    const enteredName = personNameInput.value.trim();
    const currentImageSrc = imageContainer.querySelector('img').src;
    const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());

    if (enteredName === currentImageName) {
    
        personNameInput.value = "";
        increaseScore();
        showRandomImage();

    } 
    else {
    
        alert('Falsch! Der eingegebene Name ist nicht korrekt.');
        // score = 0;
        // scoreboardSpan.textContent = score;
        personNameInput.value = "";

    }

    }

// Aktualisieren des Links, wenn eine neue Person angezeigt wird
function updateAmazonLink() {
    const currentImageSrc = imageContainer.querySelector('img').src;
    const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
    const baseUrl = 'https://www.amazon.de/gp/search?ie=UTF8&tag=alexandriaedu-21&linkCode=ur2&linkId=c785fd90e5b1a810d923555ed9945769&camp=1638&creative=6742&index=books&keywords=';
    amazonButton.href = baseUrl + encodeURIComponent(currentImageName);
}

function updateAudibleLink() {  
    const currentImageSrc = imageContainer.querySelector('img').src;
    const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
    const baseUrl = 'https://www.amazon.de/gp/search?ie=UTF8&tag=alexandriaedu-21&linkCode=ur2&linkId=072e2026fa90f9d3ba63312352418bed&camp=1638&creative=6742&index=audible&keywords=';
    audibleButton.href = baseUrl + encodeURIComponent(currentImageName);
}

function updateYoutubeLink() {  
    const currentImageSrc = imageContainer.querySelector('img').src;
    const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
    const baseUrl = 'https://www.youtube.com/results?search_query=';
    youtubeButton.href = baseUrl + encodeURIComponent(currentImageName);
}

// Funktion zum Anzeigen eines zufälligen Bildes
function showRandomImage() {
    
    
    checkDone(remainingImages);

    let randomIndex = Math.floor(Math.random() * remainingImages.length);
    let randomKey = remainingImages[randomIndex];

    // Remove the selected name from remainingImages
    remainingImages.splice(randomIndex, 1);

    const randomImageFileName = "images/" + imageDictionary[randomKey] ;

    const imageElement = document.createElement('img');
    imageElement.src = randomImageFileName; // Set the source of the imageElement

    const imageContainer = document.getElementById('image-container'); // Get the image container
    imageContainer.innerHTML = ''; // Clear the image container
    imageContainer.appendChild(imageElement); // Append the new image to the image container

    //updateAmazonLink(currentImageName);
    updateYoutubeLink    
    // Testpublishing für Ionos !
    }

function checkDone(remainingImages) {

    if (remainingImages.length === 0) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }

        });

        const playAgain = confirm('Alle Bilder wurden erraten! Möchten Sie nochmal spielen?');
        if (playAgain) {
            // Hier laden Sie die Bilder neu
            remainingImages = [...keys]; // Kopieren Sie alle Schlüssel aus dem imageDictionary in remainingImages
            score = 0; // Setzen Sie den Score zurück
            scoreboardSpan.textContent = score; // Aktualisieren Sie die Anzeige des Scores
            showRandomImage();
        }
}}

function increaseScore() {
        score++;
        scoreboardSpan.textContent = score;
    }

function showSolution() {
    
            const currentImageSrc = imageContainer.querySelector('img').src;
            const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
            alert(currentImageName);
    }

async function readJSON(filePath) {
        if (filePath === "random") {
            const response = await fetch('image_dictionary.json');
            const data = await response.json();
            imageDictionary = data;

            // const response = await fetch('./kategories/painter.json'); //image_dictionary.json');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        }

    
        
        else {
            const response = await fetch(`./kategories/${filePath}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            imageDictionary = data;
        }

    }

function searchWikipedia() {
        
        const currentImageSrc = imageContainer.querySelector('img').src;
        const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
        const url = "https://de.wikipedia.org/wiki/" + currentImageName;
        window.open(url, '_blank');
    }



