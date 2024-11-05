<?php
$servername = "localhost";
$username = "tu_usuario"; 
$password = "tu_contraseña"; 
$dbname = "tu_base_de_datos"; 
// Crear conexión 
$conn = new mysqli($servername, $username, $password, $dbname); 
// Verificar conexión 
if ($conn->connect_error) { 
    die("Conexión fallida: " . $conn->connect_error); 
} 
// Obtener datos del formulario 
$nombre = $_POST['nombre']; 
$email = $_POST['email']; 
$rol = $_POST['rol']; 
// Insertar datos en la base de datos 
$sql = "INSERT INTO usuarios (nombre, email, rol) VALUES ('$nombre', '$email', '$rol')"; 
if ($conn->query($sql) === TRUE) { 
    echo "Registro exitoso!"; 
} else { 
    echo "Error: " . $sql . "<br>" . $conn->error; 
} 
$conn->close();

?>
