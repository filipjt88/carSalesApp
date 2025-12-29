<?php
require "./config/db.php";
session_start();

$user_id = 1;

$stmt = $pdo->prepare("INSERT INTO cars (user_id, brand, model, year, price, km, fuel, gearbox, body, city, description" VALUES(?,?,?,?,?,?,?,?,?,?,?));
