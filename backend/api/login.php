<?php
require_once "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

if(empty($data['email']) || empty($data['password'])) {
    http_response_code(400);
    echo json_encode(["error" => "Email i password su obavezni!"]);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
$stmt->execute(["email" => $data['email']]);
$user = $stmt->fetch();

if(!$user || !password_verify($data['password'], $user['password'])) {
    http_response_code(401);
    echo json_encode(["error" => "Pogresan email ili password!"]);
    exit;
}

echo json_encode([
    "id" => $user['id'],
    "name" => $user['name'],
    "email" => $user['email']
]);