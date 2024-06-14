
// Array di immagini e video per il background
const media = [
    'images/background1.jpg',
    'images/background2.jpg',
    'images/background3.jpg',
    'images/background4.jpg',
    'images/background5.jpg',
    'images/background6.jpg',
    // aggiungi altri percorsi di immagini e video qui
];

// Variabile per tenere traccia del media attuale
let currentMediaIndex = Math.floor(Math.random() * media.length);

// Funzione per cambiare il media di background
function changeBackground() {
    const container = document.querySelector('.container');
    const backgroundVideo = document.querySelector('.background-video');
    const currentMedia = media[currentMediaIndex];

    if (currentMedia.endsWith('.mp4')) {
        backgroundVideo.src = currentMedia;
        backgroundVideo.style.display = 'block';
        container.style.backgroundImage = 'none';
    } else {
        backgroundVideo.style.display = 'none';
        container.style.backgroundImage = `url(${currentMedia})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
    }
}

// Cambia il media di background all'inizio
window.onload = changeBackground;

// Gestione del form per la password
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    // Mappa delle password e dei rispettivi PDF
    const passwordToPDF = {
        'amalfi': 'pdf/amalfi.pdf',
        'password2': 'pdf/documento2.pdf',
        // aggiungi altre password e PDF qui
    };

    if (password in passwordToPDF) {
        window.location.href = passwordToPDF[password];
    } else {
        // Cancella il campo password se la password è errata
        document.getElementById('password').value = '';
    }
});
