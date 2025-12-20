<?php
require_once "../config/db.php";

$sql = "SELECT * FROM cars WHERE 1 = 1";
$params = [];

if(!empty($_GET['brand'])) {
    $sql .= " AND brand = :brand";
    $params['brand'] = $_GET['brand'];
}

if(!empty($_GET['model'])) {
    $sql .= " AND model = :model";
    $params['model'] = $_GET['model'];
}

if(!empty($_GET['fuel'])) {
    $sql .= " AND fuel = :fuel";
    $params['fuel'] = $_GET['fuel'];
}

if(!empty($_GET['priceTo'])) {
    $sql .= " AND priceTo = :priceTo";
    $params['priceTo'] = $_GET['priceTo'];
}

if(!empty($_GET['yearTo'])) {
    $sql .= " AND yearTo = :yearTo";
    $params['yearTo'] = $_GET['yearTo'];
}

$stmt = $pdo->prepare($sql);
$stmt->execute($params);

echo json_encode($stmt->fetchAll());