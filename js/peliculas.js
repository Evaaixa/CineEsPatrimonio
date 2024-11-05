 // Agregar un evento de clic a las imágenes de los pósters
 const posters = document.querySelectorAll('.movie-poster-table');
 const mainPoster = document.getElementById('main-movie-poster');
 const movieTitle = document.getElementById('movie-title');
 const movieInfo = document.getElementById('movie-info');
 const trailerLink = document.getElementById('trailer-link');

 posters.forEach(poster => {
   poster.addEventListener('click', () => {
     const title = poster.dataset.title;
     const director = poster.dataset.director;
     const year = poster.dataset.year;
     const country = poster.dataset.country;
     const trailer = poster.dataset.trailer;

     movieTitle.textContent = title;
     movieInfo.textContent = `Director: ${director} | Year: ${year} | Country: ${country}`;
     trailerLink.href = trailer;
     mainPoster.src = poster.src;
     mainPoster.alt = title;
   });
 });