
function mostrarCritica() { 
    const params = new URLSearchParams(window.location.search); 
    const peliculaId = params.get('pelicula'); 
    
    fetch('peliculas.json') 
        .then(response => response.json()) 
        .then(data => { 
            const pelicula = data.all_time_best.find(p => p.id === peliculaId); 
            
            if (pelicula) { 
                document.getElementById('titulo').innerText = pelicula.title; 
                document.getElementById('director').innerText = "Director: " + pelicula.director; 
                document.getElementById('genero').innerText = "Género: " + pelicula.genero; 
                document.getElementById('duracion').innerText = "Duración: " + pelicula.duracion; 
                document.getElementById('resumen').innerText = "Resumen: " + pelicula.resumen; 
                document.getElementById('analisis').innerText = "Análisis: " + pelicula.analisis; 
                document.getElementById('opinion').innerText = "Opinión Personal: " + pelicula.opinion; 
            } else { 
                document.getElementById('contenido').innerText = "No se encontró la crítica para esta película."; 
            } 
        }) 
        .catch(error => console.error('Error al cargar el archivo JSON:', error)); 
    } 
    window.onload = mostrarCritica;