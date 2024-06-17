<?php
include 'config.php';

function addUser($nombre, $correo, $contrasenia) {
    global $conn;
    $query = "INSERT INTO user (NOMBRE, CORREO, CONTRASEÑA, ROL) VALUES (:nombre, :correo, :contrasenia,'usuario')";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':correo', $correo);
    $stmt->bindParam(':contrasenia', $contrasenia);
    return $stmt->execute();
}

function getUserByEmail($email) {
    global $conn;
    $query = "SELECT * FROM user WHERE CORREO = :email";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}
?>