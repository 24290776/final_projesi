<?php
$conn = new mysqli("localhost", "root", "", "green_koleksiyon");
if ($conn->connect_error) {
    die();
}
$result = $conn->query("SELECT * FROM istekler");
if ($result->num_rows > 0) {
    echo "<h1>İstekler</h1>";
    echo "<table border='1'>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"] . "</td><td>" . $row["adSoyad"] . "</td><td>" . $row["email"] . "</td><td>" . $row["mesaj"] . "</td><td>" . $row["tarih"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "İstek yok.";
}
$conn->close();
?>
