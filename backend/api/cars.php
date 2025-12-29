<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once "../config/db.php";


$sql = "SELECT * FROM cars WHERE 1=1;


$params = [];

if(!empty($_GET['brand'])) {
    $sql .= " AND c.brand = :brand";
    $params['brand'] = $_GET['brand'];
}

if(!empty($_GET['model'])) {
    $sql .= " AND c.model = :model";
    $params['model'] = $_GET['model'];
}

if(!empty($_GET['fuel'])) {
    $sql .= " AND c.fuel = :fuel";
    $params['fuel'] = $_GET['fuel'];
}

if(!empty($_GET['priceTo'])) {
    $sql .= " AND c.price = :priceTo";
    $params['priceTo'] = (int)$_GET['priceTo'];
}

if(!empty($_GET['yearFrom'])) {
    $sql .= " AND c.year = :yearFrom";
    $params['yearFrom'] = (int)$_GET['yearFrom'];
}

if(!empty($_GET['yearTo'])) {
    $sql .= " AND yearTo = :yearTo";
    $params['yearTo'] = (int)$_GET['yearTo'];
}

$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$cars = $stmt->fetchAll();

foreach ($cars as $car) {
    $car['images'] = $car['images'] ? explode(',', $car['images']) : [];
}

echo json_encode($cars);