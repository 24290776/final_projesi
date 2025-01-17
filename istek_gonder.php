<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "green_koleksiyon";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $adSoyad = $_POST['adSoyad'];
    $email = $_POST['email'];
    $mesaj = $_POST['mesaj'];

    $sql = "INSERT INTO istekler (adSoyad, email, mesaj) VALUES ('$adSoyad', '$email', '$mesaj')";
    $conn->query($sql);
    echo "İsteğiniz alındı. <a href='istekleri_gor.php'>İstekleri Gör</a>";
}

$conn->close();
?>