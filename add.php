
<?php

$id=$_POST['id'];

$quantity=$_POST['quantity'];
$price=(int) $_POST['price'];

if(empty($id)&& $quantity){
echo "Empty qty and Id";
}else {

 //connection
require 'connection.php';

//if two are not zero then update else delete
if($quantity==0){

   $sql="DELETE  FROM `orders` WHERE id='$id'";

    $result=$con->query($sql);

 if($result){
 	echo 0;
 }else {
 	echo "Please Try Again";
 }//if zero delete and echo zero



}else {

 $sql="UPDATE `orders` SET `quantity`='$quantity',`price`='$price' WHERE id='$id'";

 $result=$con->query($sql);

 if($result){
 	echo 1;
 }else {
 	echo $con->error;
 }

}


}
 ?>

