<?php

include_once '../connection.php';
$id=$_GET['id'];
$value=$_GET['instock'];
$column="instock";

 $sql="UPDATE `products` SET `".$column."`='$value'  WHERE id='$id'";
 $result=$con->query($sql);

if($result) {
  echo "product status updated";
}else {
  echo "1";
}

 ?>