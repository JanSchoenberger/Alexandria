const imageDictionary = {
    'Abraham Lincoln' : 'Abraham_Lincoln.jpg',
    //'Albert Camus': 'Albert_Camus.jpeg',
    'Albert Einstein': 'Albert_Einstein.jpg',
    'Aristoteles': 'Aristoteles.jpeg',
    'Arthur Schopenhauer': 'Arthur_Schopenhauer.jpg',
    //'Baruch de Spinoza': 'Baruch_de_Spinoza.jpeg',
    //'Benjamin Franklin': 'Benjamin_Franklin.jpeg',
    //'Bill Gates': 'Bill_Gates.jpeg',
    //'Buddha': 'Buddha.jpeg',
    //'Barack Obama' : 'Barack_Obama.jpg',
    //'Baruch de Spinoza' : 'Baruch_de_Spinoza.jpeg',
    //'Charles Dickens': 'Charles_Dickens.jpeg',
    'Bob Dylan' : 'Bob_Dylan.jpg',
    'Bertrand Russell' : 'Bertrand_Russell.jpg',
    'Bertolt Brecht' : 'Bertolt_Brecht.jpeg',
    //'Bruce Lee' : 'Bruce_Lee.jpg',
    //'Bruno Gröning' : 'Bruno_Gröning.jpg',
    // Heute werden hier noch Kategorien eingebaut, ich habe Bock !
    // Auch werde ich den Code weiter raffinieren.
    'Carl Friedrich Gauss': 'Carl_Friedrich_Gauss.jpeg',
    'Carl Gustav Jung': 'Carl_Gustav_Jung.jpeg',
    'Charles Darwin': 'Charles_Darwin.jpg',
    'Charlie Munger': 'Charlie_Munger.jpeg',
    'Elon Musk': 'Elon_Musk.jpg',
    //'Erwin Schrödinger': 'Erwin_Schrödinger.jpeg',
    //'Friedrich Nietzsche': 'Friedrich_Nietzsche.jpeg',
    //'Friedrich Schiller': 'Friedrich_Schiller.jpeg',
    //'Friedrich Wilhelm Joseph Schelling': 'Friedrich_Wilhelm_Joseph_Schelling.jpeg',
    
    'Galileo Galilei': 'Galileo_Galilei.jpg',
    'George Orwell': 'George_Orwell.jpeg',
    'George Washington': 'George_Washington.jpeg',
    'Gottfried Wilhelm Leibniz': 'Gottfried_Wilhelm_Leibniz.jpg',
    'Hans Rosling': 'Hans_Rosling.jpeg',
    'Henry Ford': 'Henry_Ford.jpeg',
    /* Noch einfügen
    'Homer': 'Homer.jpeg',
    'Immanuel Kant': 'Immanuel_Kant.jpeg',
    'Isaac Newton': 'Isaac_Newton.jpg',
    'Immanuel Kant': 'Immanuel_Kant.jpeg',
    'J.K. Rowling': 'J_K_Rowling.jpg',
    'Jane Goodall': 'Jane_Goodall.jpeg',
    'Jan Vermeer': 'Jan_Vermeer.jpeg',
    'Jane Austen': 'Jane_Austen.jpeg',
    'Johann Gottfried Herder': 'Johann_Gottfried_Herder.jpeg',
    */
    'Johann Sebastian Bach': 'Johann_Sebastian_Bach.jpeg',
    'Johann Wolfgang von Goethe': 'Johann_Wolfgang_von_Goethe.jpeg',
    'Johannes Gutenberg': 'Johannes_Gutenberg.jpeg',
    'Johannes Kepler': 'Johannes_Kepler.jpg',
    'J.R.R Tolkin' : 'J_R_R_Tolkin.jpg',
    'John Lennon' : 'John_Lennon.jpg',
    'John Milton' : 'John_Milton.jpg',
    'Linus Torvalds' : 'Linus_Torvalds.jpg',
    //'Leonardo da Vinci': 'Leonardo_da_Vinci.jpeg',
    //'Ludwig van Beethoven': 'Ludwig_van_Beethoven.jpeg',
    //'Mahatma Gandhi': 'Mahatma_Gandhi.jpeg',
    // 'Mark Twain': 'Mark_Twain.jpeg',
    // Autofocus auf das Inputfeld und Shortcut dazu !
    'Marie Curie' : 'Marie_Curie.jpeg',
    'Martin Luther King': "Martin_Luther_King.jpg",
    // Noch einfügen.
    'Martin Luther': 'Martin_Luther.jpg',
    'Max Planck': 'Max_Planck.jpeg',
    'Michael Dell': 'Michael_Dell.jpeg',
    'Michael Faraday': 'Michael_Faraday.jpeg',
    'Michael Jackson': 'Michael_Jackson.jpeg',
    'Michael Schumacher': 'Michael_Schumacher.jpeg',
    'Michel de Montaigne': 'Michel_de_Montaigne.jpeg',
    'Michelangelo': 'Michelangelo.jpeg',
    'Miguel de Cervantes': 'Miguel_de_Cervantes.jpeg',
    'Moses': 'Moses.jpg',
    'Muhammad Ali': 'Muhammad_Ali.jpg',
    'Napoleon Bonaparte': 'Napoleon_Bonaparte.jpeg',
    'Nelson Mandela': 'Nelson_Mandela.jpeg',
    'Nikolaus Kopernikus': 'Nikolaus_Kopernikus.jpg',
    //
    'Nikola Tesla': 'Nikola_Tesla.jpeg',
    'Platon': 'Platon.jpg',
    'Pablo Picasso': 'Pablo_Picasso.jpeg',
    'Paul McCartney': 'Paul_McCartney.jpeg',
    
    // Noch einfügen
    'Pythagoras': 'Pythagoras.jpg',
    'Rabindranath Tagore': 'Rabindranath_Tagore.jpeg',
    'Rene Descartes': 'Rene_Descartes.jpeg',
    'Richard Dawkins': 'Richard_Dawkins.jpeg',
    'Ralph Waldo Emerson': 'Ralph_Waldo_Emerson.jpeg',
    'Richard Feynman': 'Richard_Feynman.jpeg',
    'Richard Wagner': 'Richard_Wagner.jpg',
    'Robert Oppenheimer': 'Robert_Oppenheimer.jpg',
    'Robert Schumann': 'Robert_Schumann.jpeg',
    'Rosa Luxemburg': 'Rosa_Luxemburg.jpeg',
    'Rudolf Steiner': 'Rudolf_Steiner.jpeg',
    'Rudolf Virchow': 'Rudolf_Virchow.jpeg',
    'Rudyard Kipling': 'Rudyard_Kipling.jpeg',
    //

    'Richard Stallman': 'Richard_Stallman.jpeg',

    'Sigmund Freud': 'Sigmund_Freud.jpeg',
    'Sokrates': 'Sokrates.jpeg',
    'Sophie Scholl': 'Sophie_Scholl.jpeg',
    'Steve Jobs': 'Steve_Jobs.jpeg',
    'Steve Woziak': 'Steve_Woziak.jpeg',
    'Steven Pinker': 'Steven_Pinker.jpeg',
    'Steven Spielberg': 'Steven_Spielberg.jpeg',
    //'Stephen Hawking': 'Stephen_Hawking.jpeg',
    'Tim Berners-Lee': 'Tim_Berners_Lee.jpeg',
    'Thomas Alva Edison': 'Thomas_Alva_Edison.jpeg',
    //'Thomas Jefferson': 'Thomas_Jefferson.jpeg',
    //'Thomas Mann': 'Thomas_Mann.jpeg',
    //'Thomas Paine': 'Thomas_Paine.jpeg',
    //'Thomas von Aquin': 'Thomas_von_Aquin.jpeg',
    //'Victor Hugo': 'Victor_Hugo.jpeg',
    //'Voltaire': 'Voltaire.jpeg',
    'Vincent van Gogh': 'Vincent_van_Gogh.jpeg',
    'Warren Buffett': 'Warren_Buffett.jpeg',
    'Winston Churchill': 'Winston_Churchill.jpg',
    'Wolfgang Amadeus Mozart': 'Wolfgang_Amadeus_Mozart.jpeg',
    'William Shakespeare': 'William_Shakespeare.jpeg',
    'Walt Disney': 'Walt_Disney.jpeg',
    'Werner Heisenberg': 'Werner_Heisenberg.jpeg',




    // ABCDEFGHIJKLMNOPQRSTUVWXYZ
    // Früher oder später muss hier auch eine HTML Verschlüsselung rein.
    //Auch müssen Einzelbilder hier testbar sein. Auch muss man mehrere Bilder zu den einzelnen Personen sehen können.
    // Hier müssen noch Kathegorien eingefügt werden.
    // Füge hier weitere Einträge hinzu
    // Hier muss noch eingefügt werde, dass man verschiedenes eingeben kann.
    // Hier sollte man das eleganter mit einer Datei lösen.
    // Bilder noch weiter strukturieren ? -> Datenbank, Ordner für die Buchstaben ?
    // Jede Person wird ein push werden müssen. 
    // Ausschau nach weiteren halten, immer.
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