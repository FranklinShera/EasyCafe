<?php

require '../connection.php';
$id=$_GET['id'];
$sql="DELETE FROM categories WHERE id='$id'";
$result=$con->query($sql);

if($result) {
	$sql1="DELETE FROM products WHERE category='$id'";
	$result1=$con->query($sql1);
	if($result1) {
	echo "Category Successfully Deleted";	
	}else {
		echo "$con->error";
	}
	
}else {
	echo "Failed to deleted Category";
}

 ?>