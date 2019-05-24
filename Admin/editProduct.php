<?php

include_once '../connection.php';
$id=$_GET['id'];
$value=$_GET['value'];
$column=$_GET['column'];




//select to check if the value is the same
$sql1="SELECT `".$column."` FROM `products` WHERE id='$id'";

$compare=$con->query($sql1)->fetch_assoc();
if($compare[$column]!=$value) {
  $sql="UPDATE `products` SET `".$column."`='$value'  WHERE id='$id'";
 $result=$con->query($sql);

if($result) {
  echo "Edited $column successfully";
}else {
	echo "$value already exist.Kindly Use another name!!";
}

}else {
 echo 1;
}



 ?>