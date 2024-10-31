
// Datos de las películas
const movies = [
    {
        id: 1,
        title: "I Wanna Be a Sailor",
        src: "",
        thumbnail: "/api/placeholder/200/300", // Reemplaza con la ruta a tu imagen
        description: "Descripción de la película 1"
    },
    {
        id: 2,
        title: "Película 2",
        src: "pelicula2.webm",
        thumbnail: "/api/placeholder/200/300", // Reemplaza con la ruta a tu imagen
        description: "Descripción de la película 2"
    },
    {
        id: 3,
        title: "Película 3",
        src: "pelicula3.webm",
        thumbnail: "/api/placeholder/200/300", // Reemplaza con la ruta a tu imagen
        description: "Descripción de la película 3"
    }
];

// Generar miniaturas
function generateThumbnails() {
    const movieGrid = document.getElementById('movieGrid');
    
    movies.forEach(movie => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'movie-thumbnail';
        thumbnail.innerHTML = `
            <img src="${movie.thumbnail}" alt="${movie.title}">
            <div class="movie-thumbnail-title">${movie.title}</div>
        `;
        
        thumbnail.addEventListener('click', () => cargarPelicula(movie));
        movieGrid.appendChild(thumbnail);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Todo tu código JavaScript aquí
    document.querySelectorAll('.acordeon-header').forEach(button => {
        button.addEventListener('click', () => {
            const acordeonItem = button.parentElement;
            
            // Cierra todos los demás items
            document.querySelectorAll('.acordeon-item').forEach(item => {
                if (item !== acordeonItem) {
                    item.classList.remove('activo');
                }
            });
            
            // Toggle del item actual
            acordeonItem.classList.toggle('activo');
        });
    });
});

// Cargar película seleccionada
function cargarPelicula(movie) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoContainer = document.getElementById('videoContainer');
    const movieTitle = document.getElementById('movieTitle');
    const movieDescription = document.getElementById('movieDescription');

    videoPlayer.src = movie.src;
    videoContainer.classList.add('active');
    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;

    // Hacer scroll suave hasta el video
    videoContainer.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    if (name === '' || email === '' || role === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
});

function mostrarDescripcion(id) {
    document.getElementById(id) . textContent = document.querySelector(`img[data-descripcion='${id}']`) .dataset.descrpcion;
    document.getElementById(id).style.display = 'block';
}

function ocultarDescripcion(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.searchable-item');
    
    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const chaplin = document.getElementById('chaplin');
    const speechBubble = document.getElementById('speech-bubble');
    const speechText = document.getElementById('speech-text');

    let voices = [];

    function getVoices() {
        voices = speechSynthesis.getVoices();
        console.log(voices);
    }

    speechSynthesis.onvoiceschanged = getVoices;
    getVoices();

    chaplin.addEventListener('click', () => {
        speechBubble.style.display = 'block';
        speakText(speechText.textContent);
    });

    function speakText(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speech.voice = voices.find(voice => voice.name === 'Google español'); // Ajusta el nombre de la voz aquí
            window.speechSynthesis.speak(speech);
        } else {
            alert('Lo siento, tu navegador no soporta la síntesis de voz.');
        }
    }
});