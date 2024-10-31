document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('.titulo-patrimonio');
    const colors = ['#f4f1ea', '#cd853f', '#d2b48c', '#8b4513'];

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        titulo.style.color = randomColor;
    }, 1000);
});
