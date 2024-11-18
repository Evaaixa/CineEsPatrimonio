let currentIndex = 0; //índice inicial
const moviesPerPage = 10; //número de películas a cargar por cada vez

fetch('peliculas.json')
  .then(response => response.json())
  .then(data => {
    const allTimeBest = data.all_time_best;

    const allTimeBestTbody = document.getElementById('all-time-best-tbody');
    const loadMoreButton = document.getElementById('load-more');

    // Función para cargar películas
    const loadMovies = () => {
      const nextMovies = allTimeBest.slice(currentIndex, currentIndex + moviesPerPage);
      nextMovies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="poster-cell">
            <a href="${movie.trailer}" target="_blank">
              <img src="${movie.poster}" alt="Poster de ${movie.title}" title="Haz clic para ver el trailer de la película"></a>
          </td>
          <td>
            <a href="criticas.html?pelicula=${movie.id}" target="_blank" title="Haz clic para acceder a la página de Críticas">${movie.title}</a>
          </td>
          <td>${movie.director}</td>
          <td>${movie.year}</td>
          <td>${movie.country}</td>
          <td>${movie.comment}</td>
        `;
      allTimeBestTbody.appendChild(row);
    });
  };

  // cargar las películas iniciales
  loadMovies();

  // cargar más películas al hacer clic en el botón
  loadMoreButton.addEventListener('click', loadMovies);
})

.catch(error => console.error('Error:', error));

