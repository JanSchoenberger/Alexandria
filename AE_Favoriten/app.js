function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
}

function displayFavorites(favorites) {

    let counter = 0;
    //const gallery = document.querySelector('.gallery');
    // Loop through the people
    for (let name in favorites) {
        // Create a new div element for the person
        const favoriten = document.querySelector('.favoriten');
        const personDiv = document.createElement('div');
        personDiv.className = 'person';
        let img = document.createElement('img');

        //Auslesung Key-Value-Paare
        let keyValue = favorites[name];
        console.log(keyValue);
        let key = Object.keys(keyValue)[0];
        let value = keyValue[key];
        console.log(key);
        console.log(value);
        img.src = value; // Adjust the path if necessary,  './AE_Quiz/' +
        img.alt = key;

        var p = document.createElement('p');
        p.textContent = key;

      // Textinput als Teil der Bilder ?

      // Append the img element to the personDiv
    personDiv.appendChild(img);
    personDiv.appendChild(p);
      // Append the personDiv to the gallery
    favoriten.appendChild(personDiv);

}}

document.addEventListener('DOMContentLoaded', async function () {	
    let favorites = loadFavorites();
    displayFavorites(favorites);
});