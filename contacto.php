<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['tel'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $data = "Nombre: $nombre\nTeléfono: $telefono\nCorreo Electrónico: $email\nMensaje: $mensaje\n\n";
    file_put_contents('contactos.txt', $data, FILE_APPEND);

    echo "Gracias por ponerte en contacto con nosotros.";
}

