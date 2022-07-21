const words =  ["aber",  "alle",  "als", "am",  "an",  "andere",  "auch",  "auf",  "aus",  "Auto"]
const quoteDisplayElement = document.getElementById("quoteDisplay")
var neueListe = []

function get20Words(words, neueListe) {
   
    for (let index = 0; index < 20; index++) {
        
        var stelle = Math.floor(Math.random())
        neueListe.push(words[stelle])
        console.log(words[stelle])
    }

    return neueListe // Ich will mehr lauffähige Software schreiben, ich bin bereit dazu und der Drang dazu ist hoch.

}
neueListe = get20Words(words, neueListe)
console.log(neueListe)

function renderNewList(neueListe) {
    quoteDisplayElement.innerText = neueListe 
}

renderNewList(neueListe)
// Wenn ich eine Programmiersprache brauche, dann lerne ich sie. Das kann ich unter anderem weil ich mehr Grundlagen begrifffen habe als jemals zuvor.
// Ich werde sehr klar besser in der Programmierung und das wird wirklich auch Zeit.
// Diese Webseite wird noch sehr viel Arbeit, aber sie wird sich sehr klar lohnen.
