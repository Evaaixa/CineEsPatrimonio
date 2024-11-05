<?php
// Conectar a la base de datos y obtener los datos de la primera película
$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "mejorespel_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM movies LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  echo "<img src='" . $row["poster"] . "' alt='" . $row["title"] . "' class='movie-poster' id='main-movie-poster'>";
} else {
  echo "<p>No movies found.</p>";
}

$conn->close();

// Obtener todos los datos de las películas
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM movies";
$result = $conn->query($sql);
$i = 1; // Índice para generar un ID único

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td><img src='" . $row["poster"] . "' alt='" . $row["title"] . "' class='movie-poster-table' id='movie-poster-" . $i . "' data-title='" . $row["title"] . "' data-director='" . $row["director"] . "' data-year='" . $row["year"] . "' data-country='" . $row["country"] . "' data-trailer='" . $row["trailerLink"] . "'></td>";
    echo "<td>" . $row["title"] . "</td>";
    echo "<td>" . $row["director"] . "</td>";
    echo "<td>" . $row["year"] . "</td>";
    echo "<td>" . $row["country"] . "</td>";
    echo "<td><a href='" . $row["trailerLink"] . "' target='_blank'>Watch Trailer</a></td>";
    echo "</tr>";
    $i++;
  }
} else {
  echo "<tr><td colspan='6'>No movies found.</td></tr>";
}

$conn->close();