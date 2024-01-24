const imageDictionary = {
    'Abraham Lincoln' : 'Abraham_Lincoln.jpg',
    'Albert Einstein': 'Albert_Einstein.jpg',
    'Bob Dylan' : 'Bob_Dylan.jpg',
    'Charles Darwin': 'Charles_Darwin.jpg',
    'Elon Musk': 'Elon_Musk.jpg',
    'Galileo Galilei': 'Galileo_Galilei.jpg',
    'Isaac Newton': 'Isaac_Newton.jpg',
    'J.R.R Tolkin' : 'J_R_R_Tolkin.jpg',
    'John Lennon' : 'John_Lennon.jpg',
    'John Milton' : 'John_Milton.jpg',
    'Martin Luther King': "Martin_Luther_King.jpg"
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ
    // Füge hier weitere Einträge hinzu
    // Hier muss noch eingefügt werde, dass man verschiedenes eingeben kann.
    // Hier sollte man das eleganter mit einer Datei lösen.

    };

const imageContainer = document.getElementById('image-container');
const nameForm = document.getElementById('name-form');
const personNameInput = document.getElementById('text_input');
let lastDisplayedImageName= "";
let score = 0;
const scoreboardSpan = document.getElementById('score');
let remainingImages = Object.keys(imageDictionary);
const keys = Object.keys(imageDictionary);



document.addEventListener('DOMContentLoaded', function () {
    // Wird hier die Funktion doppelt ausgeführt ? -> Debuggen.
    showRandomImage()
    personNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert das Absenden des Formulars
            checkName();
        }
    });
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