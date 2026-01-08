<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: aplication/json");
require "../config/db.php";


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
