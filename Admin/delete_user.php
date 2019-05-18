<?php

include '../connection.php';

$id=$_GET['id'];
$sql="DELETE FROM `users` WHERE id='$id'";
$result=$con->query($sql);

if($result) {
	echo 1;
 }else {
 	echo 0;
 }
 ?>
