let imageDictionary = {};
let categorySelect = document.getElementById('category-select');

document.addEventListener('DOMContentLoaded', async function() {
    
    
    const selectedCategory = localStorage.getItem('selectedCategory');
    
    const gallery = document.querySelector('.gallery');


    if (selectedCategory) {
        categorySelect.value = selectedCategory;
    }

    await readJSON(categorySelect.value);


    // Loop through the people
    for (let name in imageDictionary) {
    // Create a new div element for the person
    const personDiv = document.createElement('div');
    personDiv.className = 'person';

      // Create an img element for the person's picture
    const img = document.createElement('img');
    img.src = '../AE_People_Quiz/images/' + imageDictionary[name]; // Adjust the path if necessary
    img.alt = name;

    var p = document.createElement('p');
    p.textContent = name;
      

      // Textinput als Teil der Bilder ?

      // Append the img element to the personDiv
    personDiv.appendChild(img);
    personDiv.appendChild(p);
      // Append the personDiv to the gallery
    gallery.appendChild(personDiv);
    }
});

// Auswahl der Kategorie:
categorySelect.addEventListener('change', async function() {
  localStorage.setItem('selectedCategory', this.value);
  await readJSON(this.value);
  remainingImages = Object.keys(imageDictionary);
  location.reload();
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
        const response = await fetch(`../AE_People_Quiz/kategories/${filePath}.json`);
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

