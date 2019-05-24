<?php

require '../connection.php';
$id=$_GET['id'];
$sql="DELETE FROM products WHERE id='$id'";
$result=$con->query($sql);

if($result) {

	echo "products Successfully Deleted";	
	
}else {
	echo "Failed to deleted products";
}

 ?>