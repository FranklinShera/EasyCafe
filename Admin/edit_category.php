<?php 

include_once '../connection.php';
$id=$_GET['id'];
$value=$_GET['value'];
$column=$_GET['column'];

 //select to check if the value is the same
$sql1="SELECT `".$column."` FROM `categories` WHERE id='$id'";

 $compare=$con->query($sql1)->fetch_assoc();
 if($compare[$column]!=$value) {
   $sql="UPDATE `categories` SET `".$column."`='$value'  WHERE id='$id'";
$result=$con->query($sql);

if($result) {
  echo "Edited $column successfully";
}else {
  echo "$column already taken.$con->error";
}

}else {
 return "1 $con->error";
}