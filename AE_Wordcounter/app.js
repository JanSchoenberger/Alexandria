function countWordsAndLetters() {
    var text = document.getElementById('textInput').value;
    var words = text.split(' ').filter(function(item) {
        return item != '';
    });
    var letters = text.replace(/ /g, '').length;

    document.getElementById('wordCount').innerText = words.length;
    document.getElementById('letterCount').innerText = letters;
}

document.getElementById('textInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Verhindert das Standardverhalten der Enter-Taste
        countWordsAndLetters();
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    countWordsAndLetters();
});

// Noch werden Leertasten hier nicht gezählt, aber das kann ggf angepasst, besser noch einstellbar sein.