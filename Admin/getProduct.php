<?php

require '../connection.php';

$id=$_GET['id'];

$sql="SELECT id,name,amount as price FROM products WHERE id='$id'";
$result=$con->query($sql)->fetch_assoc();

 echo json_encode($result);
 ?>