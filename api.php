<?php
$servername = "localhost";
$username = "root"; // Cambia esto
$password = ""; // Cambia esto
$dbname = "cine_patrimonio"; // Nombre de tu base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

header("Content-Type: application/json");
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $sql = "SELECT * FROM peliculas WHERE id = $id";
        } else {
            $sql = "SELECT * FROM peliculas";
        }
        $result = $conn->query($sql);
        $peliculas = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($peliculas);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $titulo = $data['titulo'];
        $director = $data['director'];
        $anio = $data['anio'];
        $genero = $data['genero'];
        $sql = "INSERT INTO peliculas (titulo, director, anio, genero) VALUES ('$titulo', '$director', $anio, '$genero')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["mensaje" => "Película agregada exitosamente"]);
        } else {
            echo json_encode(["error" => $conn->error]);
        }
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($_GET['id']);
        $titulo = $data['titulo'];
        $director = $data['director'];
        $anio = $data['anio'];
        $genero = $data['genero'];
        $sql = "UPDATE peliculas SET titulo='$titulo', director='$director', anio=$anio, genero='$genero' WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["mensaje" => "Película actualizada exitosamente"]);
        } else {
            echo json_encode(["error" => $conn->error]);
        }
        break;

    case 'DELETE':
        $id = intval($_GET['id']);
        $sql = "DELETE FROM peliculas WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["mensaje" => "Película eliminada exitosamente"]);
        } else {
            echo json_encode(["error" => $conn->error]);
        }
        break;

    default:
        echo json_encode(["error" => "Método no soportado"]);
        break;
}

$conn->close();
?>
