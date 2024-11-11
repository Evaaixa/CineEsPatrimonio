<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $ciudad = $_POST['ciudad'];
    $pais = $_POST['pais'];
    $role = $_POST['role'];

    $data = "Nombre: $name\nCorreo Electrónico: $email\nCiudad: $ciudad\nPaís: $pais\nRol: $role\n\n";
    file_put_contents('registros.txt', $data, FILE_APPEND);

    echo "Registro completado con éxito.";
}

