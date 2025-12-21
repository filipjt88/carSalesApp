<?php
require_once "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

if(
    empty($data['name']) || empty($data['email']) || empty($data['password'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Sva polja su obavezna!"]);
    exit;
}

$name     = trim($data['name']);
$email    = trim($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    $stmt->execute([
        "name" => $name,
        "email" => $email,
        "password" => $password
    ]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(409);
    echo json_encode(["error" => "Email vec postoji!"]);
}