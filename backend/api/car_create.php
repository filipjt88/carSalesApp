<?php
require "./config/db.php";
session_start();

$user_id = 1;

$stmt = $pdo->prepare("INSERT INTO cars (user_id, brand, model, year, price, km, fuel, gearbox, body, city, description" VALUES(?,?,?,?,?,?,?,?,?,?,?));

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

$car_id = $pdo=>lastInsertId();

