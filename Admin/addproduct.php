<?php

require '../connection.php';

$name=$_GET['name'];
$price=$_GET['price'];
$category=$_GET['category'];

//SELECTION
$sql="INSERT INTO products(name,amount,category) VALUES('$name','$price','$category')";

$result=$con->query($sql);

if($result) {
echo "Product Creation Successful";
 }else {
 	echo 0;
 }
 ?>
