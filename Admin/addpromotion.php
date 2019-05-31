<?php

//require connection
 require '../connection.php';

$name=$_GET['name'];
$product_id=$_GET['id'];
$priceoff=$_GET['priceoff'];

 $sql="INSERT INTO `promotion`( `name`, `product_id`, `priceoff`) VALUES ('$name','$product_id','$priceoff')";

$result=$con->query($sql);
if($result) {
	echo "$name promotion has been created";
 }else {
 	echo 1;
 }
?>