<?php

require '../connection.php';
$id=$_GET['id'];
$sql="DELETE FROM promotion WHERE id='$id'";
$result=$con->query($sql);

if($result) {
echo "Successfully Deleted";
	
}else {
	echo 1;
}

 ?>