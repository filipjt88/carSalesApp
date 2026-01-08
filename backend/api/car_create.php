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
