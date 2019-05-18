<?php 

include_once '../connection.php';
$id=$_POST['id'];
$value=$_POST['value'];
$column=$_POST['column'];

//select to check if the value is the same
$sql1="SELECT `".$column."` FROM `users` WHERE id='$id'";

$compare=$con->query($sql1)->fetch_assoc();
if($compare[$column]!=$value) {
  $sql="UPDATE `users` SET `".$column."`='$value'  WHERE id='$id'";
 $result=$con->query($sql);

if($result) {
  echo "Edited $column successfully";
}else {
  echo "Username already taken";
}

}else {
 return "1";
}


 ?>

