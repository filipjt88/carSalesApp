<?php
require "../config/db.php";
session_start();


$brand = $_POST['brand'] ?? '';
$model = $_POST['model'] ?? '';
$year  = $_POST['year'] ?? null;
$price = $_POST['price'] ?? null;


$user_id = 1;

$sql = "
INSERT INTO cars 
(
    user_id,
    brand,
    model,
    year,
    price,
    km,
    fuel,
    gearbox,
    body,
    city,
    description
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $user_id,
    $_POST['brand'],
    $_POST['model'],
    $_POST['year'],
    $_POST['price'],
    $_POST['km'],
    $_POST['fuel'],
    $_POST['gearbox'],
    $_POST['body'],
    $_POST['city'],
    $_POST['description']
]);

$car_id = $pdo->lastInsertId();


$uploadDir = "../uploads";
$isMain = 1;

foreach ($_FILES['images']['tmp_name'] as $i => $tmp) {
    $name = time(). "_" . $_FILES['images']['name'][$i];
    move_uploaded_file($tmp, $uploadDir . $name);

    $stmt = $pdo->prepare("INSERT INTO images (car_id, path, is_main) VALUES (?,?,?)");
    $stmt->execute([$car_id, $name, $isMain]);
    $isMain = 0;
}

echo json_encode(["success" => true]);