let imageDictionary = {};
let lastDisplayedImageName= "";
let remainingImages = [];
let score = 0;

const imageContainer = document.getElementById('image-container');
const nameForm = document.getElementById('name-form');
const personNameInput = document.getElementById('text_input');
const scoreboardSpan = document.getElementById('score');
const keys = Object.keys(imageDictionary);

document.addEventListener('DOMContentLoaded', async function () {
    // Wird hier die Funktion doppelt ausgeführt ? -> Debuggen.
    await readJSON();
    remainingImages = Object.keys(imageDictionary);
    showRandomImage()
    personNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert das Absenden des Formulars
            checkName();
        }
    });

    var solutionButton = document.getElementById('solutionButton');
    
    solutionButton.addEventListener('click', function() {

        showSolution();

    });


    var wikipediaButton = document.getElementById('wikipediaButton');

    wikipediaButton.addEventListener('click', function() {
        searchWikipedia();
    });

    


});

// Zugriff auf das select-Element
const categorySelect = document.getElementById('category-select');

// Hinzufügen eines Event-Listeners für das change-Event
categorySelect.addEventListener('change', async function() {
    // Zugriff auf den Wert der ausgewählten Option
    const selectedCategory = this.value;
    console.log(selectedCategory);
    // Pfad zur JSON-Datei basierend auf der ausgewählten Kategorie
    const jsonFilePath = `./kategories/${selectedCategory}.json`;
    // Aufruf der readJSON-Funktion mit dem Pfad zur JSON-Datei
    await readJSON(jsonFilePath);
    // Es muss auch noch eine Random Kateogrie ausgewählt werden.
});




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

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'i' && event.ctrlKey) {
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
    
        //alert('Richtig! Der eingegebene Name ist korrekt.');
        personNameInput.value = "";
        increaseScore();
        showRandomImage();
    } 
    else {
    
        alert('Falsch! Der eingegebene Name ist nicht korrekt.');
        score = 0;
        scoreboardSpan.textContent = score;
        personNameInput.value = "";

    }

    }

// Funktion zum Anzeigen eines zufälligen Bildes
function showRandomImage() {
    
    console.log(remainingImages);
    if (remainingImages.length === 0) {
        alert('Alle Bilder wurden angezeigt.');
        return;
    }

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

    }

function increaseScore() {
        score++;
        scoreboardSpan.textContent = score;
    }

function showSolution() {
    
            const currentImageSrc = imageContainer.querySelector('img').src;
            const currentImageName = Object.keys(imageDictionary).find(key => imageDictionary[key] === currentImageSrc.split('/').pop());
            alert(currentImageName);
    }

async function readJSON() {

        const response = await fetch('image_dictionary.json');
       // const response = await fetch('./kategories/painter.json'); //image_dictionary.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        imageDictionary = data;
    }