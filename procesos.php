<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $role = htmlspecialchars($_POST['role']);

    // Aquí puedes agregar código para guardar los datos en una base de datos o enviar un correo electrónico
    echo "Nombre: " . $name . "<br>";
    echo "Correo Electrónico: " . $email . "<br>";
    echo "Rol: " . $role . "<br>";
}
?>
<!-- // obtener_peliculas.php

<?php
$rss = simplexml_load_file('https://ejemplo.com/rss');
foreach ($rss->channel->item as $item) {
    echo '<div class="noticia">';
    echo '<h2>' . $item->title . '</h2>';
    echo '<p>' . $item->description . ' <a href="' . $item->link . '" target="_blank">Leer más</a></p>';
    echo '</div>';
}
?>
