<?php
// En un escenario real, estos datos vendrían de una base de datos
$peliculas = [
    [
        'titulo' => 'Los Sueños',
        'descripcion' => 'Esta original película, dividida en ocho cortometrajes de unos veinte minutos de duración cada uno, narra los sueños reales que su director, Akira Kurosawa, ha ido teniendo a lo largo de su vida.',
        'afiche' => 'https://ejemplo.com/afiche-padrino.jpg',
        'enlace' => 'https://ejemplo.com/ver-el-padrino'
    ],
    [
        'titulo' => 'Pulp Fiction',
        'descripcion' => 'Las vidas de dos mafiosos, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención.',
        'afiche' => 'https://ejemplo.com/afiche-pulp-fiction.jpg',
        'enlace' => 'https://ejemplo.com/ver-pulp-fiction'
    ],
    // Añade más películas aquí
];

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($peliculas); 