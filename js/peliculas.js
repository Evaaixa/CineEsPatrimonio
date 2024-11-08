fetch('peliculas.json')
  .then(response => response.json())
  .then(data => {
    const allTimeBest = data.all_time_best;
    const hispanicMovies = data.hispanic_movies;
    const asianMovies = data.asian_movies;

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
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td>${movie.country}</td>
        <td>${movie.comment}</td>
      `;
      allTimeBestTbody.appendChild(row);
    });

    const hispanicMoviesTable = document.getElementById('hispanic-movies-table');
    const hispanicMoviesTbody = document.getElementById('hispanic-movies-tbody');

    hispanicMovies.forEach(movie => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td class="poster-cell">
            <a href="${movie.trailer}" target="_blank">
              <img src="${movie.poster}" alt="Poster de ${movie.title}">
            </a>
          </td>
          <td>${movie.title}</td>
          <td>${movie.director}</td>
          <td>${movie.year}</td>
          <td>${movie.country}</td>
      `;
      hispanicMoviesTbody.appendChild(row);
    });

    const asianMoviesTable = document.getElementById('asian-movies-table');
    const asianMoviesTbody = document.getElementById('asian-movies-tbody');

    asianMovies.forEach(movie => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td class="poster-cell">
            <a href="${movie.trailer}" target="_blank">
              <img src="${movie.poster}" alt="Poster de ${movie.title}">
            </a>
          </td>
          <td>${movie.title}</td>
          <td>${movie.director}</td>
          <td>${movie.year}</td>
          <td>${movie.country}</td>
      `;
      asianMoviesTbody.appendChild(row);
    });
  });