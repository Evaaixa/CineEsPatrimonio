fetch('peliculas.json')
  .then(response => response.json())
  .then(data => {
    const allTimeBest = data.all_time_best;

    const allTimeBestTable = document.getElementById('all-time-best-table');
    const allTimeBestTbody = document.getElementById('all-time-best-tbody');

    allTimeBest.forEach(movie => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="poster-cell">
          <a href="${movie.trailer}" target="_blank">
            <img src="${movie.poster}" alt="Poster de ${movie.title}">
          </a>
        </td>
        <td><a href="criticas.html?pelicula=${movie.id}" target="_blank">${movie.title}</a>
        </td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td>${movie.country}</td>
        <td>${movie.comment}</td>
      `;
      allTimeBestTbody.appendChild(row);
    });
  });
