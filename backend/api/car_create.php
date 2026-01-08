<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: aplication/json");
require "../config/db.php";


// Validacija
if($_SERVER['REQUEST_METHOD'] !== "POST") {
    echo json_encode(["error" => "Invaliad request!"]);
    exit;
}

$brand       = $_POST['brand'] ?? '';
$model       = $_POST['model'] ?? '';
$year        = $_POST['year'] ?? null;
$price       = $_POST['price'] ?? null;
$km          = $_POST['km'] ?? null;
$fuel        = $_POST['fuel'] ?? '';
$gearbox     = $_POST['gearbox'] ?? '';
$body        = $_POST['body'] ?? '';
$city        = $_POST['city'] ?? '';
$description = $_POST['description'] ?? '';
$user_id     = 1; // trenutno (kasnije token)

// Check
if(!$brand || !$model || !$price) {
    echo json_encode(["error" => "Obavezna polja nisu popunjena!"]);
    exit;
}

// Insert to db
$stmt = $pdo->prepare("INSERT INTO cars(user_id, brand, model, year, price, km, fuel, gearbox, body, city, description) VALUES (:user_id, :brand, :model, :year, :price, :km, :fuel, :gearbox, :body, :city, :description)");

$stmt->execute([
    ":user_id" => $user_id,
    ":brand"   => $brand,
    ":model"   => $model,
    ":year"    => $year,
    ":price"   => $price,
    ":km"      => $km,
    ":fuel"    => $fuel,
    ":gearbox" => $gearbox,
    ":body"    => $body,
    ":city"    => $city,
    ":description" => $description
]);

$car_id = $pdo->lastInsertId();

// Upload slike za auto
if(isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
    // Upload
    $uploadDir = "../uploads/";
    if(!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $fileName = time(). "_" . uniqid() . "." . $ext;
    $targetPath = $uploadDir . $fileName;

    // Upload file
    if(move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
        $stmtImg = $pdo->prepare("
        INSERT INTO images (car_id, path, is_main)
            VALUES (:car_id, :path, 1)
        ");
    $stmtImg->execute([
        ":car_id" => $car_id,
        ":path"   => $fileName
    ]);
    }
}

// Response
echo json_encode([
    "success" => true,
    "car_id"  => $car_id
]);
