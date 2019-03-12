<?php 


//connection
require 'connection.php';
$conn=$con;
// Main meals
$sql='SELECT * FROM products WHERE category="Main Meals" ';

$main_meals=$conn->query($sql);


// Drinks
$sql1='SELECT * FROM products WHERE category="DRINKS" ';

$drinks=$conn->query($sql1);

// Beverages
$sql2='SELECT * FROM products WHERE category="BEVERAGES" ';

$drinks=$conn->query($sql2);

// other products
$sql3='SELECT * FROM products WHERE category="OTHERS" ';

$others=$conn->query($sql3);

?>