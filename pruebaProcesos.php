<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cine_registro";

// crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// verificar la conexión
if ($conn->connect_error) {
    die('Conexión fallida ' . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['ciudad']) && isset($_POST['pais']) && isset($_POST['role'])) { 
        // Procesar el formulario de registro
        $name = $_POST['name']; 
        $email = $_POST['email']; 
        $ciudad = $_POST['ciudad']; 
        $pais = $_POST['pais']; 
        $role = $_POST['role']; 
        
        $sql = "INSERT INTO registros (nombre, email, ciudad, pais, rol) VALUES ('$name', '$email', '$ciudad', '$pais', '$role')"; 
        
        if ($conn->query($sql) === TRUE) { 
            echo "Registro exitoso!";
        } else { 
            echo "Error: " . $sql . "<br>" . $conn->error; 
    } 
} 

$conn->close();
