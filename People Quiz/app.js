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

document.addEventListener('DOMContentLoaded', function () {
    // Wird hier die Funktion doppelt ausgeführt ? -> Debuggen.
    showRandomImage()
    personNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert das Absenden des Formulars
            checkName();
        }
    });
}


    
);

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
    
    const imageContainer = document.getElementById('image-container');
    const keys = Object.keys(imageDictionary);
    let randomKey;
    
    // Sicherstellen, dass das letzte Bild nicht doppelt gezeigt wird.
    do {
        randomKey = keys[Math.floor(Math.random() * keys.length)];
    } while (randomKey === lastDisplayedImageName);

    lastDisplayedImageName = randomKey;

    const randomImageFileName = imageDictionary[randomKey];

    const imageElement = document.createElement('img');
    imageElement.src = 'images/' + randomImageFileName;
    imageElement.alt = randomKey;

    // Leere das Bild-Container und füge das neue Bild hinzu
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
    }

    function increaseScore() {
        score++;
        scoreboardSpan.textContent = score;
    }