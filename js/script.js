
document.addEventListener('DOMContentLoaded', function() {
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
})

// inicializar los carruseles
const carousels = {};
const autoplayIntervals = {};
const AUTOPLAY_DELAY = 3000; // 3 segundos entre cada transición

// Inicializar los carruseles
function initCarousels() {
    ['carousel-left', 'carousel-center', 'carousel-right'].forEach(id => {
        const container = document.getElementById(id);
        carousels[id] = {
            currentSlide: 0,
            totalSlides: container.children.length,
            isPlaying: false
        };
        startAutoplay(id); // Iniciar autoplay automáticamente
    });
}

// Mover las diapositivas con transición circular
function moveSlide(carouselId, direction) {
    const carousel = carousels[carouselId];
    const container = document.getElementById(carouselId);
    
    carousel.currentSlide = (carousel.currentSlide + direction + carousel.totalSlides) % carousel.totalSlides;
    
    // Aplicar la transición
    container.style.transform = `translateX(-${carousel.currentSlide * 100}%)`;
}

// Iniciar autoplay
function startAutoplay(carouselId) {
    if (!carousels[carouselId].isPlaying) {
        carousels[carouselId].isPlaying = true;
        updateAutoplayButton(carouselId);
        autoplayIntervals[carouselId] = setInterval(() => {
            moveSlide(carouselId, 1);
        }, AUTOPLAY_DELAY);
    }
}

// Detener autoplay
function stopAutoplay(carouselId) {
    if (carousels[carouselId].isPlaying) {
        carousels[carouselId].isPlaying = false;
        updateAutoplayButton(carouselId);
        clearInterval(autoplayIntervals[carouselId]);
    }
}

// Alternar autoplay
function toggleAutoplay(carouselId) {
    if (carousels[carouselId].isPlaying) {
        stopAutoplay(carouselId);
    } else {
        startAutoplay(carouselId);
    }
}

// Actualizar el botón de autoplay
function updateAutoplayButton(carouselId) {
    const carousel = document.getElementById(carouselId).parentElement;
    const playIcon = carousel.querySelector('.play-icon');
    const pauseIcon = carousel.querySelector('.pause-icon');
    
    if (carousels[carouselId].isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}

// Pausar autoplay cuando el usuario interactúa con los botones de navegación
document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const carouselId = button.closest('.carousel').querySelector('.carousel-container').id;
        stopAutoplay(carouselId);
    });
});

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initCarousels); 