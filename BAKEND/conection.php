<?php
$host = 'sql8.freesqldatabase.com';
$dbname = 'sql8744528';
$username = 'sql8744528';
$password = '39vcXZrM6W';
$port = 3306;

// Crear una nueva conexión MySQLi
$conn = new mysqli($host, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar: " . $conn->connect_error);
}
echo "Conexión exitosa a la base de datos usando MySQLi";
?>
