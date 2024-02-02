let filePath = "random"
let imageDictionary = {};

document.addEventListener('DOMContentLoaded', async function() {

    await readJSON(filePath);
    console.log(imageDictionary);
    console.log('Mach was');

    const gallery = document.querySelector('.gallery');
    // Loop through the people
    for (let name in imageDictionary) {
    // Create a new div element for the person
    const personDiv = document.createElement('div');
    personDiv.className = 'person';

      // Create an img element for the person's picture
    const img = document.createElement('img');
    img.src = '../AE_People_Quiz/images/' + imageDictionary[name]; // Adjust the path if necessary
    img.alt = name;

      // Append the img element to the personDiv
    personDiv.appendChild(img);

      // Append the personDiv to the gallery
    gallery.appendChild(personDiv);
    }
    console.log('Mach was');
});


async function readJSON(filePath) {
    if (filePath === "random") {
        const response = await fetch('../AE_People_Quiz/image_dictionary.json');
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

function redirectToDetails(personId) {
  // Replace with the actual URL structure of your website
    window.location.href = `/${personId}-details.html`;
}

