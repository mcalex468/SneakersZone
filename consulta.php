<?php
$result = $conn->query("SELECT * FROM tu_tabla");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . " - Nombre: " . $row['nombre'] . "<br>";
    }
} else {
    echo "No se encontraron resultados.";
}
$conn->close();
?>
